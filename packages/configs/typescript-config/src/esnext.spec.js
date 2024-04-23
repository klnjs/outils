import { test, expect } from 'bun:test'
import ts from 'typescript'

test('Config should load without errors', () => {
	const configRoot = process.cwd()
	const configPath = Bun.resolveSync('./src/esnext.json', configRoot)
	const configRaw = ts.readConfigFile(configPath, ts.sys.readFile)
	const config = ts.parseJsonConfigFileContent(
		configRaw.config,
		ts.sys,
		ts.getDirectoryPath(configPath)
	)

	// This error occurs when no files match the include / exclude
	const configErrors = config.errors.filter((error) => error.code !== 18003)

	expect(configErrors).toBeEmpty()
})

