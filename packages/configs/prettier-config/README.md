# @klnjs/prettier-config

Provides a collection of shareable [Prettier] configurations for JavaScript / TypeScript projects that can easily be reused across projects.

These configurations aim to enforce consistent code formatting, improve code readability, and streamline the development process by eliminating the need for manual configuration.

## Installation

You can install the `@klnjs/prettier-config` package using your preferred package manager

```bash
npm install @klnjs/prettier-config --save-dev
```

## How to Use

You can use it by creating a config file in any of the supported formats eg. `.prettierrc`, in the root of your project and extending this configuration:

```js
'@klnjs/prettier-config/core'
```

You can use it by referencing it in your `package.json` file:

```json
{
	"prettier": "@klnjs/prettier-config/core"
}
```

None of the above methods allow for extending the configuration. To overwrite specific properties, import the configuration into a `prettier.config.js` file, in the root of your project, and export the modifications:

```js
import { core } from '@klnjs/prettier-config'

export default {
	...core,
	semi: true
}
```

[prettier]: https://github.com/prettier/prettier
