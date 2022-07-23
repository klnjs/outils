module.exports = {
	root: true,
	extends: './packages/eslint-config/src/index',
	env: {
		node: true
	},
	settings: {
		"import/resolver": 'node'
	},
	rules: {
		'no-console': 'off',
		'import/no-unresolved': 'off'
	}
}
