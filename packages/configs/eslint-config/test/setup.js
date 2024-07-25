import { expect } from 'bun:test'
import toBeDeprecatedRule from './matchers/toBeDeprecatedRule'
import toHaveEntry from './matchers/toHaveEntry'

expect.extend({ toBeDeprecatedRule, toHaveEntry })
