# eslint-config

[![GitHub license](https://img.shields.io/github/license/natterstefan/eslint-config-ns.svg)](https://github.com/natterstefan/eslint-config-ns/blob/master/LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Packages

This monorepo contains multiple packages. Take a look at their READMEs for
more details.

- [eslint-config-ns](./packages/eslint-config-ns/README.md)
- [eslint-config-ns-ts](./packages/eslint-config-ns-ts/README.md)

## How to release

This repository uses GitHub Actions ([debug locally](https://github.com/nektos/act))
to create a release and update the [CHANGELOG](CHANGELOG.md). The implementation
is inspired and based on [github.com/babel/actions](https://github.com/babel/actions/tree/bb571b895aa20aaa3ee4ef58adcde364416acc9a).

```bash
yarn lerna:version
```

Once the release was created with GitHub Actions, you need publish the packages
manually to npm.

## LICENSE

[MIT](LICENSE)

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
