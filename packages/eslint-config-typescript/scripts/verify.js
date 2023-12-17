import * as typescript from '../src/typescript.js'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'
import config from '../index.js'

try {
	const rulesFromConfig = Object.keys(config.rules)
	const rulesFromTypescript = getRulesFromPlugin(typescript.plugin, {
		prefix: typescript.prefix
	})

	const rulesThatMustBeOff = [
		...Object.keys(typescript.getTypescriptBuiltinRules()),
		...Object.keys(typescript.getTypescriptExtensionRules()).filter(
			(key) => !key.startsWith(typescript.prefix)
		)
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
