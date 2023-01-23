import cp from 'child_process'
import * as project from '../internal/project.js'

export const publish = async ({
	dry: dryArg,
	token: tokenArg,
	registry: registryArg,
	packages: packagesArg
} = {}) => {
	try {
		const config = await project.getConfig()
		const packages = await project.getPackages()
		const packagesToPublish = packagesArg ?? packages
		const dry = dryArg ? '--dry-run' : ''

		const registry = registryArg ?? config.npmRegistryServer
		const registryWithAuth = `${registry.replace(
			'https:',
			''
		)}:_authToken ${tokenArg}`

		for await (const name of packagesToPublish) {
			const path = await project.getPackagePath(name)
			const command = `npm config set registry ${registry} && npm config set ${registryWithAuth} && npm publish ${path} ${dry}`

			cp.execSync(command, { stdio: 'inherit' })
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}
