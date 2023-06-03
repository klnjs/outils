import ts from '@typescript-eslint/eslint-plugin'
import tsImport from 'eslint-plugin-import'
import tsConfig from '../index.cjs'
import { xor, log } from '../../../scripts/helpers.js'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'

try {
	const rulesFromConfig = Object.keys(tsConfig.rules)
	const rulesFromTs = getRulesFromPlugin(ts, {
		prefix: 'ts'
	})

	const rulesFromTsImport = getRulesFromPlugin(tsImport, {
		prefix: 'ts-import'
	})

	const rulesThatMustExists = [
		...rulesFromTs.map((rule) => rule.name),
		...rulesFromTsImport.map((rule) => rule.name)
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
