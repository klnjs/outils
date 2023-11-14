import tsePlugin from '@typescript-eslint/eslint-plugin'
import tseParser from '@typescript-eslint/parser'

import { getBuiltinRules } from './src/builtin'
import {
	getTypescriptRules,
	getTypescriptExtensionRules
} from './src/typescript'

export default {
	files: ['**/*.ts', '**/*.tsx'],
	plugins: {
		'@typescript-eslint': tsePlugin
	},
	linterOptions: {
		reportUnusedDisableDirectives: true
	},
	languageOptions: {
		parser: tseParser,
		parserOptions: {
			project: true,
			ecmaVersion: 'latest'
		}
	},
	rules: {
		...getBuiltinRules(),
		...getTypescriptExtensionRules,
		...getTypescriptRules()
	}
}
