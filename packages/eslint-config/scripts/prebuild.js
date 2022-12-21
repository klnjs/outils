import eslint from 'eslint/use-at-your-own-risk'
import eslintImport from 'eslint-plugin-import'
import eslintCommonConfig from '../src/common.cjs'
import eslintImportConfig from '../src/import.cjs'
import eslintPrettierRules from '../src/prettier.cjs'

const rulesFromESLint = Array.from(eslint.builtinRules.entries())
const rulesFromESLintImport = Object.entries(eslintImport.rules).map(
	([key, value]) => [`import/${key}`, value]
)

const rulesToImplement = [...rulesFromESLint, ...rulesFromESLintImport]
	.filter(
		([key, rule]) =>
			!eslintPrettierRules.includes(key) && !rule.meta.deprecated
	)
	.map(([key]) => key)

const rulesInConfig = Array.from(
	Object.keys({
		...eslintCommonConfig.rules,
		...eslintImportConfig.rules
	})
)

const rulesMissing = rulesToImplement.filter(
	(key) => !rulesInConfig.includes(key)
)

const rulesRedundant = rulesInConfig.filter(
	(key) => !rulesToImplement.includes(key)
)

if (rulesMissing.length || rulesRedundant.length) {
	console.group()
	console.log('Missing Rules', rulesMissing)
	console.groupEnd()

	console.group()
	console.log('Redundant Rules', rulesRedundant)
	console.groupEnd()

	process.exit(1)
}
