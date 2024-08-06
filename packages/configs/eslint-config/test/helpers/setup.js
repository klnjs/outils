import { expect } from "bun:test";
import { toBeDeprecatedRule, toBeLayoutRule, toHaveEntry } from "./matchers";

expect.extend({ toBeLayoutRule, toBeDeprecatedRule, toHaveEntry });
