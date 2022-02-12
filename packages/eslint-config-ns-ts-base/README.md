# eslint-config-ns-ts-base

[![npm version](https://badge.fury.io/js/eslint-config-ns-ts-base.svg)](https://badge.fury.io/js/eslint-config-ns-ts)
[![GitHub license](https://img.shields.io/github/license/natterstefan/eslint-config-ns-ts.svg)](https://github.com/natterstefan/eslint-config-ns-ts/blob/main/LICENCE)

Lint your TypeScript projects with ease. `eslint-config-ns-ts-base` extends my
existing JavaScript config [eslint-config-ns][1].

## Contents

* [eslint-config-ns-ts-base](#eslint-config-ns-ts-base)
  * [Contents](#contents)
  * [Related Configs](#related-configs)
  * [Features](#features)
  * [Installation](#installation)
  * [Usage](#usage)
    * [Prettier Config](#prettier-config)
  * [Assumptions](#assumptions)
  * [LICENCE](#licence)
  * [Maintainers](#maintainers)

## Related Configs

- JavaScript:
  [eslint-config-ns-base](https://www.npmjs.com/package/eslint-config-ns-base)
- JavaScript React:
  [eslint-config-ns](https://www.npmjs.com/package/eslint-config-ns)
- TypeScript:
  [eslint-config-ns-ts-base](https://www.npmjs.com/package/eslint-config-ns-ts-base)
- TypeScript React:
  [eslint-config-ns-ts](https://www.npmjs.com/package/eslint-config-ns-ts)

## Features

- based on the the popular
  [javascript code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- with [react](https://reactjs.org/),
  [react-hooks](https://reactjs.org/docs/hooks-intro.html),
  [jest](https://jestjs.io/), and
  [prettier](https://prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
  support
- with TypeScript support
  - e.g. with support for `baseUrl` and `paths`

The config is built upon Airbnb's ESLint rules with additional rules and
optimizations (see [assumptions](#assumptions)).

## Installation

Install the package with

```sh
npm install eslint-config-ns-ts-base --save-dev

# or
yarn add eslint-config-ns-ts-base -D
```

`eslint-config-ns-ts-base` requires you to take care of it's `peerDependencies`.
Install the correct version of each `peerDependencies` package, which are listed
with the following command:

```sh
npm info "eslint-config-ns-ts-base@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-ns-ts-base

# or
yarn add eslint-config-ns-ts-base -D --peer
```

## Usage

Now add `eslint-config-ns-ts-base` to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-ns-ts-base"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-ns-ts-base"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-ns-ts-base',
}
```

### Prettier Config

This is how you can use or extend the `eslint-config-ns-ts-base` prettier config
in your app:

```js
// prettier.config.js
module.exports = require('eslint-config-ns-ts-base/prettier.config')
```

## Assumptions

This ESLint configuration comes with the same fundamental assumptions, as
[eslint-config-ns](https://github.com/natterstefan/eslint-config-ns#assumptions).

Even though I made some assumptions,
[you can easily overwrite, extend and unset rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).

## LICENCE

[MIT](LICENCE)

## Maintainers

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/natterstefan">
          <img width="150" height="150" src="https://github.com/natterstefan.png?v=3&s=150">
          </br>
          Stefan Natter
        </a>
        <div>
          <a href="https://twitter.com/natterstefan">
            <img src="https://img.shields.io/twitter/follow/natterstefan.svg?style=social&label=Follow" />
          </a>
        </div>
      </td>
    </tr>
  <tbody>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

[1]: https://github.com/natterstefan/eslint-config-ns
