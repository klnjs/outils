import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import klnConfig from '@klnjs/eslint-config'
import { getRulesFromPlugin } from '../../../scripts/eslint.js'

export const plugin = tsPlugin

export const parser = tsParser

export const prefix = '@typescript-eslint'

// The following builtin rules are checked more thoroughly by the TypeScript compiler.
// See: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
export const getTypescriptBuiltinRules = () => ({
	'constructor-super': 'off', // ts(2335) & ts(2377)
	'getter-return': 'off', // ts(2378)
	'no-const-assign': 'off', // ts(2588)
	'no-dupe-args': 'off', // ts(2300)
	'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
	'no-dupe-keys': 'off', // ts(1117)
	'no-func-assign': 'off', // ts(2539)
	'no-import-assign': 'off', // ts(2539) & ts(2540)
	'no-new-symbol': 'off', // ts(7009)
	'no-obj-calls': 'off', // ts(2349)
	'no-redeclare': 'off', // ts(2451)
	'no-setter-return': 'off', // ts(2408)
	'no-this-before-super': 'off', // ts(2376)
	'no-undef': 'off', // ts(2304)
	'no-unreachable': 'off', // ts(7027)
	'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
	'valid-typeof': 'off' // ts(2367)
})

// The following will enable all TypeScript extension rules and disable the builtin equivalent.
// See: https://typescript-eslint.io/rules/#extension-rules
export const getTypescriptExtensionRules = () =>
	getRulesFromPlugin(plugin, {
		exclude: (rule) => !rule.meta.docs.extendsBaseRule
	}).reduce((acc, rule) => {
		const base = rule.meta.docs.extendsBaseRule
		const name = base === true ? rule.name : base
		const value = klnConfig.rules[name]

		if (value !== undefined) {
			return {
				[name]: 'off',
				...acc,
				[`${prefix}/${name}`]: value
			}
		}

		return acc
	}, {})

