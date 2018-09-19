# eslint-config-ns

## Documentation Shareable Configs

- [Eslint shareable config](https://eslint.org/docs/developer-guide/shareable-configs)

## Installation

Install the package with

`npm install eslint-config-ns --save-dev`

or

`yarn add eslint-config-ns -D`

## eslint Setup

Now add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-ns"
  }
}
```

or to the `.eslintrc` or `.eslintrc.js`:

```json
{
  "extends": "eslint-config-ns"
}
```

## ESLint and Prettier

- This ESLint configuration can work together with prettier, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)

## Assumptions

- the ESLint rules are based on the great work of [airbnb's eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - they also have a smaller more compact one: [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- React environment (but can be used on a eg. node-server environment as well)
- Usage of jest as the test-suite
- `env`: Browser and Node environment
- `globals`: added some related jest variables
- `parser`: usage of babel (used babel-eslint parser)

Note: you can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`.

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