const eslintPluginImport = require('eslint-plugin-import')

module.exports = {
	files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
	plugins: {
		import: eslintPluginImport
	},
	linterOptions: {
		reportUnusedDisableDirectives: true
	},
	languageOptions: {
		parserOptions: {
			ecmaVersion: 'latest'
		}
	},
	rules: {
		'accessor-pairs': 'off',
		'array-callback-return': [
			'error',
			{
				allowImplicit: true
			}
		],
		'arrow-body-style': 'error',
		'block-scoped-var': 'error',
		camelcase: [
			'error',
			{
				allow: ['^UNSAFE_']
			}
		],
		'capitalized-comments': 'off',
		'class-methods-use-this': 'error',
		complexity: 'off',
		'consistent-return': 'off',
		'consistent-this': 'off',
		'constructor-super': 'error',
		curly: 'off',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': 'error',
		eqeqeq: 'error',
		'for-direction': 'error',
		'func-name-matching': 'error',
		'func-names': 'off',
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true
			}
		],
		'getter-return': 'error',
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'id-denylist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		'init-declarations': 'off',
		'logical-assignment-operators': ['error', 'never'],
		'max-classes-per-file': 'off',
		'max-depth': 'off',
		'max-lines-per-function': 'off',
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'multiline-comment-style': 'off',
		'new-cap': 'error',
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'off',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': ['error', 'always'],
		'no-confusing-arrow': 'off',
		'no-console': 'warn',
		'no-const-assign': 'error',
		'no-constant-binary-expression': 'off',
		'no-constant-condition': 'warn',
		'no-constructor-return': 'error',
		'no-continue': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-else-if': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': 'off',
		'no-else-return': 'error',
		'no-empty-character-class': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-empty-static-block': 'error',
		'no-empty': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-ex-assign': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-label': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-import-assign': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-magic-numbers': 'off',
		'no-misleading-character-class': 'error',
		'no-mixed-operators': 'off',
		'no-multi-assign': 'error',
		'no-multi-str': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'off',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-native-nonconstructor': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-plusplus': 'off',
		'no-promise-executor-return': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'off',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-restricted-exports': [
			'error',
			{
				restrictedNamedExports: ['default', 'then']
			}
		],
		'no-restricted-globals': [
			'error',
			{
				name: 'isFinite',
				message: 'Please use Number.isFinite instead'
			},
			{
				name: 'isNaN',
				message: 'Please use Number.isNaN instead'
			}
		],
		'no-restricted-imports': 'off',
		'no-restricted-properties': [
			'error',
			{
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated'
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead'
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead'
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead'
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead'
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead'
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead'
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.'
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.'
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.'
			}
		],
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-setter-return': 'error',
		'no-shadow': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unexpected-multiline': 'off',
		'no-undefined': 'off',
		'no-underscore-dangle': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': [
			'error',
			{
				defaultAssignment: false
			}
		],
		'no-unreachable': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-unused-private-class-members': 'error',
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: true
			}
		],
		'no-use-before-define': 'off',
		'no-useless-backreference': 'error',
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-warning-comments': 'error',
		'no-with': 'error',
		'object-shorthand': 'off',
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': 'off',
		'prefer-arrow-callback': 'off',
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-object-has-own': 'off',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'off',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'quote-props': 'off',
		radix: 'error',
		'require-atomic-updates': 'off',
		'require-await': 'off',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'spaced-comment': 'off',
		strict: ['error', 'never'],
		'symbol-description': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'vars-on-top': 'error',
		yoda: 'error',

		'import/consistent-type-specifier-style': 'off',
		'import/default': 'off',
		'import/dynamic-import-chunkname': 'off',
		'import/export': 'error',
		'import/exports-last': 'off',
		'import/extensions': 'off',
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/no-relative-packages': 'off',
		'import/max-dependencies': 'off',
		'import/named': 'error',
		'import/namespace': 'off',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'off',
		'import/no-commonjs': 'off',
		'import/no-cycle': 'off',
		'import/no-default-export': 'off',
		'import/no-deprecated': 'off',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-empty-named-blocks': 'error',
		'import/no-extraneous-dependencies': 'off',
		'import/no-import-module-exports': 'off',
		'import/no-internal-modules': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 'off',
		'import/no-namespace': 'off',
		'import/no-nodejs-modules': 'off',
		'import/no-relative-parent-imports': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': 'off',
		'import/no-unresolved': [
			'error',
			{
				commonjs: true,
				caseSensitive: true
			}
		],
		'import/no-unused-modules': 'off',
		'import/no-useless-path-segments': [
			'error',
			{
				commonjs: true
			}
		],
		'import/no-webpack-loader-syntax': 'error',
		'import/order': [
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
		'import/prefer-default-export': 'off',
		'import/unambiguous': 'off'
	}
}
