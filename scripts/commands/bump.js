import fs from 'fs/promises'
import inquirer from 'inquirer'
import * as project from '../internal/project.js'

const typeRegex = /^major|minor|patch$/
const versionRegex = /^\d+\.\d+\.\d+(-.+)?$/

export const bump = async ({ type: typeArg, version: versionArg }) => {
	try {
		const bumpType = await getTypeFromArgs(typeArg, versionArg)

		const manifest = await project.getRootManifest()
		const manifestPath = await project.getRootPath('package.json')

		const nextVersion =
			bumpType === 'specific'
				? versionArg
				: incVersion(manifest.version, bumpType)

		const nextManifest = JSON.stringify(
			{ ...manifest, version: nextVersion },
			null,
			'\t'
		)

		await fs.writeFile(manifestPath, nextManifest, 'utf8')
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

const incVersion = (version, type) => {
	const parts = getVersionParts(version)
	const offset = getVersionOffset(type)

	return parts
		.map((part, index) => {
			if (index === offset) {
				return part + 1
			}

			if (index < offset) {
				return part
			}

			return 0
		})
		.join('.')
}

const getTypeFromArgs = async (type, version) => {
	console.log(version)
	console.log(versionRegex.test(version))
	if (versionRegex.test(version)) {
		return 'specific'
	}

	if (typeRegex.test(type)) {
		return type
	}

	const prompt = await inquirer.prompt({
		type: 'rawlist',
		name: 'type',
		message: 'Which type of bump?',
		choices: ['major', 'minor', 'patch'],
		default: 'patch'
	})

	return prompt.type
}

const getVersionParts = (version) =>
	version.split('.').map((part) => Number.parseInt(part, 10))

const getVersionOffset = (type) => {
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
