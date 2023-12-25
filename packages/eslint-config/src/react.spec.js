import { test, expect } from 'bun:test'
import { getESLintFromConfig } from './internals/getESLintFromConfig.js'
import config from './react.js'

const rules = new Map(
	Object.entries(config.plugins).reduce(
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
		getESLintFromConfig(config).lintFiles(config.files)
	).not.toThrow()
})

test('Config should include code rules', () =>
	rules.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(config.rules).toHaveProperty(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	Object.keys(config.rules).forEach((name) => {
		expect(rules.get(name)).toBeDefined()
		expect(rules.get(name)).not.toHaveProperty(`meta.type`, 'layout')
		expect(rules.get(name)).not.toHaveProperty(`meta.deprecated`, true)
	}))
