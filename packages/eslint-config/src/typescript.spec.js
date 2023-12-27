import { test, expect } from 'bun:test'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import { getESLintCoreRule } from './internals/getESLintCoreRule'
import { getESLintFromConfig } from './internals/getESLintFromConfig.js'
import { typescript as config } from './typescript.js'

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
				const baseRule = getESLintCoreRule(baseName)

				if (baseRule.meta.deprecated) {
					return acc
				}

				return [...acc, baseName]
			},
			[]
		)
	].forEach((name) => {
		expect(config.rules).toHaveProperty(name, 'off')
	}))

test('Config should exclude layout, unknown and deprecated rules', () =>
	Object.keys(config.rules).forEach((name) => {
		if (name.startsWith('@typescript-eslint/')) {
			expect(rules.get(name)).toBeDefined()
			expect(rules.get(name)).not.toHaveProperty(`meta.type`, 'layout')
			expect(rules.get(name)).not.toHaveProperty(`meta.deprecated`, true)
		}
	}))
