import { test, expect } from "bun:test";
import {
	createESLint,
	getRulesFromESLint,
	getRulesFromConfig,
} from "../helpers/eslint.js";
import core from "../../src/core.js";

const rulesFromESLint = getRulesFromESLint();
const rulesFromConfig = getRulesFromConfig(core);

test("Config should load", () => {
	expect(() => createESLint(core).lintText("")).not.toThrow();
});

test("Config should exclude unknown rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromESLint).toHaveEntry(name);
	}));

test("Config should exclude layout rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromESLint.get(name)).not.toBeLayoutRule(name);
	}));

test("Config should exclude deprecated rules", () =>
	rulesFromConfig.forEach((_value, name) => {
		expect(rulesFromESLint.get(name)).not.toBeDeprecatedRule(name);
	}));

test("Config should include all core rules", () =>
	rulesFromESLint.forEach((_rule, name) =>
		expect(rulesFromConfig).toHaveEntry(name),
	));
