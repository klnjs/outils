import rePlugin from 'eslint-plugin-react'
import rhePlugin from 'eslint-plugin-react-hooks'
import { getReactRules } from './src/react'
import { getReactHooksRules } from './src/react-hooks'

export default {
	files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
	plugins: {
		react: rePlugin,
		'react-hooks': rhePlugin
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	linterOptions: {
		reportUnusedDisableDirectives: true
	},
	rules: {
		...getReactRules(),
		...getReactHooksRules()
	}
}
