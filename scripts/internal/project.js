import p from 'path'
import u from 'util'
import fs from 'fs/promises'
import cp from 'child_process'
import { findUp } from 'find-up'

export const getRootPath = async (...paths) => {
	const manifest = await findUp('package.json')
	const root = p.dirname(manifest)
	const path = p.resolve(root, ...paths)

	return path
}

export const getRootManifest = async () => {
	const manifest = await findUp('package.json')
	const contents = await fs.readFile(manifest, 'utf8')
	const parsed = JSON.parse(contents)

	return parsed
}

export const getRootChangelog = async () => {
	const changelog = await getRootPath('CHANGELOG.md')
	const contents = await fs.readFile(changelog, 'utf8')
	const parsed = contents.toString()

	return parsed
}

export const getConfig = async () => {
	const exec = u.promisify(cp.exec)
	const raw = await exec(`yarn config --json`)
	const json = `[${raw.stdout.trim().split('\n')}]`
	const objects = JSON.parse(json)
	const config = objects.reduce((acc, entry) => {
		acc[entry.key] = entry.effective
		return acc
	}, {})

	return config
}

export const getPackages = async () => {
	const path = await getRootPath('packages')
	const packages = await fs.readdir(path)

	return packages
}

export const getPackagePath = async (pid, ...paths) =>
	getRootPath('packages', pid, ...paths)

export const getPackageManifest = async (pid) => {
	const manifest = await getPackagePath(pid, 'package.json')
	const contents = await fs.readFile(manifest, 'utf8')
	const parsed = JSON.parse(contents)

	return parsed
}
