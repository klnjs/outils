import { expect } from 'bun:test'
import { toBeDeprecatedRule, toHaveEntry } from './matchers'

expect.extend({ toBeDeprecatedRule, toHaveEntry })
