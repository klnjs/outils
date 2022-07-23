const p = require('path')
const u = require('util')
const fs = require('fs').promises
const fu = require('find-up')
const exec = u.promisify(require('child_process').exec)

const getRootPath = async (...paths) => {
	const manifest = await fu('package.json')
	const root = p.dirname(manifest)
	const path = p.resolve(root, ...paths)

	return path
}

const getRootManifest = async () => {
	const manifest = await getRootPath('package.json')
	const contents = await fs.readFile(manifest, 'utf8')
	const parsed = JSON.parse(contents)

	return parsed
}

const getRootChangelog = async () => {
	const changelog = await getRootPath('CHANGELOG.md')
	const contents = await fs.readFile(changelog, 'utf8')
	const parsed = contents.toString()

	return parsed
}

const getConfig = async () => {
	const raw = await exec(`yarn config --json`)
	const json = `[${raw.stdout.trim().split('\n')}]`
	const objects = JSON.parse(json)
	const config = objects.reduce((acc, entry) => {
		acc[entry.key] = entry.effective
		return acc
	}, {})

	return config
}

const getPackages = async () => {
	const path = await getRootPath('packages')
	const packages = await fs.readdir(path)

	return packages
}

const getPackagePath = async (pid, ...paths) => getRootPath('packages', pid, ...paths)

const getPackageManifest = async (pid) => {
	const manifest = await getPackagePath(pid, 'package.json')
	const contents = await fs.readFile(manifest, 'utf8')
	const parsed = JSON.parse(contents)

	return parsed
}

const getPackageBuildPath = async (pid, ...paths) => getRootPath('build', pid, ...paths)

module.exports = {
	getRootPath,
	getRootManifest,
	getRootChangelog,
	getConfig,
	getPackages,
	getPackagePath,
	getPackageManifest,
	getPackageBuildPath
}
