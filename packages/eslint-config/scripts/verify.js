// https://github.com/browserify/resolve/pull/224
// eslint-disable-next-line import/no-unresolved
import eslint from 'eslint/use-at-your-own-risk'
import eslintImport from 'eslint-plugin-import'
import eslintConfig from '../index.cjs'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'

try {
	const rulesFromConfig = Object.keys(eslintConfig.rules)
	const rulesFromEslint = getRulesFromPlugin({ rules: eslint.builtinRules })
	const rulesFromImport = getRulesFromPlugin(eslintImport, {
		prefix: 'import'
	})
	const rulesThatMustExists = [
		...rulesFromEslint.map((rule) => rule.name),
		...rulesFromImport.map((rule) => rule.name)
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
