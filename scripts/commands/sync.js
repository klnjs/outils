import fs from 'fs/promises'

import * as project from '../internal/project.js'

export const sync = async ({ packages: packagesArgs }) => {
	try {
		const packages = await project.getPackages()
		const packagesToSync = packagesArgs ?? packages

		for await (const name of packagesToSync) {
			const rootManifest = await project.getRootManifest()
			const packagePath = await project.getPackagePath(
				name,
				'package.json'
			)
			const packageManifest = await project.getPackageManifest(name)
			const manifest = JSON.stringify(
				{
					name: packageManifest.name,
					type: packageManifest.type,
					author: rootManifest.author,
					description: packageManifest.description,
					version: rootManifest.version,
					license: rootManifest.license,
					repository: {
						...rootManifest.repository,
						directory: `packages/${name}`
					},
					bin: packageManifest.bin,
					main: packageManifest.main,
					exports: packageManifest.exports,
					files: packageManifest.files,
					dependencies: packageManifest.dependencies,
					peerDependencies: packageManifest.peerDependencies
				},
				null,
				'\t'
			)

			await fs.writeFile(packagePath, manifest, 'utf8')
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}
