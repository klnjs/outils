import { test, expect } from 'bun:test'
import { getESLintFromConfig } from './internals/getESLintFromConfig'
import react from './react'

const rules = new Map(
	Object.entries(react.plugins).reduce(
		(acc, [prefix, plugin]) => [
			...acc,
			...Object.entries(plugin.rules).map(([name, rule]) => [
				`${prefix}/${name}`,
				rule
			])
		],
		[]
	)
)

test('Config should load', () => {
	expect(() =>
		getESLintFromConfig(react).lintFiles(react.files)
	).not.toThrow()
})

test('Config should include code rules', () =>
	rules.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(react.rules).toHaveProperty(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	Object.keys(react.rules).forEach((name) => {
		expect(rules.get(name)).toBeDefined()
		expect(rules.get(name)).not.toHaveProperty(`meta.type`, 'layout')
		expect(rules.get(name)).not.toHaveProperty(`meta.deprecated`, true)
	}))
