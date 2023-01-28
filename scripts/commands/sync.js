import fs from 'fs/promises'

import * as project from '../internal/project.js'

export const sync = async ({ packages: packagesArgs }) => {
	try {
		const manifest = await project.getRootManifest()
		const packages = await getPackagesFromArg(packagesArgs)

		for await (const name of packages) {
			const packageManifestPath = await project.getPackagePath(
				name,
				'package.json'
			)
			const packageManifest = await project.getPackageManifest(name)
			const packageManifestUpdated = JSON.stringify(
				{
					name: packageManifest.name,
					type: packageManifest.type,
					author: manifest.author,
					description: packageManifest.description,
					version: manifest.version,
					license: manifest.license,
					repository: {
						...manifest.repository,
						directory: `packages/${name}`
					},
					bin: packageManifest.bin,
					main: packageManifest.main,
					exports: packageManifest.exports,
					files: packageManifest.files,
					dependencies: packageManifest.dependencies,
					devDependencies: packageManifest.devDependencies,
					peerDependencies: packageManifest.peerDependencies
				},
				null,
				'\t'
			)

			await fs.writeFile(
				packageManifestPath,
				packageManifestUpdated,
				'utf8'
			)
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

const getPackagesFromArg = async (packagesArg) => {
	if (packagesArg) {
		return packagesArg
	}

	return project.getPackages()
}
