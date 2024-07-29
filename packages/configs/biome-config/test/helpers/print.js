export const printExpected = (value) => `\x1b[32m${value}\x1b[0m`

export const printReceived = (value) => `\x1b[31m${value}\x1b[0m`

export const printMatcherError = (message) =>
	`\x1b[1mMatcher error:\x1b[22m ${message}`
