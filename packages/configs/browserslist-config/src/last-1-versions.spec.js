import { test, expect } from 'bun:test'
import browserslist from 'browserslist'
import last1versions from './last-1-versions'

test('Config should load', () => {
	expect(() => browserslist(last1versions)).not.toThrow()
})
