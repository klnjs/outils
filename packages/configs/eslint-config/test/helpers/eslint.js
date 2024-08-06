import { ESLint } from "eslint";
import { builtinRules } from "eslint/use-at-your-own-risk";

export const createESLint = (config) =>
	new ESLint({
		overrideConfigFile: true,
		overrideConfig: config,
	});

export const isLayoutRule = (rule) => rule.meta.type === "layout";

export const isDeprecatedRule = (rule) => rule.meta.deprecated;

export const isExtensionRule = (rule) => {
	// Svelte extension rule
	if (rule.meta.docs.extensionRule) {
		return true;
	}

	// Typescript eslint extension rule
	if (rule.meta.docs.extendsBaseRule) {
		return true;
	}

	return false;
};

export const getRulesFromPlugins = (plugins) =>
	new Map(
		Object.entries(plugins).reduce(
			(acc, [prefix, plugin]) =>
				acc.concat(
					Object.entries(plugin.rules)
						.filter(([_name, rule]) => !isDeprecatedRule(rule))
						.map(([name, rule]) => [`${prefix}/${name}`, rule]),
				),
			[],
		),
	);

export const getRuleFromESlint = (name) => getRulesFromESLint().get(name);

export const getRulesFromESLint = () =>
	new Map([...builtinRules].filter(([_name, rule]) => !isDeprecatedRule(rule)));

export const getRulesFromConfig = (config) =>
	new Map(Object.entries(config.rules));
