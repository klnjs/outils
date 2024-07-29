import { expect } from 'bun:test'
import toMatchSchema from './matchers/toMatchSchema'

expect.extend({ toMatchSchema })
