import * as react from './src/react.js'
import * as reactHooks from './src/react-hooks.js'

export default {
	files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
	plugins: {
		[react.prefix]: react.plugin,
		[reactHooks.prefix]: reactHooks.plugin
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
		...react.getRules(),
		...reactHooks.getRules()
	}
}
