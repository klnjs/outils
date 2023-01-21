import fs from 'fs/promises'
import inquirer from 'inquirer'
import * as project from '../internal/project.js'

export const bump = async ({ type: typeArg }) => {
	try {
		const type =
			typeArg ??
			(
				await inquirer.prompt({
					type: 'rawlist',
					name: 'type',
					message: 'Which type of bump?',
					choices: ['major', 'minor', 'patch'],
					default: 'patch'
				})
			).type

		const manifest = await project.getRootManifest()
		const manifestPath = await project.getRootPath('package.json')
		const version = incVersion(type, manifest.version)
		const manifestNext = JSON.stringify(
			{ ...manifest, version },
			null,
			'\t'
		)

		await fs.writeFile(manifestPath, manifestNext, 'utf8')
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

const incVersion = (type, version) => {
	const offset = getTypeOffset(type)
	const parts = getVersionParts(version)

	return parts
		.map((part, index) => (index === offset ? part + 1 : 0))
		.join('.')
}

const getVersionParts = (version) =>
	version.split('.').map((part) => Number.parseInt(part, 10))

const getTypeOffset = (type) => {
	switch (type) {
		case 'major':
			return 0
		case 'minor':
			return 1
		case 'patch':
			return 2
		default:
			throw new Error('Invalid version type')
	}
}
