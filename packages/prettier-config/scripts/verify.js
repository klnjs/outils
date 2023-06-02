import prettier from 'prettier'
import prettierConfig from '../index.cjs'
import { xor, log } from '../../../scripts/helpers.js'
import { getOptions } from '../../../scripts/prettier.js'

try {
	const optionsFromConfig = Object.keys(prettierConfig)
	const optionsThatMustExists = getOptions(prettier)
	const optionsMissing = xor(optionsThatMustExists, optionsFromConfig)
	const optionsUnknown = xor(optionsFromConfig, optionsThatMustExists)

	if (optionsMissing.length || optionsUnknown.length) {
		log('Missing', optionsMissing)
		log('Unknown', optionsUnknown)
		process.exit(1)
	}
} catch (error) {
	console.log(error)
	process.exit(1)
}
