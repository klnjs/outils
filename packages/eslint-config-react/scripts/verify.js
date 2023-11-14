import rePlugin from 'eslint-plugin-react'
import rhePlugin from 'eslint-plugin-react-hooks'
import config from '../index.cjs'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'

try {
	const rulesFromConfig = Object.keys(config.rules)
	const rulesFromReact = getRulesFromPlugin(rePlugin, {
		prefix: 'react'
	})
	const rulesFromReactHooks = getRulesFromPlugin(rhePlugin, {
		prefix: 'react-hooks'
	})

	const rulesThatMustExists = [
		...rulesFromReact.map((rule) => rule.fqn),
		...rulesFromReactHooks.map((rule) => rule.fqn)
	]

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
