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

- React environment (but can be used on a eg. node-server environment as well)
- `jest` us used as the test-suite
- `env`: Browser and/or node environment
- `globals`: added some related jest variables
- `parser`: babel-eslint

Note: you can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`.
