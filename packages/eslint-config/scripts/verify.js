// https://github.com/browserify/resolve/pull/224
// eslint-disable-next-line import/no-unresolved
import eslint from 'eslint/use-at-your-own-risk'
import eslintImport from 'eslint-plugin-import'
import eslintConfig from '../index.cjs'
import {
	getRulesFromPlugin,
	getNonIntersection,
	logRules
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
	logRules('Missing', rulesMissing)
	logRules('Unknown', rulesUnknown)
	process.exit(1)
}
