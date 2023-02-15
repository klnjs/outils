// eslint-disable-next-line import/no-unresolved
const eslintConfig = require('@klnjs/eslint-config')
const eslintTypescript = require('@typescript-eslint/eslint-plugin')
const eslintShared = Object.entries(eslintTypescript.rules).reduce(
	(acc, [key, rule]) => {
		const base = rule.meta.docs.extendsBaseRule
		const name = base === true ? key : base

		if (
			Boolean(name) &&
			!rule.meta.deprecated &&
			rule.meta.type !== 'layout'
		) {
			return {
				...acc,
				[name]: 'off',
				[`@typescript-eslint/${key}`]: eslintConfig.rules[name]
			}
		}

		return acc
	},
	{}
)

module.exports = {
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
		},
		'import/resolver': {
			node: {
				extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts']
			}
		},
		'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
		'import/external-module-folders': [
			'node_modules',
			'node_modules/@types'
		]
	},
	rules: {
		...eslintShared,
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-ts-comment': 'error',
		'@typescript-eslint/ban-tslint-comment': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/class-literal-property-style': 'error',
		'@typescript-eslint/consistent-generic-constructors': 'error',
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				fixStyle: 'inline-type-imports'
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/method-signature-style': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE']
			},
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase']
			},
			{
				selector: 'typeLike',
				format: ['PascalCase']
			}
		],
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'error',
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-import-type-side-effects': 'off',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-invalid-void-type': 'error',
		'@typescript-eslint/no-meaningless-void-operator': 'error',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-type-alias': 'off',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': 'error',
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unsafe-argument': 'error',
		'@typescript-eslint/no-unsafe-assignment': 'error',
		'@typescript-eslint/no-unsafe-call': 'error',
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'error',
		'@typescript-eslint/no-unsafe-return': 'error',
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/parameter-properties': 'error',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'error',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/promise-function-async': 'error',
		'@typescript-eslint/require-array-sort-compare': 'error',
		'@typescript-eslint/restrict-plus-operands': 'error',
		'@typescript-eslint/restrict-template-expressions': 'error',
		'@typescript-eslint/sort-type-constituents': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/typedef': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/unified-signatures': 'error'
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				// The following builtin rules, are already checked (more thoroughly) by the TypeScript compiler
				// Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
				// Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
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
				'valid-typeof': 'off', // ts(2367)

				// The following import rules are recommended to be disabled within TypeScript projects
				// See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
				'import/consistent-type-specifier-style': 'off',
				'import/default': 'off',
				'import/named': 'off',
				'import/namespace': 'off',
				'import/no-named-as-default-member': 'off',
				'import/no-unresolved': 'off'
			}
		}
	]
}
