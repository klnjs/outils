import { getEslintRules } from "./src/eslint"

export default {
	files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
	linterOptions: {
		reportUnusedDisableDirectives: true
	},
	languageOptions: {
		parserOptions: {
			ecmaVersion: 'latest'
		}
	},
	rules: {
		...getEslintRules()
	}
}
