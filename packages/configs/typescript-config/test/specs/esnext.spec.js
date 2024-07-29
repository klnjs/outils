import { test, expect } from 'bun:test'
import p from 'node:path'
import ts from 'typescript'
import esnext from '../../src/esnext.json'

test('Config should load without errors', () => {
	const base = p.join(import.meta.path, '..', '..', '..', 'src')
	const config = ts.parseJsonConfigFileContent(esnext, ts.sys, base)

	const diagnostics = ts.getConfigFileParsingDiagnostics(config)
	const problems = diagnostics.filter(
		(diagnostic) => diagnostic.code !== 18003
	)

	expect(problems).toBeEmpty()
})
