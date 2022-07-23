module.exports = {
	env: {
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	plugins: ['import'],
	extends: ['./common', './errors', './imports', './variables']
}
