# @klnjs/typescript-config

The `@klnjs/typescript-config` package provides a collection of shareable [TypeScript] configurations (tsconfigs) that can easily be reused across multiple projects.

These configurations are tailored for different types of projects, allowing you to easily set up your [TypeScript] environment without the need to manually configure every aspect.

## Installation

You can install the `@klnjs/typescript-config` package using your preferred package manager

```bash
npm install @klnjs/typescript-config --save-dev
```

## How to Use

To use a specific tsconfig from `@klnjs/typescript-config`, simply extend it in your project's `tsconfig.json` file. From here you can add or override properties, to create a tsconfig that is suitable for your project.

```json
{
	"$schema": "https://json.schemastore.org/tsconfig",
	"extends": "@klnjs/typescript-config/core",
	"compilerOptions": {
		"strict": true
	}
}
```

[typescript]: https://github.com/microsoft/TypeScript
