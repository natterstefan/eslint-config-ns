# eslint-config-ns

[![npm version](https://badge.fury.io/js/eslint-config-ns.svg)](https://badge.fury.io/js/eslint-config-ns)
[![GitHub license](https://img.shields.io/github/license/natterstefan/eslint-config-ns.svg)](https://github.com/natterstefan/eslint-config-ns/blob/master/LICENCE)

In August 2018, I published an article with the title
["How to create your own shared esLint, prettier and stylelint configuration"](https://nttr.st/2MOAAGc)
on [Medium](http://nttr.st/1REplMW). One of the results of the article, is this
shareable eslint-config (and the one for [stylelint](https://nttr.st/2OUpTQP)).

It lints your javascript projects with ease, based on the popular [javascript
code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Features

- based on the the popular [javascript
  code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- easy switchable to their smaller set of rules [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- with [react](https://reactjs.org/), [react-hooks](https://reactjs.org/docs/hooks-intro.html)
  and [jest](https://jestjs.io/) support

## Installation

The default export contains all default Airbnb ESLint rules, including
ECMAScript 6+, and the ones listed below. It requires some peerDependencies as
well.

Install the package with

```sh
npm install eslint-config-ns --save-dev

# or
yarn add eslint-config-ns -D
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

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

Now add the config to either your `package.json`:

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

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- react and/or node environment
- jest as the selected test-suite
- browser and/or node environment
- parser: babel (used babel-eslint parser)

Even though I made some assumptions, [you can easily overwrite, extend and unset
rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).

## LICENCE

[MIT](LICENCE)

## Maintainers

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
