import prettier from 'prettier'
import config from '../index.js'
import { xor, log } from '../../../scripts/helpers.js'

const getPrettierOptions = async ({
	exclude,
	excludeOptions = ['parser', 'plugins', 'pluginSearchDirs'],
	excludeDeprecated = true,
	excludeCategories = ['Special', 'HTML']
} = {}) => {
	const { options } = await prettier.getSupportInfo()

	return options.reduce((acc, opt) => {
		// Filter out deprecated and categories rules
		if (
			(exclude && exclude(opt)) ||
			(excludeOptions && excludeOptions.includes(opt.name)) ||
			(excludeCategories && excludeCategories.includes(opt.category)) ||
			(excludeDeprecated && opt.deprecated)
		) {
			return acc
		}

		return [...acc, opt.name]
	}, [])
}

try {
	const optionsFromConfig = Object.keys(config)
	const optionsThatMustExists = await getPrettierOptions()
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
