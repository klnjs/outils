import { test, expect } from "bun:test";
import {
	createESLint,
	isDeprecatedRule,
	getRuleFromEslint,
	getRulesFromConfig,
	getRulesFromPlugins,
} from "../helpers/eslint.js";
import svelte from "../../src/svelte.js";

const rulesFromConfig = getRulesFromConfig(svelte);
const rulesFromPlugin = getRulesFromPlugins(svelte.plugins);

test("Config should load", () => {
	expect(() => createESLint(svelte).lintText("")).not.toThrow();
});

test("Config should exclude unknown rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		if (name.startsWith("svelte/")) {
			expect(rulesFromPlugin).toHaveEntry(name);
		}
	}));

test("Config should exclude layout rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		if (name.startsWith("svelte/")) {
			expect(rulesFromPlugin.get(name)).not.toBeLayoutRule(name);
		}
	}));

test("Config should exclude deprecated rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		if (name.startsWith("svelte/")) {
			expect(rulesFromPlugin.get(name)).not.toBeDeprecatedRule(name);
		}
	}));

test("Config should include all svelte rules", () =>
	rulesFromPlugin.forEach((_rule, name) => {
		expect(rulesFromConfig).toHaveEntry(name);
	}));

test("Config should include obsolete core rules and turn them off", () =>
	[
		...Object.entries(rulesFromPlugin).reduce((acc, [_name, rule]) => {
			if (!rule.meta.docs.extensionRule) {
				return acc;
			}

			const baseName = rule.meta.docs.extensionRule;
			const baseRule = getRuleFromEslint(baseName);

			if (isDeprecatedRule(baseRule)) {
				return acc;
			}

			acc.push(baseName);

			return acc;
		}, []),
	].forEach((name) => {
		expect(rulesFromConfig).toHaveEntry(name, "off");
	}));
