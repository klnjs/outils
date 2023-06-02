const ts = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const tsImport = require('eslint-plugin-import')

module.exports = {
	files: ['**/*.ts', '**/*.tsx'],
	plugins: {
		ts,
		'ts-import': tsImport
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts']
		}
	},
	linterOptions: {
		reportUnusedDisableDirectives: true
	},
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			project: './tsconfig.json',
			ecmaVersion: 'latest'
		}
	},
	rules: {
		'ts/adjacent-overload-signatures': 'error',
		'ts/array-type': 'error',
		'ts/await-thenable': 'error',
		'ts/ban-ts-comment': 'error',
		'ts/ban-tslint-comment': 'error',
		'ts/ban-types': 'error',
		'ts/class-literal-property-style': 'error',
		'ts/consistent-generic-constructors': 'error',
		'ts/consistent-indexed-object-style': 'error',
		'ts/consistent-type-assertions': 'error',
		'ts/consistent-type-definitions': ['error', 'type'],
		'ts/consistent-type-exports': 'error',
		'ts/consistent-type-imports': [
			'error',
			{ fixStyle: 'inline-type-imports' }
		],
		'ts/default-param-last': 'error',
		'ts/dot-notation': 'error',
		'ts/explicit-function-return-type': 'off',
		'ts/explicit-member-accessibility': 'off',
		'ts/explicit-module-boundary-types': 'off',
		'ts/init-declarations': 'off',
		'ts/member-ordering': 'off',
		'ts/method-signature-style': 'error',
		'ts/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE']
			},
			{ selector: 'function', format: ['camelCase', 'PascalCase'] },
			{ selector: 'typeLike', format: ['PascalCase'] }
		],
		'ts/no-array-constructor': 'error',
		'ts/no-base-to-string': 'error',
		'ts/no-confusing-non-null-assertion': 'error',
		'ts/no-confusing-void-expression': 'error',
		'ts/no-dupe-class-members': 'error',
		'ts/no-duplicate-enum-values': 'error',
		'ts/no-duplicate-type-constituents': 'error',
		'ts/no-dynamic-delete': 'error',
		'ts/no-empty-function': 'off',
		'ts/no-empty-interface': 'error',
		'ts/no-explicit-any': 'error',
		'ts/no-extra-non-null-assertion': 'error',
		'ts/no-extra-semi': 'error',
		'ts/no-extraneous-class': 'error',
		'ts/no-floating-promises': 'error',
		'ts/no-for-in-array': 'error',
		'ts/no-implied-eval': 'error',
		'ts/no-import-type-side-effects': 'error',
		'ts/no-inferrable-types': 'error',
		'ts/no-invalid-this': 'off',
		'ts/no-invalid-void-type': 'error',
		'ts/no-loop-func': 'error',
		'ts/no-loss-of-precision': 'error',
		'ts/no-magic-numbers': 'off',
		'ts/no-meaningless-void-operator': 'error',
		'ts/no-misused-new': 'error',
		'ts/no-misused-promises': 'error',
		'ts/no-mixed-enums': 'error',
		'ts/no-namespace': 'error',
		'ts/no-non-null-asserted-nullish-coalescing': 'error',
		'ts/no-non-null-asserted-optional-chain': 'error',
		'ts/no-non-null-assertion': 'error',
		'ts/no-redeclare': 'error',
		'ts/no-redundant-type-constituents': 'error',
		'ts/no-require-imports': 'error',
		'ts/no-restricted-imports': 'off',
		'ts/no-shadow': 'error',
		'ts/no-this-alias': 'error',
		'ts/no-throw-literal': 'error',
		'ts/no-type-alias': 'off',
		'ts/no-unnecessary-boolean-literal-compare': 'error',
		'ts/no-unnecessary-condition': 'error',
		'ts/no-unnecessary-qualifier': 'error',
		'ts/no-unnecessary-type-arguments': 'error',
		'ts/no-unnecessary-type-assertion': 'error',
		'ts/no-unnecessary-type-constraint': 'error',
		'ts/no-unsafe-argument': 'error',
		'ts/no-unsafe-assignment': 'error',
		'ts/no-unsafe-call': 'error',
		'ts/no-unsafe-declaration-merging': 'error',
		'ts/no-unsafe-enum-comparison': 'error',
		'ts/no-unsafe-member-access': 'error',
		'ts/no-unsafe-return': 'error',
		'ts/no-unused-expressions': 'error',
		'ts/no-unused-vars': [
			'error',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: true }
		],
		'ts/no-use-before-define': 'off',
		'ts/no-useless-constructor': 'error',
		'ts/no-useless-empty-export': 'error',
		'ts/no-var-requires': 'error',
		'ts/non-nullable-type-assertion-style': 'error',
		'ts/parameter-properties': 'error',
		'ts/prefer-as-const': 'error',
		'ts/prefer-enum-initializers': 'error',
		'ts/prefer-for-of': 'off',
		'ts/prefer-function-type': 'error',
		'ts/prefer-includes': 'error',
		'ts/prefer-literal-enum-member': 'error',
		'ts/prefer-namespace-keyword': 'error',
		'ts/prefer-nullish-coalescing': 'error',
		'ts/prefer-optional-chain': 'error',
		'ts/prefer-readonly-parameter-types': 'off',
		'ts/prefer-readonly': 'error',
		'ts/prefer-reduce-type-parameter': 'error',
		'ts/prefer-regexp-exec': 'off',
		'ts/prefer-return-this-type': 'error',
		'ts/prefer-string-starts-ends-with': 'error',
		'ts/prefer-ts-expect-error': 'error',
		'ts/promise-function-async': 'error',
		'ts/require-array-sort-compare': 'error',
		'ts/require-await': 'off',
		'ts/restrict-plus-operands': 'error',
		'ts/restrict-template-expressions': 'error',
		'ts/return-await': 'error',
		'ts/sort-type-constituents': 'off',
		'ts/strict-boolean-expressions': 'off',
		'ts/switch-exhaustiveness-check': 'error',
		'ts/triple-slash-reference': 'error',
		'ts/typedef': 'off',
		'ts/unbound-method': 'off',
		'ts/unified-signatures': 'error',

		// See:
		// https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
		'ts-import/consistent-type-specifier-style': 'off',
		'ts-import/default': 'off',
		'ts-import/dynamic-import-chunkname': 'off',
		'ts-import/export': 'error',
		'ts-import/exports-last': 'off',
		'ts-import/extensions': 'off',
		'ts-import/first': 'error',
		'ts-import/group-exports': 'off',
		'ts-import/no-relative-packages': 'off',
		'ts-import/max-dependencies': 'off',
		'ts-import/named': 'off',
		'ts-import/namespace': 'off',
		'ts-import/no-absolute-path': 'error',
		'ts-import/no-amd': 'error',
		'ts-import/no-anonymous-default-export': 'off',
		'ts-import/no-commonjs': 'off',
		'ts-import/no-cycle': 'off',
		'ts-import/no-default-export': 'off',
		'ts-import/no-deprecated': 'off',
		'ts-import/no-duplicates': 'error',
		'ts-import/no-dynamic-require': 'error',
		'ts-import/no-empty-named-blocks': 'error',
		'ts-import/no-extraneous-dependencies': 'off',
		'ts-import/no-import-module-exports': 'off',
		'ts-import/no-internal-modules': 'off',
		'ts-import/no-mutable-exports': 'error',
		'ts-import/no-named-as-default-member': 'off',
		'ts-import/no-named-as-default': 'error',
		'ts-import/no-named-default': 'error',
		'ts-import/no-named-export': 'off',
		'ts-import/no-namespace': 'off',
		'ts-import/no-nodejs-modules': 'off',
		'ts-import/no-relative-parent-imports': 'off',
		'ts-import/no-restricted-paths': 'off',
		'ts-import/no-self-import': 'error',
		'ts-import/no-unassigned-import': 'off',
		'ts-import/no-unresolved': 'off',
		'ts-import/no-unused-modules': 'off',
		'ts-import/no-useless-path-segments': 'error',
		'ts-import/no-webpack-loader-syntax': 'error',
		'ts-import/order': [
			'error',
			{
				'newlines-between': 'never',
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index'
				]
			}
		],
		'ts-import/prefer-default-export': 'off',
		'ts-import/unambiguous': 'off'
	}
}
