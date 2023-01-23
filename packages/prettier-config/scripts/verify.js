import prettier from 'prettier'
import prettierConfig from '../index.cjs'
import { xor, log } from '../../../scripts/internal/helpers.js'
import { getOptions } from '../../../scripts/internal/prettier.js'

const optionsFromConfig = Object.keys(prettierConfig)
const optionsThatMustExists = getOptions(prettier)
const optionsMissing = xor(optionsThatMustExists, optionsFromConfig)
const optionsUnknown = xor(optionsFromConfig, optionsThatMustExists)

if (optionsMissing.length || optionsUnknown.length) {
	log('Missing', optionsMissing)
	log('Unknown', optionsUnknown)
	process.exit(1)
}
