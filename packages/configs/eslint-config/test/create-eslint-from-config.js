import { ESLint } from 'eslint'

export const createESLintFromConfig = (config) =>
	new ESLint({
		plugins: config.plugins,
		baseConfig: config,
		errorOnUnmatchedPattern: false
	})
