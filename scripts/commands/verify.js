import cp from 'child_process'
import { pathExists } from 'find-up'
import * as project from '../internal/project.js'

export const validate = async ({ packages: packagesArgs }) => {
	try {
		const packages = await project.getPackages()
		const packagesToBuild = packagesArgs ?? packages

		for await (const name of packagesToBuild) {
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
