import { test, expect } from 'bun:test'
import browserslist from 'browserslist'
import last2versions from '../../src/last-2-versions.js'

test('Config should load', () => {
	expect(() => browserslist(last2versions)).not.toThrow()
})
