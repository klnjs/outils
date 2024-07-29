import { test, expect } from 'bun:test'
import { ESLint } from 'eslint'
import react from './react.js'

const rulesFromConfig = new Map(Object.entries(react.rules))
const rulesFromPlugin = new Map(
	Object.entries(react.plugins).reduce(
		(acc, [prefix, plugin]) =>
			acc.concat(
				Object.entries(plugin.rules).map(([name, rule]) => [
					`${prefix}/${name}`,
					rule
				])
			),
		[]
	)
)

test('Config should load', () => {
	new ESLint({
		overrideConfigFile: true,
		overrideConfig: react
	}).lintText('')
})

test('Config should include code rules', () =>
	rulesFromPlugin.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(rulesFromConfig).toHaveEntry(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromPlugin).toHaveEntry(name)
		expect(rulesFromPlugin.get(name)).not.toBeDeprecatedRule(name)
	}))
