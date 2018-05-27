# eslint-config-ns

## Documentation Shareable Configs

* [Eslint shareable config](https://eslint.org/docs/developer-guide/shareable-configs)

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
    "extends": "@natterstefan/eslint-config-ns"
  }
}
```

or to the `.eslintrc`:

```json
{
  "extends": "@natterstefan/eslint-config-ns"
}
```

## stylelint Installation

Add the following to your `styelint.config.js` config:

```
module.exports = {
  extends: '@natterstefan/eslint-config-ns/stylelint',
}
```

## Assumptions

* React environment (but can be used on a eg. node-server environment as well)
* Usage of jest as the test-suite
* `env`: Browser and Node environment
* `globals`: added some related jest variables
* `parser`: usage of babel (used babel-eslint parser)

Note: you can still overwrite the `env`, `globals` and `parser` in your local `.eslintrc.js`.
