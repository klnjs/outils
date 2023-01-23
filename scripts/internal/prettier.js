export const getOptions = (
	prettier,
	{
		exclude,
		excludeDeprecated = true,
		excludeCategories = ['Special', 'HTML']
	} = {}
) => {
	const { options } = prettier.getSupportInfo()

	return options.reduce((acc, opt) => {
		// Filter out deprecated and categories rules
		if (
			(exclude && exclude(opt)) ||
			(excludeCategories && excludeCategories.includes(opt.category)) ||
			(excludeDeprecated && opt.deprecated)
		) {
			return acc
		}

		return [...acc, opt.name]
	}, [])
}
