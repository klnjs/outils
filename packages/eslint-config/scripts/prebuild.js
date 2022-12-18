const eslint = require('eslint/use-at-your-own-risk')
const eslintImport = require('eslint-plugin-import')
const eslintCommonConfig = require('../src/common')
const eslintImportsConfig = require('../src/imports')
const eslintPrettierRules = require('../src/internal/prettier')

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
