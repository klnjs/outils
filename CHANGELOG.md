### 5.1.1
- Added field arg to `publishToSlack` method

### 5.1.0
- Added `unpublish` command

### 5.0.0
- Change the cli to be more simple

### 4.0.0
- Added command `release` to the CLI which posts to slack
- Added argument `--channel` as a required to slack posting 
- Removed `-d` as an alias for `--dry`

### 3.1.0
- Added new eslint rule `no-loss-of-precision` set to `error`
- Added new eslint rule `no-nonoctal-decimal-escape` set to `error`
- Added new eslint rule `no-unsafe-optional-chaining` set to `error`
- Added new eslint rule `no-useless-backreference` set to `error`

### 3.0.7
- Fixed slack publishing not correctly display @ signs

### 3.0.6
- Fixed a formatting bug when trying to post a bold link

### 3.0.5
- Fixed a formatting bug with repository when run in pipeline

### 3.0.4
- Fixed a formatting bug in message when published changelog

### 3.0.3
- Changed publish script to fetch author from git
- Changed publish message to include git repository

### 3.0.2
- Added `--dry` option to publish commands
- Added `--author` option to publish changelog command
- Added version and changelog validation to publish npm command
- Added ESLint validation to all packages
- Removed the deprecated `only` from pipeline and replace with `rules`

### 3.0.1
- Fixed dependencies being listed incorrectly in `repository-tools`

### 3.0.0
- Added new package `repository-tools` with build and publish scripts
- Added gitlab pipeline

### 2.0.3
- Updated to `"prettier": "^2.4.1"`
- Replaced deprecated prettier rule `jsxBracketSameLine` with `bracketSameLine`

### 2.0.2
- Changed `import/extensions` to `off`

### 2.0.1
- Changed `quote-props` to `as-needed`

### 2.0.0
- Removed lots of eslint rules that conflict with prettier

### 1.1.1
- Fixed missing `,` in `eslint-config`

### 1.1.0
- Changed `import/order` to `builtin, external, internal, parent, sibling, index`
- Changed `react/jsx-indent` to `error`, `tab`, `indentLogicalExpressions`
- Changed `react/jsx-indent-props` to `error`, `tab`
- Changed `react/destructuring-assignment` to `off`
- Changed `no-confusing-arrow` to `off`
- Changed `no-extra-parens` to `error`, `all`, `ignoreJSX`

### 1.0.5
- Added package `@hs/browserslist-config`

### 1.0.4
- Disabled `import/prefer-default-export` rule

### 1.0.3
- Disabled `consistent-return` rule

### 1.0.2
- Fixed repository `directory` field being incorrectly named `direction`

### 1.0.1
- Added glob `**/scripts/*` to `import/no-extraneous-dependencies` rule

### 1.0.0
- Setup environment
