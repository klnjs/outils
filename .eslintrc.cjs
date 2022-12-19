module.exports = {
	root: true,
	extends: './packages/eslint-config/src/index',
	env: {
		node: true
	},
	rules: {
		'no-console': 'off',
		'import/no-unresolved': 'off'
	}
}
