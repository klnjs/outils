import Ajv from 'ajv'
import { printReceived, printMatcherError } from './print'

export const toMatchSchema = (subject, schema, options) => {
	if (!schema) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived('received')} value must be instance of JSON Schema\n`
				)
		}
	}

	const ajv = new Ajv(options)
	const validate = ajv.compile(schema)
	const pass = validate(subject)
	const message = pass
		? undefined
		: () => {
				const error = validate.errors[0]
				const expected = printReceived(`${error.instancePath}`)

				return `${expected}: ${error.message}`
			}

	return {
		pass,
		message
	}
}
