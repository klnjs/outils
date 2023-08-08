// eslint-disable-next-line import/no-unresolved
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin'
import config from '../index.cjs'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'

try {
	const rulesFromConfig = Object.keys(config.rules)
	const rulesFromTypescript = getRulesFromPlugin(eslintPluginTypeScript, {
		prefix: '@typescript-eslint'
	})

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
		'import/consistent-type-specifier-style',
		'import/default',
		'import/named',
		'import/namespace',
		'import/no-named-as-default-member',
		'import/no-unresolved',
		...rulesFromTypescript.reduce((acc, rule) => {
			if (rule.meta.docs.extendsBaseRule) {
				const ebr = rule.meta.docs.extendsBaseRule
				const name =
					ebr === true
						? rule.name.replace('@typescript-eslint/', '')
						: ebr
				const value = config.rules[name]

				if (value !== undefined) {
					return [...acc, name]
				}
			}

			return acc
		}, [])
	]

	const rulesThatMustExists = [
		...rulesThatMustBeOff,
		...rulesFromTypescript.map((rule) => rule.name)
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
