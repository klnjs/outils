import cp from 'child_process'
import { pathExists } from 'find-up'
import * as project from '../internal/project.js'

export const validate = async ({ packages: packagesArgs }) => {
	const packages = await getPackagesFromArg(packagesArgs)

	try {
		for await (const name of packages) {
			const script = await project.getPackagePath(
				name,
				'scripts',
				'verify.js'
			)
			const exists = await pathExists(script)

			if (exists) {
				cp.execSync(`node ${script}`, { stdio: 'inherit' })
			}
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
