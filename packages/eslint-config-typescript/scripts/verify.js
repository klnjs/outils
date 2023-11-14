import plugin from '@typescript-eslint/eslint-plugin'
import config from '../index.js'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'

try {
	const rulesFromConfig = Object.keys(config.rules)
	const rulesFromTypescript = getRulesFromPlugin(plugin, {
		prefix: '@typescript-eslint'
	})

	// Curated list
	const rulesThatMustBeOff = [
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
		'require-await',
		'prefer-destructuring',
		'no-useless-constructor',
		'no-use-before-define',
		'no-unused-vars',
		'no-unused-expressions',
		'no-throw-literal',
		'no-shadow',
		'no-restricted-imports',
		'no-redeclare',
		'no-magic-numbers',
		'no-loss-of-precision',
		'no-loop-func',
		'no-invalid-this',
		'no-implied-eval',
		'no-extra-semi',
		'no-empty-function',
		'no-dupe-class-members',
		'no-array-constructor',
		'max-params',
		'init-declarations',
		'dot-notation',
		'default-param-last',
		'class-methods-use-this'
	]

	const rulesThatMustExists = [
		...rulesThatMustBeOff,
		...rulesFromTypescript.map((rule) => rule.fqn)
	]

	const rulesMissing = xor(rulesThatMustExists, rulesFromConfig)
	const rulesUnknown = xor(rulesFromConfig, rulesThatMustExists)
	const rulesInvalid = rulesThatMustBeOff.filter(
		(name) => config.rules[name] !== 'off'
	)

	if (rulesMissing.length || rulesUnknown.length || rulesInvalid.length) {
		log('Missing', rulesMissing)
		log('Unknown', rulesUnknown)
		log('Invalid', rulesInvalid)
		process.exit(1)
	}
} catch (error) {
	console.log(error)
	process.exit(1)
}
