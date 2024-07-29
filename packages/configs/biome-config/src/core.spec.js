import { test, expect } from 'bun:test'
import { Biome, Distribution } from '@biomejs/js-api'
import schema from '@biomejs/biome/configuration_schema.json'
import { createStrictBiomeSchema } from '../test/helpers/schema'
import core from './core.json'

test('Config should load', async () => {
	const biome = await Biome.create({
		distribution: Distribution.NODE
	})

	expect(() => biome.applyConfiguration(core)).not.toThrow()
})

test('Config should include all linter rules', async () => {
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
