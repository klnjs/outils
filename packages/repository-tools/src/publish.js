const cp = require('child_process')
const git = require('simple-git')()
const project = require('./project')
const { post } = require('./slack')

const fetchPublished = (name) => JSON.parse(cp.execSync(`yarn npm info ${name} --json`))

const publish = async ({
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
		const registryWithAuth = `${registry.replace('https:', '')}:_authToken ${tokenArg}`
		const versionIsInChangelog = changelog.includes(manifest.version)

		if (!versionIsInChangelog) {
			throw new Error(`Could not find CHANGELOG entry for version ${manifest.version}`)
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

const fetchGit = async (options) => {
	const message = await git.show({ '-s': null, ...options })
	return message.trim()
}

const fetchChangelog = async () => {
	const log = await project.getRootChangelog()
	const manifest = await project.getRootManifest()
	const lookup = `### ${manifest.version}`
	const start = log.indexOf(lookup) + lookup.length
	const ending = log.indexOf(`###`, start)
	const content = log.slice(start, ending)

	return content.trim()
}

const fetchContent = ({ type }) => {
	switch (type) {
		case 'commit':
			return fetchGit({ '--pretty': '%B' })
		case 'changelog':
			return fetchChangelog()
		default:
			throw new Error(`Type ${type} is not supported`)
	}
}

const publishToSlack = async ({ type, fields: fieldsArg, ...args }) => {
	try {
		const manifest = await project.getRootManifest()

		const author = fieldsArg.includes('author')
			? await fetchGit({ '--pretty': '%an <%ae>' })
			: null

		const comitter = fieldsArg.includes('comitter')
			? await fetchGit({ '--pretty': '%cn <%ce>' })
			: null

		const date = fieldsArg.includes('date') ? await fetchGit({ '--pretty': '%ci' }) : null
		const hash = fieldsArg.includes('hash') ? await fetchGit({ '--pretty': '%h' }) : null
		const version = fieldsArg.includes('version') ? manifest.version : null
		const repository = fieldsArg.includes('repository') ? manifest.repository.url : null
		const information = { author, comitter, date, hash, version, repository }

		const header = manifest.name.charAt(0).toUpperCase() + manifest.name.slice(1)
		const content = await fetchContent({ type })
		const context = Object.keys(information)
			.filter((key) => key)
			.map((key) => `*${key}:* ${information[key]}`)
			.join('\n')

		post({ header, context, content, ...args })
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = {
	publish,
	publishToSlack
}
