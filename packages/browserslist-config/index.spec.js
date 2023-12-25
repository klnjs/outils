import { test, expect } from 'bun:test'
import browserslist from 'browserslist'
import config from './index'

test('Should load browserslist config', () => {
	expect(() => browserslist(config)).not.toThrow()
})
