import { test, expect } from 'bun:test'
import browserslist from 'browserslist'
import last2versions from './last-2-versions'

test('Config should load', () => {
	expect(() => browserslist(last2versions)).not.toThrow()
})
