export const log = (category, rules = []) => {
	if (rules.length > 0) {
		console.group()
		console.log(category, rules)
		console.groupEnd()
	}
}

export const xor = (a, b) => a.filter((v) => !b.includes(v))
