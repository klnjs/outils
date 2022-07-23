module.exports = {
	rules: {
		'import/default': 'off',
		'import/dynamic-import-chunkname': 'off',
		'import/export': 'error',
		'import/exports-last': 'off',
		'import/extensions': 'off',
		'import/first': 'error',
		'import/group-exports': 'off',
		'import/max-dependencies': 'off',
		'import/named': 'error',
		'import/namespace': 'off',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-amd': 'error',
		'import/no-anonymous-default-export': 'off',
		'import/no-commonjs': 'off',
		'import/no-cycle': 'off',
		'import/no-default-export': 'off',
		'import/no-deprecated': 'off',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-extraneous-dependencies': 'off',
		'import/no-internal-modules': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-named-default': 'error',
		'import/no-named-export': 'off',
		'import/no-namespace': 'off',
		'import/no-nodejs-modules': 'off',
		'import/no-relative-parent-imports': 'off',
		'import/no-restricted-paths': 'off',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': 'off',
		'import/no-unresolved': [
			'error',
			{
				commonjs: true,
				caseSensitive: true
			}
		],
		'import/no-unused-modules': 'off',
		'import/no-useless-path-segments': [
			'error',
			{
				commonjs: true
			}
		],
		'import/no-webpack-loader-syntax': 'error',
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
			}
		],
		'import/prefer-default-export': 'off',
		'import/unambiguous': 'off'
	}
}
