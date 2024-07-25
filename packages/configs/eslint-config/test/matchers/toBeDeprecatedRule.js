import {
	printExpected,
	printReceived,
	printMatcherError
} from '../helpers/print'

export default function toBeDeprecatedRule(rule, name) {
	if (!rule) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived('received')} value must be instance of ESLint rule\n`
				)
		}
	}

	const pass = rule.meta.type === 'layout' || rule.meta.deprecated === true
	const message = () =>
		`Expected ${printExpected(name)} ${pass ? 'to not be' : 'to be'} deprecated\n`

	return { pass, message }
}
