import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import eslintConfig from '@klnjs/eslint-config'

const eslintShared = Object.entries(ts.rules).reduce(
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

export default {
	files: ['**/*.ts', '**/*.tsx'],
	plugins: {
		ts
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts"],
		},
	},
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			project: './tsconfig.json',
			
		}
	},
	linterOptions: {
		noInlineConfig: true,
		reportUnusedDisableDirectives: true
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
			{
				fixStyle: 'inline-type-imports'
			}
		],
		'ts/explicit-function-return-type': 'off',
		'ts/explicit-member-accessibility': 'off',
		'ts/explicit-module-boundary-types': 'off',
		'ts/member-ordering': 'off',
		'ts/method-signature-style': 'error',
		'ts/naming-convention': [
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
		'ts/no-base-to-string': 'error',
		'ts/no-confusing-non-null-assertion': 'error',
		'ts/no-confusing-void-expression': 'error',
		'ts/no-duplicate-enum-values': 'error',
		'ts/no-duplicate-type-constituents': 'error',
		'ts/no-dynamic-delete': 'error',
		'ts/no-empty-interface': 'error',
		'ts/no-explicit-any': 'error',
		'ts/no-extra-non-null-assertion': 'error',
		'ts/no-extraneous-class': 'error',
		'ts/no-floating-promises': 'error',
		'ts/no-for-in-array': 'error',
		'ts/no-import-type-side-effects': 'off',
		'ts/no-inferrable-types': 'error',
		'ts/no-invalid-void-type': 'error',
		'ts/no-meaningless-void-operator': 'error',
		'ts/no-misused-new': 'error',
		'ts/no-misused-promises': 'error',
		'ts/no-mixed-enums': 'error',
		'ts/no-namespace': 'error',
		'ts/no-non-null-asserted-nullish-coalescing': 'error',
		'ts/no-non-null-asserted-optional-chain': 'error',
		'ts/no-non-null-assertion': 'error',
		'ts/no-redundant-type-constituents': 'error',
		'ts/no-require-imports': 'error',
		'ts/no-this-alias': 'error',
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
		'ts/restrict-plus-operands': 'error',
		'ts/restrict-template-expressions': 'error',
		'ts/sort-type-constituents': 'off',
		'ts/strict-boolean-expressions': 'off',
		'ts/switch-exhaustiveness-check': 'error',
		'ts/triple-slash-reference': 'error',
		'ts/typedef': 'off',
		'ts/unbound-method': 'off',
		'ts/unified-signatures': 'error'
	},
		files: ['**/*.ts', '**/*.tsx'],
	plugins: {
		ts
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts"],
		},
	},
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			project: './tsconfig.json',
			
		}
	},
	linterOptions: {
		noInlineConfig: true,
		reportUnusedDisableDirectives: true
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
			{
				fixStyle: 'inline-type-imports'
			}
		],
		'ts/explicit-function-return-type': 'off',
		'ts/explicit-member-accessibility': 'off',
		'ts/explicit-module-boundary-types': 'off',
		'ts/member-ordering': 'off',
		'ts/method-signature-style': 'error',
		'ts/naming-convention': [
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
		'ts/no-base-to-string': 'error',
		'ts/no-confusing-non-null-assertion': 'error',
		'ts/no-confusing-void-expression': 'error',
		'ts/no-duplicate-enum-values': 'error',
		'ts/no-duplicate-type-constituents': 'error',
		'ts/no-dynamic-delete': 'error',
		'ts/no-empty-interface': 'error',
		'ts/no-explicit-any': 'error',
		'ts/no-extra-non-null-assertion': 'error',
		'ts/no-extraneous-class': 'error',
		'ts/no-floating-promises': 'error',
		'ts/no-for-in-array': 'error',
		'ts/no-import-type-side-effects': 'off',
		'ts/no-inferrable-types': 'error',
		'ts/no-invalid-void-type': 'error',
		'ts/no-meaningless-void-operator': 'error',
		'ts/no-misused-new': 'error',
		'ts/no-misused-promises': 'error',
		'ts/no-mixed-enums': 'error',
		'ts/no-namespace': 'error',
		'ts/no-non-null-asserted-nullish-coalescing': 'error',
		'ts/no-non-null-asserted-optional-chain': 'error',
		'ts/no-non-null-assertion': 'error',
		'ts/no-redundant-type-constituents': 'error',
		'ts/no-require-imports': 'error',
		'ts/no-this-alias': 'error',
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
		'ts/restrict-plus-operands': 'error',
		'ts/restrict-template-expressions': 'error',
		'ts/sort-type-constituents': 'off',
		'ts/strict-boolean-expressions': 'off',
		'ts/switch-exhaustiveness-check': 'error',
		'ts/triple-slash-reference': 'error',
		'ts/typedef': 'off',
		'ts/unbound-method': 'off',
		'ts/unified-signatures': 'error'
	}
}
