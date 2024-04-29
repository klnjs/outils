# @klnjs/eslint-config

The `@klnjs/eslint-config` package provides a collection of shareable [ESLint] configurations for JavaScript / TypeScript projects that can easily be reused across multiple projects.

These configurations aim to provide consistency, code quality, and ensure coding standards are enforced throughout the development process, resulting in cleaner, more maintainable code.

## Installation

You can install the `@klnjs/eslint-config` package using your preferred package manager

```bash
npm install @klnjs/eslint-config --save-dev
```

## How to Use

To use a specific tsconfig from `@klnjs/eslint-config`, simply add it in your project's `eslint.config.js` file.

```js
import { core } from '../eslint-config/index.js'

export default [core]
```

If you're using the TypeScript configuration, it will turn off many of ESLint's built-in rules that TypeScript checks more thoroughly. Always make sure the TypeScript config comes after the core config or any other base ESLint configs.

```js
import { core, typescript } from '../eslint-config/index.js'

export default [core, typescript]
```

These configurations only support file types: `js`, `jsx`, `ts`, and `tsx`. If you want to include other file types such as `cjs` or `mjs`, you'll need to add them yourself by adjusting the 'files' property in the configurations.

They also don't assume specific environments, so they don't set up `languageOptions.globals`. In most cases, you'll likely need to configure some properties yourself.

```js
import { serviceworker, browser } from 'globals'
import { core } from '../eslint-config/index.js'

export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		...core,
		languageOptions: {
			...core.languageOptions,
			globals: {
				...serviceworker,
				...browser
			}
		}
	}
]
```

[eslint]: https://github.com/eslint/eslint
