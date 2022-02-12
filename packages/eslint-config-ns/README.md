# eslint-config-ns

[![npm version](https://badge.fury.io/js/eslint-config-ns.svg)](https://badge.fury.io/js/eslint-config-ns)
[![GitHub license](https://img.shields.io/github/license/natterstefan/eslint-config-ns.svg)](https://github.com/natterstefan/eslint-config-ns/blob/main/LICENSE)

`eslint-config-ns` lints your JavaScript projects with ease, and is mainly based
on the popular
[JavaScript code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
with further customizations derived on my own experience.

## Contents

- [eslint-config-ns](#eslint-config-ns)
  - [Contents](#contents)
  - [Related Configs](#related-configs)
  - [Background Story](#background-story)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Prettier Config](#prettier-config)
  - [Assumptions](#assumptions)
  - [LICENSE](#license)
  - [Maintainers](#maintainers)

## Related Configs

- JavaScript:
  [eslint-config-ns-base](https://www.npmjs.com/package/eslint-config-ns-base)
- JavaScript React:
  [eslint-config-ns](https://www.npmjs.com/package/eslint-config-ns)
- TypeScript:
  [eslint-config-ns-ts-base](https://www.npmjs.com/package/eslint-config-ns-ts-base)
- TypeScript React:
  [eslint-config-ns-ts](https://www.npmjs.com/package/eslint-config-ns-ts)

## Background Story

In August 2018, I published an article with the title
["How to create your own shared esLint, prettier and stylelint configuration"](https://nttr.st/2MOAAGc)
on [Medium](http://nttr.st/1REplMW). One of the results of the article, is this
shareable eslint-config (and one for [stylelint](https://nttr.st/2OUpTQP)).

## Features

The config is built upon Airbnb's ESLint rules with additional rules and
optimizations (see [assumptions](#assumptions)).

- based on the the popular
  [JavaScript code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- with [React](https://reactjs.org/),
  [react-hooks](https://reactjs.org/docs/hooks-intro.html),
  [Jest](https://jestjs.io/), and
  [Prettier](https://prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
  support

## Installation

Install the package with

```sh
npm install eslint-config-ns --save-dev

# or
yarn add eslint-config-ns -D
```

`eslint-config-ns` requires you to take care of it's `peerDependencies`. Install
the correct version of each `peerDependencies` package, which are listed with
the following command:

```sh
npm info "eslint-config-ns@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-ns

# or
yarn add eslint-config-ns -D --peer
```

## Usage

Now add `eslint-config-ns` to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-ns"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-ns"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-ns',
}
```

### Prettier Config

This is how you can use or extend the `eslint-config-ns` prettier config in your
app:

```js
// prettier.config.js
module.exports = require('eslint-config-ns/prettier.config')
```

## Assumptions

`eslint-config-ns` comes with some fundamental assumptions:

- React and/or Node.js environment
- Browser and/or Node.js environment
- Jest as the selected test-suite
- it uses the `@babel/eslint-parser` parser

Even though I made some assumptions,
[you can easily overwrite, extend and unset rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).

## LICENSE

[MIT](LICENSE)

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
