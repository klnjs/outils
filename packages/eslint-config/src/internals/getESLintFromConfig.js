import { ESLint } from 'eslint'

export const getESLintFromConfig = (config) =>
	new ESLint({
		plugins: config.plugins,
		errorOnUnmatchedPattern: false,
		baseConfig: {
			parserOptions: {
				sourceType: config.languageOptions.sourceType,
				ecmaVersion: config.languageOptions.ecmaVersion,
				ecmaFeatures: config.languageOptions.ecmaFeatures
			},
			globals: config.languageOptions.globals,
			settings: config.settings,
			rules: config.rules,
			noInlineConfig: config.linterOptions.noInlineConfig,
			reportUnusedDisableDirectives:
				config.linterOptions.reportUnusedDisableDirectives
		}
	})
