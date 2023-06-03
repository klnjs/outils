import globals from 'globals'
import eslintConfig from './packages/eslint-config/index.cjs'

export default [
	eslintConfig,
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
