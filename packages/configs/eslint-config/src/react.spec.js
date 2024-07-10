import { test, expect } from 'bun:test'
import { ESLint } from 'eslint'
import react from './react.js'

const rulesFromConfig = new Map(Object.entries(react.rules))
const rulesFromPlugin = new Map(
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
	expect(() => new ESLint({ baseConfig: react }).lintText('')).not.toThrow()
})

test('Config should include code rules', () =>
	rulesFromPlugin.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(rulesFromConfig).toHaveEntry(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	rulesFromConfig.forEach((value, name) => {
		expect(rulesFromPlugin).toHaveEntry(name)
		expect(rulesFromPlugin.get(name)).not.toBeDeprecatedRule(name)
	}))
