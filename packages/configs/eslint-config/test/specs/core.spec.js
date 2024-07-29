import { test, expect } from 'bun:test'
import {
	createESLint,
	getRulesFromESLint,
	getRulesFromConfig
} from '../helpers/eslint.js'
import core from '../../src/core.js'

const rulesFromESLint = getRulesFromESLint()
const rulesFromConfig = getRulesFromConfig(core)

test('Config should load', () => {
	expect(() => createESLint(core).lintText('')).not.toThrow()
})

test('Config should include code rules', () =>
	rulesFromESLint.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(rulesFromConfig).toHaveEntry(name)
		}
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromESLint).toHaveEntry(name)
		expect(rulesFromESLint.get(name)).not.toBeDeprecatedRule(name)
	}))
