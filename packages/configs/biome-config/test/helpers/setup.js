import { expect } from 'bun:test'
import { toMatchSchema } from './matchers'

expect.extend({ toMatchSchema })
