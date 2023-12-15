import * as react from '../src/react.js'
import * as reactHooks from '../src/react-hooks.js'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'
import config from '../index.js'

try {
	const rulesFromConfig = Object.keys(config.rules)
	const rulesFromReact = getRulesFromPlugin(react.plugin, {
		prefix: react.prefix
	})

	const rulesFromReactHooks = getRulesFromPlugin(reactHooks.plugin, {
		prefix: reactHooks.prefix
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
