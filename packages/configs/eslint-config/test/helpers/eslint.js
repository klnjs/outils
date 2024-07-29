import { ESLint } from 'eslint'
import { builtinRules } from 'eslint/use-at-your-own-risk'

export const createESLint = (config) =>
	new ESLint({
		overrideConfigFile: true,
		overrideConfig: config
	})

export const getRulesFromPlugins = (plugins) =>
	new Map(
		Object.entries(plugins).reduce(
			(acc, [prefix, plugin]) =>
				acc.concat(
					Object.entries(plugin.rules).map(([name, rule]) => [
						`${prefix}/${name}`,
						rule
					])
				),
			[]
		)
	)

export const getRulesFromESLint = () => builtinRules

export const getRulesFromConfig = (config) =>
	new Map(Object.entries(config.rules))
