module.exports = {
	extends: ['./react', './hooks'].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module'
	}
}
