import { test, expect } from 'bun:test'
import ts from 'typescript'
import core from './core.json'

test('Config should load without errors', () => {
	const config = ts.parseJsonConfigFileContent(
		core,
		ts.sys,
		ts.getDirectoryPath(import.meta.path)
	)

	const diagnostics = ts.getConfigFileParsingDiagnostics(config)
	const problems = diagnostics.filter(
		(diagnostic) => diagnostic.code !== 18003
	)

	expect(problems).toBeEmpty()
})
