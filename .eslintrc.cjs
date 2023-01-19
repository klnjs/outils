module.exports = {
	extends: './packages/eslint-config/src/index.cjs',
	env: {
		node: true
	},
	rules: {
		'no-console': 'off'
	}
}
