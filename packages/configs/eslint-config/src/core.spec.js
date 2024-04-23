import { test, expect } from 'bun:test'
import { Linter } from 'eslint'
import { createESLintFromConfig } from '../test/create-eslint-from-config'
import core from './core'

const rules = new Linter().getRules()

test('Config should load', () => {
	expect(() =>
		createESLintFromConfig(core).lintFiles(core.files)
	).not.toThrow()
})

test('Config should include code rules', () =>
	rules.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(core.rules).toHaveProperty(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	Object.keys(core.rules).forEach((name) => {
		expect(rules.get(name)).toBeDefined()
		expect(rules.get(name)).not.toHaveProperty(`meta.type`, 'layout')
		expect(rules.get(name)).not.toHaveProperty(`meta.deprecated`, true)
	}))
