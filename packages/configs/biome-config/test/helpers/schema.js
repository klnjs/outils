export const createStrictBiomeSchema = (schema) => {
	const exclude = ['all', 'recommended', 'nursery']
	const definitions = [
		'Rules',
		...Object.keys(schema.definitions.Rules.properties)
			.filter((property) => !exclude.includes(property))
			.map(
				(property) =>
					property.charAt(0).toUpperCase() + property.slice(1)
			)
	]

	definitions.forEach((definition) => {
		schema.definitions[definition] = toStrictDefinition(
			schema.definitions[definition],
			exclude
		)
	})

	return schema
}

const toStrictDefinition = (definition, exclude = []) => {
	const properties = Object.entries(definition.properties).reduce(
		(acc, [key, value]) => {
			if (!exclude.includes(key)) {
				acc[key] = value
			}

			return acc
		},
		{}
	)

	definition.required = Object.keys(properties)
	definition.properties = properties
	definition.additionalProperties = false

	return definition
}
