import { test, expect } from 'bun:test'
import { ESLint } from 'eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescript from './typescript.js'

const rulesFromESLint = builtinRules
const rulesFromConfig = new Map(Object.entries(typescript.rules))
const rulesFromPlugin = new Map(
	Object.entries(typescript.plugins).reduce((acc, [prefix, plugin]) => {
		acc.concat(
			Object.entries(plugin.rules).map(([name, rule]) => [
				`${prefix}/${name}`,
				rule
			])
		)

		return acc
	}, [])
)

test('Config should load', () => {
	expect(() =>
		new ESLint({ baseConfig: typescript }).lintText('')
	).not.toThrow()
})

test('Config should include code rules', () =>
	rulesFromPlugin.forEach((rule, name) => {
		if (!rule.meta.deprecated && rule.meta.type !== 'layout') {
			expect(rulesFromConfig).toHaveEntry(name)
		}
	}))

test('Config should include obsolete core rules and turn them off', () =>
	[
		'constructor-super',
		'getter-return',
		'no-const-assign',
		'no-dupe-args',
		'no-dupe-class-members',
		'no-dupe-keys',
		'no-func-assign',
		'no-import-assign',
		'no-new-symbol',
		'no-obj-calls',
		'no-redeclare',
		'no-setter-return',
		'no-this-before-super',
		'no-undef',
		'no-unreachable',
		'no-unsafe-negation',
		'valid-typeof',
		...Object.entries(typescriptPlugin.rules).reduce(
			(acc, [name, rule]) => {
				if (
					rule.meta.deprecated ||
					rule.meta.type === 'layout' ||
					!rule.meta.docs.extendsBaseRule
				) {
					return acc
				}

				const base = rule.meta.docs.extendsBaseRule
				const baseName = base === true ? name : base
				const baseRule = rulesFromESLint.get(baseName)

				if (baseRule.meta.deprecated) {
					return acc
				}

				acc.push(baseName)

				return acc
			},
			[]
		)
	].forEach((name) => {
		expect(rulesFromConfig).toHaveEntry(name, 'off')
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	rulesFromConfig.forEach((_value, name) => {
		if (name.startsWith('@typescript-eslint/')) {
			expect(rulesFromPlugin).toHaveEntry(name)
			expect(rulesFromPlugin.get(name)).not.toBeDeprecatedRule(name)
		}
	}))
