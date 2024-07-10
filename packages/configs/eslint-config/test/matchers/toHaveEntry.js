import { printExpected, printReceived, printMatcherError } from '../helpers'

export function toHaveEntry(map, key, value) {
	if (!(map instanceof Map)) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived('received')} value must be instance of Map\n`
				)
		}
	}

	const exists = map.has(key)
	const check = arguments.length === 3
	const pass = exists && (!check || map.get(key) === value)

	const one = `Expected key: ${pass && !check ? 'not ' : ''}${printExpected(key)}\n\n`
	const two = check
		? `Expected value: ${pass ? 'not ' : ''}${printExpected(value)}\n\n`
		: ''

	const three = exists
		? `Received value: ${printReceived(map.get(key))}\n`
		: 'Unable to find entry\n'

	return {
		pass,
		message: () => `${one}${two}${three}`
	}
}
