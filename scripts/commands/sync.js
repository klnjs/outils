import fs from 'fs/promises'

import * as project from '../internal/project.js'

const syncManifest = async (name) => {
	const rootManifest = await project.getRootManifest()
	const packagePath = await project.getPackagePath(name, 'package.json')
	const packageManifest = await project.getPackageManifest(name)
	const manifest = JSON.stringify(
		{
			name: packageManifest.name,
			type: packageManifest.type,
			author: rootManifest.author,
			description: packageManifest.description,
			version: rootManifest.version,
			license: rootManifest.license,
			main: packageManifest.main,
			bin: packageManifest.bin,
			exports: packageManifest.exports,
			repository: {
				...rootManifest.repository,
				directory: `packages/${name}`
			},
			dependencies: packageManifest.dependencies,
			peerDependencies: packageManifest.peerDependencies
		},
		null,
		'\t'
	)

	await fs.writeFile(packagePath, manifest, 'utf8')
}

export const sync = async ({ packages: packagesArgs }) => {
	const packages = await project.getPackages()
	const packagesToSync = packagesArgs ?? packages

	try {
		for await (const name of packagesToSync) {
			await syncManifest(name)
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}
