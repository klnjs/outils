const eslintPluginReact = require('eslint-plugin-react')
const eslintPluginReactHooks = require('eslint-plugin-react-hooks')

module.exports = {
	files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
	plugins: {
		react: eslintPluginReact,
		'react-hooks': eslintPluginReactHooks
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	linterOptions: {
		reportUnusedDisableDirectives: true
	},
	rules: {
		'react/boolean-prop-naming': 'off',
		'react/button-has-type': 'off',
		'react/default-props-match-prop-types': 'off',
		'react/destructuring-assignment': 'off',
		'react/display-name': 'error',
		'react/forbid-component-props': 'off',
		'react/forbid-dom-props': 'off',
		'react/forbid-elements': 'off',
		'react/forbid-foreign-prop-types': 'error',
		'react/forbid-prop-types': 'off',
		'react/function-component-definition': 'off',
		'react/hook-use-state': 'error',
		'react/iframe-missing-sandbox': 'off',
		'react/jsx-boolean-value': 'off',
		'react/jsx-child-element-spacing': 'off',
		'react/jsx-closing-bracket-location': 'off',
		'react/jsx-closing-tag-location': 'off',
		'react/jsx-curly-brace-presence': [
			'error',
			{ props: 'never', children: 'never' }
		],
		'react/jsx-curly-spacing': 'off',
		'react/jsx-equals-spacing': 'off',
		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.jsx', '.tsx'] }
		],
		'react/jsx-first-prop-new-line': 'off',
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-handler-names': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-key': 'off',
		'react/jsx-max-depth': 'off',
		'react/jsx-max-props-per-line': 'off',
		'react/jsx-newline': 'off',
		'react/jsx-no-bind': [
			'error',
			{
				ignoreRefs: true,
				allowArrowFunctions: true,
				allowFunctions: false,
				allowBind: false,
				ignoreDOMComponents: true
			}
		],
		'react/jsx-no-comment-textnodes': 'error',
		'react/jsx-no-constructed-context-values': 'error',
		'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
		'react/jsx-no-leaked-render': 'error',
		'react/jsx-no-literals': 'off',
		'react/jsx-no-script-url': 'error',
		'react/jsx-no-target-blank': [
			'error',
			{ enforceDynamicLinks: 'always' }
		],
		'react/jsx-no-undef': 'error',
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
		'react/jsx-props-no-multi-spaces': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-props': 'off',
		'react/jsx-tag-spacing': 'off',
		'react/jsx-uses-react': 'off',
		'react/jsx-uses-vars': 'error',
		'react/jsx-wrap-multilines': 'off',
		'react/no-access-state-in-setstate': 'error',
		'react/no-adjacent-inline-elements': 'off',
		'react/no-array-index-key': 'error',
		'react/no-arrow-function-lifecycle': 'error',
		'react/no-children-prop': 'off',
		'react/no-danger-with-children': 'error',
		'react/no-danger': 'warn',
		'react/no-deprecated': 'error',
		'react/no-did-mount-set-state': 'off',
		'react/no-did-update-set-state': 'error',
		'react/no-direct-mutation-state': 'off',
		'react/no-find-dom-node': 'error',
		'react/no-invalid-html-attribute': 'error',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': 'off',
		'react/no-namespace': 'error',
		'react/no-object-type-as-default-prop': 'error',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-set-state': 'off',
		'react/no-string-refs': 'error',
		'react/no-this-in-sfc': 'error',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unsafe': 'off',
		'react/no-unstable-nested-components': 'error',
		'react/no-unused-class-component-methods': 'error',
		'react/no-unused-prop-types': 'error',
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': 'error',
		'react/prefer-exact-props': 'error',
		'react/prefer-read-only-props': 'off',
		'react/prefer-stateless-function': 'off',
		'react/prop-types': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react/require-optimization': 'off',
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'error',
		'react/sort-comp': 'off',
		'react/sort-default-props': 'off',
		'react/sort-prop-types': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error',

		'react-hooks/exhaustive-deps': 'error',
		'react-hooks/rules-of-hooks': 'error'
	}
}
