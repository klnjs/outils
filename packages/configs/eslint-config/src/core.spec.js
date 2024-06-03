import { test, expect } from 'bun:test'
import { ESLint } from 'eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import core from './core.js'

const rulesFromESLint = builtinRules
const rulesFromConfig = new Map(Object.entries(core.rules))

test('Config should load', () => {
	expect(() => new ESLint({ baseConfig: core }).lintText('')).not.toThrow()
})

test('Config should include code rules', () =>
	rulesFromESLint.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(rulesFromConfig).toHaveEntry(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	rulesFromConfig.forEach((value, name) => {
		expect(rulesFromESLint).toHaveEntry(name)
		expect(rulesFromESLint.get(name)).not.toBeDeprecatedRule(name)
	}))
