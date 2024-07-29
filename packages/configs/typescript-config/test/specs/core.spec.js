import { test, expect } from 'bun:test'
import p from 'node:path'
import ts from 'typescript'
import core from '../../src/core.json'

test('Config should load without errors', () => {
	const base = p.join(import.meta.path, '..', '..', '..', 'src')
	const config = ts.parseJsonConfigFileContent(core, ts.sys, base)

	const diagnostics = ts.getConfigFileParsingDiagnostics(config)
	const problems = diagnostics.filter(
		(diagnostic) => diagnostic.code !== 18003
	)

	expect(problems).toBeEmpty()
})
