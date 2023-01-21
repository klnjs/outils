import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintConfig from '../index.cjs'
import {
	getRulesFromPlugin,
	getNonIntersection,
	logRules
} from '../../../scripts/internal/eslint.js'

const rulesFromConfig = Object.keys(eslintConfig.rules)
const rulesFromReact = getRulesFromPlugin(eslintReact, { prefix: 'react' })
const rulesFromReactHooks = getRulesFromPlugin(eslintReactHooks, {
	prefix: 'react-hooks'
})
const rulesThatMustExists = [
	...rulesFromReact.map((rule) => rule.name),
	...rulesFromReactHooks.map((rule) => rule.name)
]

const rulesMissing = getNonIntersection(rulesThatMustExists, rulesFromConfig)
const rulesUnknown = getNonIntersection(rulesFromConfig, rulesThatMustExists)

if (rulesMissing.length || rulesUnknown.length) {
	logRules('Missing', rulesMissing)
	logRules('Unknown', rulesUnknown)
	process.exit(1)
}
