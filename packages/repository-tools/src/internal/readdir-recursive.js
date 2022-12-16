const p = require('path')
const fs = require('fs').promises

const readdir = async (path, options = {}, next = path) => {
	const { recursive, exclude, relative, ...otherOptions } = options
	const files = await fs.readdir(next, otherOptions)
	const result = []

	if (!recursive) {
		return files
	}

	await Promise.all(
		files.map(async (file) => {
			const filePath = p.resolve(next, file)
			const fileStats = await fs.stat(filePath)
			const filePathReturn = relative
				? p.relative(path, filePath)
				: filePath

			if (fileStats.isDirectory()) {
				result.push(...(await readdir(path, options, filePath)))
			} else if (!exclude || !exclude(file)) {
				result.push(filePathReturn)
			}
		})
	)

	return result
}

module.exports = readdir
