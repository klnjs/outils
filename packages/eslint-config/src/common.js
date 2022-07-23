module.exports = {
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
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: []
			}
		],
		complexity: ['off', 11],
		'consistent-return': 'off',
		'constructor-super': 'error',
		curly: ['error', 'multi-line'],
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': 'error',
		eqeqeq: 'error',
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'error',
		'max-classes-per-file': 'off',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-confusing-arrow': 'off',
		'no-const-assign': 'error',
		'no-constructor-return': 'error',
		'no-div-regex': 'off',
		'no-dupe-class-members': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-loss-of-precision': 'error',
		'no-magic-numbers': 'off',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-exports': [
			'error',
			{
				restrictedNamedExports: ['default', 'then']
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
		'no-return-assign': 'off',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-this-before-super': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-unused-expressions': [
			'error',
			{
				allowTernary: true,
				allowShortCircuit: true,
				allowTaggedTemplates: true
			}
		],
		'no-unused-labels': 'error',
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
		'prefer-arrow-callback': 'off',
		'prefer-const': 'error',
		'prefer-destructuring': 'error',
		'prefer-named-capture-group': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-promise-reject-errors': 'off',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		radix: 'error',
		'require-await': 'off',
		'require-unicode-regexp': 'off',
		'require-yield': 'error',
		'sort-imports': 'off',
		strict: ['error', 'never'],
		'symbol-description': 'error',
		'vars-on-top': 'error',
		yoda: 'error'
	}
}
