# @klnjs/biome-config

Provides a collection of shareable [biome] configurations for JavaScript / TypeScript projects that can easily be reused across projects.

These configurations aim to enforce consistent code formatting, improve code readability, and streamline the development process by eliminating the need for manual configuration.

## Installation

You can install the `@klnjs/biome-config` package using your preferred package manager

```bash
npm install @klnjs/biome-config --save-dev
```

## How to Use

You can use it by creating a `biome.json` config file, in the root of your project and extending this configuration:

```js
{
  "extends": ["@klnjs/biome-config/core"]
}
```

[biome]: https://github.com/biomejs/biome
