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

## Assumptions

- esLint based on https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
  - Alternative: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
- React environment (but can be used on a eg. node-server environment as well)
- Usage of jest as the test-suite
- `env`: Browser and Node environment
- `globals`: added some related jest variables
- `parser`: usage of babel (used babel-eslint parser)

Note: you can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`.
