import { getSupportInfo } from 'prettier'

export const getPrettierOptions = async () => {
	const { options } = await getSupportInfo({ showDeprecated: true })
	const excludeByName = ['parser', 'plugins', 'pluginSearchDirs']
	const excludeByCategory = ['Special', 'HTML']

	return options.reduce((acc, opt) => {
		if (
			!excludeByName.includes(opt.name) &&
			!excludeByCategory.includes(opt.category)
		) {
			acc.set(opt.name, opt)
		}

		return acc
	}, new Map())
}
