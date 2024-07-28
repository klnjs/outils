import { test, expect } from 'bun:test'
import { Biome, Distribution } from '@biomejs/js-api'
import core from './core.json'
import { createStrictBiomeSchema } from '../test/helpers/schema'

test('Config should load', async () => {
	const biome = await Biome.create({
		distribution: Distribution.NODE
	})

	expect(() => biome.applyConfiguration(core)).not.toThrow()
})

test('Config should include all linter rules', async () => {
	const schema = await import(core.$schema)
	const strict = createStrictBiomeSchema(schema)
	const formats = ['uint8', 'uint16', 'uint64']

	expect(core).toMatchSchema(strict, {
		formats: formats.reduce((acc, format) => {
			acc[format] = {
				type: 'number',
				validate: (x) => x >= 0
			}

			return acc
		}, {})
	})
})
