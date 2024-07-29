import { test, expect } from 'bun:test'
import {
	createESLint,
	getRulesFromConfig,
	getRulesFromPlugins
} from '../helpers/eslint.js'
import react from '../../src/react.js'

const rulesFromConfig = getRulesFromConfig(react)
const rulesFromPlugin = getRulesFromPlugins(react.plugins)

test('Config should load', () => {
	expect(() => createESLint(react).lintText('')).not.toThrow()
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
