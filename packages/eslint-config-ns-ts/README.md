# eslint-config-ns-ts

[![npm version](https://badge.fury.io/js/eslint-config-ns-ts.svg)](https://badge.fury.io/js/eslint-config-ns-ts)
[![GitHub license](https://img.shields.io/github/license/natterstefan/eslint-config-ns-ts.svg)](https://github.com/natterstefan/eslint-config-ns-ts/blob/master/LICENCE)

Lint your TypeScript projects with ease. `eslint-config-ns-ts` extends my
existing JavaScript config [eslint-config-ns][1].

## Features

- based on the the popular [javascript
  code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- with [react](https://reactjs.org/), [react-hooks](https://reactjs.org/docs/hooks-intro.html), [jest](https://jestjs.io/), and [prettier](https://prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier) support
- with TypeScript support
  - e.g. with support for `baseUrl` and `paths`

The config is built upon Airbnb's ESLint rules with additional
rules and optimizations (see [assumptions](#assumptions)).

## Installation

Install the package with

```sh
npm install eslint-config-ns-ts --save-dev

# or
yarn add eslint-config-ns-ts -D
```

`eslint-config-ns-ts` requires you to take care of it's `peerDependencies`.
Install the correct version of each `peerDependencies` package, which are listed
with the following command:

```sh
npm info "eslint-config-ns-ts@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-ns-ts

# or
yarn add eslint-config-ns-ts -D --peer
```

## Usage

Now add `eslint-config-ns-ts` to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-ns-ts"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-ns-ts"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-ns-ts',
}
```

### Prettier Config

This is how you can use or extend the `eslint-config-ns-ts` prettier config in
your app:

```js
// prettier.config.js
module.exports = require('eslint-config-ns-ts/prettier.config')
```

## Assumptions

This ESLint configuration comes with the same fundamental assumptions, as
[eslint-config-ns](https://github.com/natterstefan/eslint-config-ns#assumptions).

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
