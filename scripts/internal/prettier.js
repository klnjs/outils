export const getOptions = (
	prettier,
	{
		exclude,
		excludeOptions = ['parser', 'plugins', 'pluginSearchDirs'],
		excludeDeprecated = true,
		excludeCategories = ['Special', 'HTML']
	} = {}
) => {
	const { options } = prettier.getSupportInfo()

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
