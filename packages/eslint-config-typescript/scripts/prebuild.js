import eslintTypescript from '@typescript-eslint/eslint-plugin'
import eslintTypescriptConfig from '../src/index.cjs'

const rulesFromESLintTypescript = Object.entries(eslintTypescript.rules).map(
	([key, value]) => [`@typescript-eslint/${key}`, value]
)
const rulesToImplement = [...rulesFromESLintTypescript]
	.filter(([key, rule]) => !rule.meta.deprecated)
	.map(([key]) => key)

const rulesInConfig = Array.from(
	Object.keys({
		...eslintTypescriptConfig.rules
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
