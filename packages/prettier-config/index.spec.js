import { test, expect } from 'bun:test'
import prettier from 'prettier'
import { getPrettierOptions } from './src/internals/getPrettierOptions'
import config from './index'

const options = await getPrettierOptions()

test('Config should load', () => {
	expect(() =>
		prettier.format('', { parser: 'espree', ...config })
	).not.toThrow()
})

test('Config should include code options', () =>
	options.forEach((option, name) => {
		if (!option.deprecated) {
			expect(config).toHaveProperty(name)
		}
	}))

test('Config should exclude unknown and deprecated options', () =>
	Object.keys(config).forEach((name) => {
		expect(options.get(name)).toBeDefined()
		expect(options.get(name)).not.toHaveProperty(`deprecated`)
	}))
