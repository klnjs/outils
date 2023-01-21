export const logRules = (category, rules = []) => {
	if (rules.length > 0) {
		console.group()
		console.log(category, rules)
		console.groupEnd()
	}
}

export const getNonIntersection = (a, b) => a.filter((v) => !b.includes(v))

export const getRulesFromPlugin = (
	plugin,
	{
		prefix,
		exclude,
		excludeDeprecated = true,
		excludeTypes = ['layout']
	} = {}
) => {
	const rules = !isIterable(plugin.rules)
		? plugin.rules
		: Object.fromEntries(plugin.rules)

	return Object.entries(rules).reduce((acc, [name, rule]) => {
		// Filter out deprecated and layout rules
		if (
			(exclude && exclude(rule)) ||
			(excludeTypes && excludeTypes.includes(rule.meta.type)) ||
			(excludeDeprecated && rule.meta.deprecated)
		) {
			return acc
		}

		return [...acc, { name: prefix ? `${prefix}/${name}` : name, ...rule }]
	}, [])
}

export const isIterable = (obj) => {
	if (!obj) {
		return false
	}

	return typeof obj[Symbol.iterator] === 'function'
}
