module.exports = {
	plugins: ['react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
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
		'react/jsx-boolean-value': 'off',
		'react/jsx-curly-brace-presence': [
			'error',
			{
				props: 'never',
				children: 'never'
			}
		],
		'react/jsx-filename-extension': 'off',
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-handler-names': 'off',
		'react/jsx-key': 'off',
		'react/jsx-max-depth': 'off',
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
		'react/jsx-no-duplicate-props': [
			'error',
			{
				ignoreCase: true
			}
		],
		'react/jsx-no-literals': 'off',
		'react/jsx-no-script-url': 'off',
		'react/jsx-no-target-blank': [
			'error',
			{
				enforceDynamicLinks: 'always'
			}
		],
		'react/jsx-no-undef': 'error',
		'react/jsx-no-useless-fragment': 'error',
		'react/jsx-pascal-case': [
			'error',
			{
				allowAllCaps: true,
				ignore: []
			}
		],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-sort-default-props': 'off',
		'react/jsx-sort-props': 'off',
		'react/jsx-uses-react': 'off',
		'react/jsx-uses-vars': 'error',
		'react/no-access-state-in-setstate': 'error',
		'react/no-adjacent-inline-elements': 'off',
		'react/no-array-index-key': 'off',
		'react/no-children-prop': 'off',
		'react/no-danger': 'warn',
		'react/no-danger-with-children': 'error',
		'react/no-deprecated': 'error',
		'react/no-did-mount-set-state': 'off',
		'react/no-did-update-set-state': 'error',
		'react/no-direct-mutation-state': 'off',
		'react/no-find-dom-node': 'error',
		'react/no-is-mounted': 'error',
		'react/no-multi-comp': 'off',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value': 'error',
		'react/no-set-state': 'off',
		'react/no-string-refs': 'error',
		'react/no-this-in-sfc': 'error',
		'react/no-typos': 'error',
		'react/no-unescaped-entities': 'error',
		'react/no-unknown-property': 'error',
		'react/no-unsafe': 'off',
		'react/no-unused-prop-types': 'error',
		'react/no-unused-state': 'error',
		'react/no-will-update-set-state': 'error',
		'react/prefer-es6-class': 'off',
		'react/prefer-read-only-props': 'off',
		'react/prefer-stateless-function': 'off',
		'react/prop-types': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react/require-optimization': 'off',
		'react/require-render-return': 'error',
		'react/self-closing-comp': 'error',
		'react/sort-comp': 'off',
		'react/sort-prop-types': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/style-prop-object': 'error',
		'react/void-dom-elements-no-children': 'error'
	}
}
