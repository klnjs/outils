import { test, expect } from "bun:test";
import {
	createESLint,
	isDeprecatedRule,
	getRuleFromEslint,
	getRulesFromConfig,
	getRulesFromPlugins,
} from "../helpers/eslint.js";
import typescript from "../../src/typescript.js";

const rulesFromConfig = getRulesFromConfig(typescript);
const rulesFromPlugin = getRulesFromPlugins(typescript.plugins);

test("Config should load", () => {
	expect(() => createESLint(typescript).lintText("")).not.toThrow();
});

test("Config should exclude unknown rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		if (name.startsWith("@typescript-eslint/")) {
			expect(rulesFromPlugin).toHaveEntry(name);
		}
	}));

test("Config should exclude layout rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		if (name.startsWith("@typescript-eslint/")) {
			expect(rulesFromPlugin.get(name)).not.toBeLayoutRule(name);
		}
	}));

test("Config should exclude deprecated rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		if (name.startsWith("@typescript-eslint/")) {
			expect(rulesFromPlugin.get(name)).not.toBeDeprecatedRule(name);
		}
	}));

test("Config should include all typescript rules", () =>
	rulesFromPlugin.forEach((_rule, name) =>
		expect(rulesFromConfig).toHaveEntry(name),
	));

test("Config should include obsolete core rules and turn them off", () =>
	[
		"constructor-super",
		"getter-return",
		"no-const-assign",
		"no-dupe-args",
		"no-dupe-class-members",
		"no-dupe-keys",
		"no-func-assign",
		"no-import-assign",
		"no-new-symbol",
		"no-obj-calls",
		"no-redeclare",
		"no-setter-return",
		"no-this-before-super",
		"no-undef",
		"no-unreachable",
		"no-unsafe-negation",
		"valid-typeof",
		...Object.entries(rulesFromPlugin).reduce((acc, [name, rule]) => {
			if (!rule.meta.docs.extendsBaseRule) {
				return acc;
			}

			const base = rule.meta.docs.extendsBaseRule;
			const baseName = base === true ? name : base;
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
