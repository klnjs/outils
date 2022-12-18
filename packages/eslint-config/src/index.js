module.exports = {
	extends: ['./common', './imports'].map(require.resolve),
	env: {
		es6: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022
	}
}
