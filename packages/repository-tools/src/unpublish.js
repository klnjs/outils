const cp = require('child_process')
const project = require('./project')

const unpublish = async ({
	dry: dryArg,
	token: tokenArg,
	version: versionArg,
	registry: registryArg,
	packages: packagesArg
} = {}) => {
	try {
		const config = await project.getConfig()
		const packages = await project.getPackages()
		const packagesToPublish = packagesArg ?? packages
		const dry = dryArg ? '--dry-run' : ''

		const registry = registryArg ?? config.npmRegistryServer
		const registryWithAuth = `${registry.replace('https:', '')}:_authToken ${tokenArg}`

		for await (const name of packagesToPublish) {
			const man = await project.getPackageManifest(name)
			const command = `npm config set registry ${registry} && npm config set ${registryWithAuth} && npm unpublish ${man.name}@${versionArg} ${dry}`

			cp.execSync(command, { stdio: 'inherit' })
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = {
	unpublish
}
