import eslint from 'eslint/use-at-your-own-risk'
import eslintImport from 'eslint-plugin-import'
import eslintConfig from '../src/index.cjs'
import {
	getRulesFromPlugin,
	getNonIntersection,
	logError
} from '../../../scripts/internal/eslint.js'

const rulesFromConfig = Object.keys(eslintConfig.rules)
const rulesFromEslint = getRulesFromPlugin({ rules: eslint.builtinRules })
const rulesFromImport = getRulesFromPlugin(eslintImport, { prefix: 'import' })
const rulesThatMustExists = [
	...rulesFromEslint.map((rule) => rule.name),
	...rulesFromImport.map((rule) => rule.name)
]

const rulesMissing = getNonIntersection(rulesThatMustExists, rulesFromConfig)
const rulesUnknown = getNonIntersection(rulesFromConfig, rulesThatMustExists)

if (rulesMissing.length || rulesUnknown.length) {
	logError('Missing', rulesMissing)
	logError('Unknown', rulesUnknown)
	process.exit(1)
}
