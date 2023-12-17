import { builtinRules } from 'eslint/use-at-your-own-risk'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'
import config from '../index.js'

try {
	const rulesFromConfig = Object.keys(config.rules)
	const rulesFromEslint = getRulesFromPlugin({ rules: builtinRules })
	const rulesThatMustExists = rulesFromEslint.map((rule) => rule.fqn)
	const rulesMissing = xor(rulesThatMustExists, rulesFromConfig)
	const rulesUnknown = xor(rulesFromConfig, rulesThatMustExists)

	if (rulesMissing.length || rulesUnknown.length) {
		log('Missing', rulesMissing)
		log('Unknown', rulesUnknown)
		process.exit(1)
	}
} catch (error) {
	console.log(error)
	process.exit(1)
}
