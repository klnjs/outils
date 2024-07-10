import { test, expect } from 'bun:test'
import ts from 'typescript'
import esnext from './esnext.json'

test('Config should load without errors', () => {
	const config = ts.parseJsonConfigFileContent(
		esnext,
		ts.sys,
		ts.getDirectoryPath(import.meta.path)
	)

	const diagnostics = ts.getConfigFileParsingDiagnostics(config)
	const problems = diagnostics.filter(
		(diagnostic) => diagnostic.code !== 18003
	)

	expect(problems).toBeEmpty()
})
