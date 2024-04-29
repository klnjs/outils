# @klnjs/browserslist-config

The `@klnjs/browserslist-config` packages provides multiple shareable [Browserslist] configurations that can easily be reused across multiple projects.

These configurations are tailored for the most common project setups using modern JavaScript, ensuring compatibility and optimizing build processes accordingly.

## Installation

You can install the `@klnjs/browserslist-config` package using your preferred package manager

```bash
npm install @klnjs/browserslist-config --save-dev
```

## How to Use

You can use it by creating a config file `.browserslistrc`, in the root of your project and extending this configuration:

```yaml
extends @klnjs/browserslist-config/core
```

You can use it by referencing it in your `package.json` file:

```json
{
	"browserslist": ["extends @klnjs/browserslist-config/last-2-versions"]
}
```

[browserslist]: https://github.com/browserslist/browserslist
