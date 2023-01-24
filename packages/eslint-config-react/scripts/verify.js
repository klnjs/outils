import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintConfig from '../index.cjs'
import { xor, log } from '../../../scripts/internal/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/internal/eslint.js'

try {
	const rulesFromConfig = Object.keys(eslintConfig.rules)
	const rulesFromReact = getRulesFromPlugin(eslintReact, { prefix: 'react' })
	const rulesFromReactHooks = getRulesFromPlugin(eslintReactHooks, {
		prefix: 'react-hooks'
	})
	const rulesThatMustExists = [
		...rulesFromReact.map((rule) => rule.name),
		...rulesFromReactHooks.map((rule) => rule.name)
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
