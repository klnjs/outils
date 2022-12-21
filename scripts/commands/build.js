import p from 'path'
import fs from 'fs/promises'
import cp from 'child_process'
import rmfr from 'rmfr'
import prog from 'progress'
import { pathExists } from 'find-up'

import { sleep } from '../internal/sleep.js'
import { readdir } from '../internal/readdir.js'
import * as project from '../internal/project.js'

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

const packaging = async (name) => {
	const rootManifest = await project.getRootManifest()
	const packageManifest = await project.getPackageManifest(name)
	const packageRepository = {
		...rootManifest.repository,
		directory: `packages/${name}`
	}

	const out = await project.getPackageBuildPath(name, 'package.json')
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
			dependencies: packageManifest.dependencies
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
			await sleep(100)
			await clean(name)
			await transpile(name, 'src', progress)
			await packaging(name)

			progress.tick()
		}
	} catch (err) {
		progress.terminate()
		process.exit(1)
	}
}
