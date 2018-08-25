# eslint-config-ns

## Documentation Shareable Configs

- [Eslint shareable config](https://eslint.org/docs/developer-guide/shareable-configs)

## eslint Installation

Add the following to your `package.json`

```bash
git+https://github.com/natterstefan/eslint-config-ns.git#master
```

then run

```js
$ npm install // or yarn
```

Now add the config to either the `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-ns"
  }
}
```

or to the `.eslintrc`:

```json
{
  "extends": "eslint-config-ns"
}
```

## stylelint Installation

Add the following to your `styelint.config.js` config:

```js
module.exports = {
  extends: 'eslint-config-ns/stylelint',
}
```

Note: stylelint will be removed from this package and published in another
repository in the future.

## Assumptions

- React environment (but can be used on a eg. node-server environment as well)
- `jest` us used as the test-suite
- `env`: Browser and/or node environment
- `globals`: added some related jest variables
- `parser`: babel-eslint

Note: you can still overwrite the `env`, `globals` and `parser` in your local
`.eslintrc.js`.