// The following configures all typescript-eslint rules that are not extensions.
// See: https://typescript-eslint.io/rules
export const getTypescriptRules = () => ({
	[`${prefix}/adjacent-overload-signatures`]: 'error',
	[`${prefix}/array-type`]: 'error',
	[`${prefix}/await-thenable`]: 'error',
	[`${prefix}/ban-ts-comment`]: 'error',
	[`${prefix}/ban-tslint-comment`]: 'error',
	[`${prefix}/ban-types`]: 'error',
	[`${prefix}/class-literal-property-style`]: 'error',
	[`${prefix}/consistent-generic-constructors`]: 'error',
	[`${prefix}/consistent-indexed-object-style`]: 'error',
	[`${prefix}/consistent-type-assertions`]: 'error',
	[`${prefix}/consistent-type-definitions`]: ['error', 'type'],
	[`${prefix}/consistent-type-exports`]: 'error',
	[`${prefix}/consistent-type-imports`]: [
		'error',
		{ fixStyle: 'inline-type-imports' }
	],
	[`${prefix}/explicit-function-return-type`]: 'off',
	[`${prefix}/explicit-member-accessibility`]: 'off',
	[`${prefix}/explicit-module-boundary-types`]: 'off',
	[`${prefix}/member-ordering`]: 'off',
	[`${prefix}/method-signature-style`]: 'error',
	[`${prefix}/naming-convention`]: [
		'error',
		{
			selector: 'variable',
			format: ['camelCase', 'PascalCase', 'UPPER_CASE']
		},
		{ selector: 'function', format: ['camelCase', 'PascalCase'] },
		{ selector: 'typeLike', format: ['PascalCase'] }
	],
	[`${prefix}/no-base-to-string`]: 'error',
	[`${prefix}/no-confusing-non-null-assertion`]: 'error',
	[`${prefix}/no-confusing-void-expression`]: 'off',
	[`${prefix}/no-duplicate-enum-values`]: 'error',
	[`${prefix}/no-duplicate-type-constituents`]: 'error',
	[`${prefix}/no-dynamic-delete`]: 'error',
	[`${prefix}/no-empty-interface`]: 'error',
	[`${prefix}/no-explicit-any`]: 'error',
	[`${prefix}/no-extra-non-null-assertion`]: 'error',
	[`${prefix}/no-extra-semi`]: 'off',
	[`${prefix}/no-extraneous-class`]: 'error',
	[`${prefix}/no-floating-promises`]: 'error',
	[`${prefix}/no-for-in-array`]: 'error',
	[`${prefix}/no-import-type-side-effects`]: 'error',
	[`${prefix}/no-inferrable-types`]: 'error',
	[`${prefix}/no-invalid-void-type`]: 'error',
	[`${prefix}/no-meaningless-void-operator`]: 'error',
	[`${prefix}/no-misused-new`]: 'error',
	[`${prefix}/no-misused-promises`]: 'error',
	[`${prefix}/no-mixed-enums`]: 'error',
	[`${prefix}/no-namespace`]: 'error',
	[`${prefix}/no-non-null-asserted-nullish-coalescing`]: 'error',
	[`${prefix}/no-non-null-asserted-optional-chain`]: 'error',
	[`${prefix}/no-non-null-assertion`]: 'error',
	[`${prefix}/no-redundant-type-constituents`]: 'error',
	[`${prefix}/no-require-imports`]: 'error',
	[`${prefix}/no-this-alias`]: 'error',
	[`${prefix}/no-unnecessary-boolean-literal-compare`]: 'error',
	[`${prefix}/no-unnecessary-condition`]: 'error',
	[`${prefix}/no-unnecessary-qualifier`]: 'error',
	[`${prefix}/no-unnecessary-type-arguments`]: 'error',
	[`${prefix}/no-unnecessary-type-assertion`]: 'error',
	[`${prefix}/no-unnecessary-type-constraint`]: 'error',
	[`${prefix}/no-unsafe-argument`]: 'error',
	[`${prefix}/no-unsafe-assignment`]: 'error',
	[`${prefix}/no-unsafe-call`]: 'error',
	[`${prefix}/no-unsafe-declaration-merging`]: 'error',
	[`${prefix}/no-unsafe-enum-comparison`]: 'error',
	[`${prefix}/no-unsafe-member-access`]: 'error',
	[`${prefix}/no-unsafe-return`]: 'error',
	[`${prefix}/no-unsafe-unary-minus`]: 'off',
	[`${prefix}/no-useless-empty-export`]: 'error',
	[`${prefix}/no-var-requires`]: 'error',
	[`${prefix}/non-nullable-type-assertion-style`]: 'error',
	[`${prefix}/parameter-properties`]: 'error',
	[`${prefix}/prefer-as-const`]: 'error',
	[`${prefix}/prefer-enum-initializers`]: 'error',
	[`${prefix}/prefer-for-of`]: 'off',
	[`${prefix}/prefer-function-type`]: 'error',
	[`${prefix}/prefer-includes`]: 'error',
	[`${prefix}/prefer-literal-enum-member`]: 'error',
	[`${prefix}/prefer-namespace-keyword`]: 'error',
	[`${prefix}/prefer-nullish-coalescing`]: 'error',
	[`${prefix}/prefer-optional-chain`]: 'error',
	[`${prefix}/prefer-readonly-parameter-types`]: 'off',
	[`${prefix}/prefer-readonly`]: 'error',
	[`${prefix}/prefer-reduce-type-parameter`]: 'error',
	[`${prefix}/prefer-regexp-exec`]: 'off',
	[`${prefix}/prefer-return-this-type`]: 'error',
	[`${prefix}/prefer-string-starts-ends-with`]: 'error',
	[`${prefix}/prefer-ts-expect-error`]: 'error',
	[`${prefix}/promise-function-async`]: 'error',
	[`${prefix}/require-array-sort-compare`]: 'error',
	[`${prefix}/restrict-plus-operands`]: 'error',
	[`${prefix}/restrict-template-expressions`]: 'error',
	[`${prefix}/return-await`]: 'error',
	[`${prefix}/sort-type-constituents`]: 'off',
	[`${prefix}/strict-boolean-expressions`]: 'off',
	[`${prefix}/switch-exhaustiveness-check`]: 'error',
	[`${prefix}/triple-slash-reference`]: 'error',
	[`${prefix}/typedef`]: 'off',
	[`${prefix}/unbound-method`]: 'off',
	[`${prefix}/unified-signatures`]: 'error'
})
