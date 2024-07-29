import { test, expect } from 'bun:test'
import prettier from 'prettier'
import core from '../../src/core.js'

const { options } = await prettier.getSupportInfo({ showDeprecated: true })
const excludeByName = ['parser', 'plugins', 'pluginSearchDirs']
const excludeByCategory = ['Special', 'HTML']
const optionsToCheck = options.reduce((acc, opt) => {
	if (
		!excludeByName.includes(opt.name) &&
		!excludeByCategory.includes(opt.category)
	) {
		acc.set(opt.name, opt)
	}

	return acc
}, new Map())

test('Config should load', () => {
	expect(() =>
		prettier.format('', { parser: 'espree', ...core })
	).not.toThrow()
})

test('Config should include code options', () =>
	optionsToCheck.forEach((option, name) => {
		if (!option.deprecated) {
			expect(core).toHaveProperty(name)
		}
	}))

test('Config should exclude unknown and deprecated options', () =>
	Object.keys(core).forEach((name) => {
		expect(optionsToCheck.get(name)).toBeDefined()
		expect(optionsToCheck.get(name)).not.toHaveProperty('deprecated')
	}))
