import eslint from 'eslint/use-at-your-own-risk'
import eslintImport from 'eslint-plugin-import'
import eslintCommonConfig from '../src/common.cjs'
import eslintImportsConfig from '../src/imports.cjs'
import eslintPrettierRules from '../src/internal/prettier.cjs'

const rulesBuiltin = Array.from(eslint.builtinRules.entries())
const rulesBuiltinImport = Object.entries(eslintImport.rules).map(
	([key, value]) => [`import/${key}`, value]
)

const rulesToExclude = eslintPrettierRules
const rulesToImplement = [...rulesBuiltin, ...rulesBuiltinImport]
	.filter(
		([key, rule]) => !rulesToExclude.includes(key) && !rule.meta.deprecated
	)
	.map(([key]) => key)

const rulesInConfig = Array.from(
	Object.keys({
		...eslintCommonConfig.rules,
		...eslintImportsConfig.rules
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
