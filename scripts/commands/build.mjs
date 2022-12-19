import p from 'path'
import fs from 'fs/promises'
import cp from 'child_process'
import rmfr from 'rmfr'
import prog from 'progress'
import { pathExists } from 'find-up'

import { sleep } from '../internal/sleep.mjs'
import { readdir } from '../internal/readdir.mjs'
import * as project from '../internal/project.mjs'

const pre = async (name, progress) => {
	const script = await project.getPackagePath(name, 'scripts', 'prebuild.js')
	const exists = await pathExists(script)

	if (exists) {
		progress.tick(0, { name: `${name} - prebuild` })
		cp.execSync(`node ${script}`, { stdio: 'inherit' })
	}
}

const clean = async (name) => {
	const out = await project.getPackageBuildPath(name)

	await rmfr(out)
	await fs.mkdir(out, { recursive: true })
}

const transpile = async (name, folder, progress) => {
	const out = await project.getPackageBuildPath(name)
	const path = await project.getPackagePath(name, folder)
	const files = await readdir(path, {
		exclude: (file) => file.match(/(spec|stories)\.js$/),
		relative: true,
		recursive: true,
		encoding: 'utf8'
	})

	for await (const file of files) {
		const og = p.resolve(path, file)
		const des = p.resolve(out, file)
		const dir = p.dirname(des)

		progress.tick(0, { name: `${name} - ${des}` })

		await fs.mkdir(dir, { recursive: true })
		await fs.copyFile(og, des)
	}
}

const packaging = async (nameArg, packages) => {
	const rootManifest = await project.getRootManifest()
	const packageManifest = await project.getPackageManifest(nameArg)
	const packageRepository = {
		...rootManifest.repository,
		directory: `packages/${nameArg}`
	}
	const packageDependencies = packageManifest.dependencies
		? Object.entries(packageManifest.dependencies).reduce((deps, entry) => {
				const [name, version] = entry
				const shouldVersion =
					name.startsWith('@klnjs') &&
					packages.includes(name.slice(4))
				const nextVersion = shouldVersion
					? rootManifest.version
					: version

				return {
					...deps,
					[name]: nextVersion
				}
		  }, {})
		: undefined

	const out = await project.getPackageBuildPath(nameArg, 'package.json')
	const manifest = JSON.stringify(
		{
			name: packageManifest.name,
			type: packageManifest.type,
			description: packageManifest.description,
			author: rootManifest.author,
			version: rootManifest.version,
			license: rootManifest.license,
			main: './index.js',
			bin: packageManifest.bin,
			// exports: './index.js',
			repository: packageRepository,
			peerDependencies: packageManifest.peerDependencies,
			dependencies: packageDependencies,
			sideEffects: false
		},
		null,
		'\t'
	)

	await fs.writeFile(out, manifest, 'utf8')
}

export const build = async ({ packages: packagesArgs }) => {
	const packages = await project.getPackages()
	const packagesToBuild = packagesArgs ?? packages
	const progress = new prog('Building [:bar] :current/:total (:name)', {
		curr: 1,
		total: packagesToBuild.length,
		width: 40,
		clear: true,
		incomplete: ' '
	})

	try {
		for await (const name of packagesToBuild) {
			await pre(name, progress)
			await sleep(1000)
			await clean(name)
			await transpile(name, 'src', progress)
			await packaging(name, packages)

			progress.tick()
		}
	} catch (err) {
		progress.terminate()
		console.log(err)
		process.exit(1)
	}
}
