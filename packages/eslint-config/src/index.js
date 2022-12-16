module.exports = {
	extends: ['./common', './errors', './imports', './variables'].map(
		require.resolve
	),
	env: {
		es6: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022
	}
}
