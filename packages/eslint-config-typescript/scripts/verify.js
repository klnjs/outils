import eslintTypescript from '@typescript-eslint/eslint-plugin'
import eslintConfig from '../index.cjs'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'

try {
	const rulesFromConfig = Object.keys(eslintConfig.rules)
	const rulesFromTypescript = getRulesFromPlugin(eslintTypescript, {
		prefix: '@typescript-eslint'
	})

	const rulesThatMustBeOff = rulesFromTypescript.reduce((acc, rule) => {
		const base = rule.meta.docs.extendsBaseRule
		const name =
			base === true ? rule.name.replace('@typescript-eslint/', '') : base
		return name ? [...acc, name] : acc
	}, [])

	const rulesThatMustExists = [
		...rulesThatMustBeOff,
		...rulesFromTypescript.map((rule) => rule.name)
	]

	const rulesMissing = xor(rulesThatMustExists, rulesFromConfig)
	const rulesUnknown = xor(rulesFromConfig, rulesThatMustExists)
	const rulesInvalid = rulesThatMustBeOff.filter(
		(name) => eslintConfig.rules[name] !== 'off'
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
