import * as typescript from './src/typescript.js'

export default {
	files: ['**/*.ts', '**/*.tsx'],
	plugins: {
		[typescript.prefix]: typescript.plugin
	},
	linterOptions: {
		reportUnusedDisableDirectives: true
	},
	languageOptions: {
		parser: typescript.parser,
		parserOptions: {
			project: true,
			ecmaVersion: 'latest'
		}
	},
	rules: {
		...typescript.getTypescriptBuiltinRules(),
		...typescript.getTypescriptExtensionRules(),
		...typescript.getTypescriptRules()
	}
}
