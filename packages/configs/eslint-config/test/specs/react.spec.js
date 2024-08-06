import { test, expect } from "bun:test";
import {
	createESLint,
	getRulesFromConfig,
	getRulesFromPlugins,
} from "../helpers/eslint.js";
import react from "../../src/react.js";

const rulesFromConfig = getRulesFromConfig(react);
const rulesFromPlugin = getRulesFromPlugins(react.plugins);

test("Config should load", () => {
	expect(() => createESLint(react).lintText("")).not.toThrow();
});

test("Config should exclude unknown rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromPlugin).toHaveEntry(name);
	}));

test("Config should exclude layout rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromPlugin.get(name)).not.toBeLayoutRule(name);
	}));

test("Config should exclude deprecated rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromPlugin.get(name)).not.toBeDeprecatedRule(name);
	}));

test("Config should include all react rules", () =>
	rulesFromPlugin.forEach((_rule, name) =>
		expect(rulesFromConfig).toHaveEntry(name),
	));
