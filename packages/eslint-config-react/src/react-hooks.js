import rhPlugin from 'eslint-plugin-react-hooks'

export const plugin = rhPlugin

export const prefix = 'react-hooks'

export const getRules = () => ({
	[`${prefix}/exhaustive-deps`]: 'error',
	[`${prefix}/rules-of-hooks`]: 'error'
})
