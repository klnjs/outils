import globals from 'globals'
import eslintConfig from './packages/eslint-config/index.cjs'
import eslintConfigImport from './packages/eslint-config-import/index.cjs'

export default [
	eslintConfig,
	eslintConfigImport,
	{
		files: ['**/scripts/*.js'],
		languageOptions: {
			globals: {
				...globals.node
			}
		},
		rules: {
			'no-console': 'off'
		}
	}
]
