import eslintTypescript from '@typescript-eslint/eslint-plugin'
import eslintConfig from '../src/index.cjs'
import {
	getRulesFromPlugin,
	getNonIntersection,
	logError
} from '../../../scripts/internal/eslint.js'

const rulesFromConfig = Object.keys(eslintConfig.rules)
const rulesFromTypescript = getRulesFromPlugin(eslintTypescript, {
	prefix: '@typescript-eslint'
})

const rulesThatMustBeOff = rulesFromTypescript.reduce((acc, rule) => {
	const base = rule.meta.docs.extendsBaseRule
	const name =
		base === true ? rule.name.replace('@typescript-eslint/', '') : base
	return name ? [...acc, name] : acc
}, [])

const rulesThatMustExists = [
	...rulesThatMustBeOff,
	...rulesFromTypescript.map((rule) => rule.name)
]

const rulesMissing = getNonIntersection(rulesThatMustExists, rulesFromConfig)
const rulesUnknown = getNonIntersection(rulesFromConfig, rulesThatMustExists)
const rulesInvalid = rulesThatMustBeOff.filter(
	(name) => eslintConfig.rules[name] !== 'off'
)

if (rulesMissing.length || rulesUnknown.length || rulesInvalid.length) {
	logError('Missing', rulesMissing)
	logError('Unknown', rulesUnknown)
	logError('Invalid', rulesInvalid)
	process.exit(1)
}
