import cp from 'child_process'
import { pathExists } from 'find-up'

import * as project from '../internal/project.js'

const runPrebuild = async (name) => {
	const script = await project.getPackagePath(name, 'scripts', 'prebuild.js')
	const exists = await pathExists(script)

	if (exists) {
		cp.execSync(`node ${script}`, { stdio: 'inherit' })
	}
}

export const build = async ({ packages: packagesArgs }) => {
	const packages = await project.getPackages()
	const packagesToBuild = packagesArgs ?? packages

	try {
		for await (const name of packagesToBuild) {
			await runPrebuild(name)
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}
