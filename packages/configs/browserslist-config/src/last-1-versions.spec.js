import { test, expect } from 'bun:test'
import browserslist from 'browserslist'
import last1versions from './last-1-versions'

test('Should load last-1-versions config', () => {
	expect(() => browserslist(last1versions)).not.toThrow()
})
