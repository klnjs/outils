import { isLayoutRule, isDeprecatedRule } from "./eslint";
import { printExpected, printReceived, printMatcherError } from "./print";

export const toBeLayoutRule = (rule, name) => {
	if (!rule) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived("received")} value must be instance of ESLint rule\n`,
				),
		};
	}

	const pass = isLayoutRule(rule);
	const message = () =>
		`Expected ${printExpected(name)} ${pass ? "to not be" : "to be"} of type layout\n`;

	return { pass, message };
};

export const toBeDeprecatedRule = (rule, name) => {
	if (!rule) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived("received")} value must be instance of ESLint rule\n`,
				),
		};
	}

	const pass = isDeprecatedRule(rule);
	const message = () =>
		`Expected ${printExpected(name)} ${pass ? "to not be" : "to be"} deprecated\n`;

	return { pass, message };
};

export const toHaveEntry = (...args) => {
	const [map, key, value] = args;

	if (!(map instanceof Map)) {
		return {
			pass: false,
			message: () =>
				printMatcherError(
					`${printReceived("received")} value must be instance of Map\n`,
				),
		};
	}

	const exists = map.has(key);
	const check = args.length === 3;
	const pass = exists && (!check || map.get(key) === value);

	const one = `Expected key: ${pass && !check ? "not " : ""}${printExpected(key)}\n\n`;
	const two = check
		? `Expected value: ${pass ? "not " : ""}${printExpected(value)}\n\n`
		: "";

	const three = exists
		? `Received value: ${printReceived(map.get(key))}\n`
		: "Unable to find entry\n";

	return {
		pass,
		message: () => `${one}${two}${three}`,
	};
};
