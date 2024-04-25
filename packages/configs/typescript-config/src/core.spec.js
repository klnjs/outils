import { test, expect } from 'bun:test'
import ts from 'typescript'
import core from './core.json'

test('Config should load without errors', () => {
	const config = ts.parseJsonConfigFileContent(
		core,
		ts.sys,
		ts.getDirectoryPath(import.meta.path)
	)
	const configErrors = config.errors.filter((error) => error.code !== 18003)

	expect(configErrors).toBeEmpty()
})
