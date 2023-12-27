import { builtinRules } from 'eslint/use-at-your-own-risk'

export const getESLintCoreRule = (name) => builtinRules.get(name)
