module.exports = {
	extends: ['./react', './hooks'].map(require.resolve),
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022,
		ecmaFeatures: {
			jsx: true
		}
	}
}
