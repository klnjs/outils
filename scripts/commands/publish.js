import cp from 'child_process'
import * as project from '../internal/project.js'

const fetchPublished = (name) =>
	JSON.parse(cp.execSync(`yarn npm info ${name} --json`))

export const publish = async ({
	dry: dryArg,
	token: tokenArg,
	registry: registryArg,
	packages: packagesArg
} = {}) => {
	try {
		const config = await project.getConfig()
		const manifest = await project.getRootManifest()
		const changelog = await project.getRootChangelog()
		const packages = await project.getPackages()
		const packagesToPublish = packagesArg ?? packages
		const dry = dryArg ? '--dry-run' : ''

		const registry = registryArg ?? config.npmRegistryServer
		const registryWithAuth = `${registry.replace(
			'https:',
			''
		)}:_authToken ${tokenArg}`
		const versionIsInChangelog = changelog.includes(manifest.version)

		if (!versionIsInChangelog) {
			throw new Error(
				`Could not find CHANGELOG entry for version ${manifest.version}`
			)
		}

		for await (const name of packagesToPublish) {
			const man = await project.getPackageManifest(name)
			const info = fetchPublished(`${man.name}`)

			if (info.versions.includes(manifest.version)) {
				throw new Error(
					`Version ${manifest.version} of ${man.name} already exists in the registry`
				)
			}
		}

		for await (const name of packagesToPublish) {
			const out = await project.getPackageBuildPath(name)
			const command = `npm config set registry ${registry} && npm config set ${registryWithAuth} && npm publish ${out} ${dry}`

			cp.execSync(command, { stdio: 'inherit' })
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}
