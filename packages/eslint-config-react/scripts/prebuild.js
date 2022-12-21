import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactConfig from '../src/react.cjs'
import eslintReactHooksConfig from '../src/react-hooks.cjs'
import eslintReactPrettierRules from '../src/react-prettier.cjs'

const rulesFromESLintReact = Object.entries(eslintReact.rules).map(
	([key, value]) => [`react/${key}`, value]
)
const rulesFromESLintReactHooks = Object.entries(eslintReactHooks.rules).map(
	([key, value]) => [`react-hooks/${key}`, value]
)

const rulesToImplement = [...rulesFromESLintReact, ...rulesFromESLintReactHooks]
	.filter(
		([key, rule]) =>
			!eslintReactPrettierRules.includes(key) && !rule.meta.deprecated
	)
	.map(([key]) => key)

const rulesInConfig = Array.from(
	Object.keys({
		...eslintReactConfig.rules,
		...eslintReactHooksConfig.rules
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
