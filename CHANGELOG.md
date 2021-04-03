# eslint-config-ns Changelog

All notable changes to this project will be documented here. The format is based
on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- DO NOT CHANGE THESE COMMENTS - See .github/actions/release.yml -->
<!-- insert-new-changelog-here -->
## v1.5.0 (2021-04-03)

#### :rocket: New Feature
* `eslint-config-ns`, `eslint-config-ns-ts`
  * [#30](https://github.com/natterstefan/eslint-config-ns/pull/30) feat: updated eslint (js and ts) config based on latest used settings ([@natterstefan](https://github.com/natterstefan))
  * [#29](https://github.com/natterstefan/eslint-config-ns/pull/29) feat: added eslint-config-ns-ts (merge) ([@natterstefan](https://github.com/natterstefan))

## v1.5.0-alpha.0 (2021-03-07)

#### :rocket: New Feature
* `eslint-config-ns`, `example-app`
  * [#28](https://github.com/natterstefan/eslint-config-ns/pull/28) feat: lerna setup ([@natterstefan](https://github.com/natterstefan))
* Other
  * [#27](https://github.com/natterstefan/eslint-config-ns/pull/27) feat: updated several devDependencies ([@natterstefan](https://github.com/natterstefan))

## [1.4.1](https://github.com/natterstefan/eslint-config-ns/compare/v1.4.0...v1.4.1) (2020-10-27)


### Fixes

* removed prettier.js file ([24c766d](https://github.com/natterstefan/eslint-config-ns/commit/24c766d4cbf50a3107b487049a627283125495b2))

## [1.4.0](https://github.com/natterstefan/eslint-config-ns/compare/v1.3.0...v1.4.0) (2020-10-27)


### Features

* added __DEV__ globals, disabled several rules, added settings ([a22efc2](https://github.com/natterstefan/eslint-config-ns/commit/a22efc2bfd6a5bfce362848552be24c2060ef472))

## [1.3.0](https://github.com/natterstefan/eslint-config-ns/compare/v1.2.0...v1.3.0) (2020-10-09)


### Features

* added yml overwrite rule for prettier; deactivate import/extensions ([847d205](https://github.com/natterstefan/eslint-config-ns/commit/847d205bbaa0d82dbaa39e8bf9fcf0bf062e4db9))
* updated peer- and devDependencies ([8aa7797](https://github.com/natterstefan/eslint-config-ns/commit/8aa779741f0be034edec40be694802068c054dd8))

## [1.2.0](https://github.com/natterstefan/eslint-config-ns/compare/v1.1.0...v1.2.0) (2020-05-24)


### Features

* applied recommended presets & changed rules ([8a91880](https://github.com/natterstefan/eslint-config-ns/commit/8a91880c395c89a631dde7fb9b249197f6f75190))
* ESLint (base, babel, configs and plugins) and Prettier updated ([3a07e5d](https://github.com/natterstefan/eslint-config-ns/commit/3a07e5df9676f619d873e001ba384e85f75aa168))

## [1.1.0](https://github.com/natterstefan/eslint-config-ns/compare/v1.0.0...v1.1.0) (2020-01-01)

### Features

- optimise prettier config and plugin (settings and usage) ([e93032a](https://github.com/natterstefan/eslint-config-ns/commit/e93032aa6aeb06f0c83c1cf27ab1bbe6e8c18d32))
- updated peerDependencies to latest version; and example app dependencies ([c80cc1c](https://github.com/natterstefan/eslint-config-ns/commit/c80cc1c14f164d61eaec644f8534d9c9a32bb354))

## 2019/10/16 [1.0.0][10]

### Changed

- **Breaking**: updated ESLint from `5.x` to `>=6.5.x`, `eslint-config-airbnb`
  from `17.x` to `>=18.0.1`, `eslint-config-prettier` from `5.x` to `>=6.4.0`
  and `eslint-plugin-react-hooks` from `1.6.x` to `>=2.1.2`
- updated all ESLint dependencies (eg. plugins and configs) to latest (major)
  version
- updated existing ESLint rules
  - Note: some rules changed, for instance: `<>` is preferred over
    `React.Fragment`
- updated example app's dependencies
- Development: upgraded node version from `v10.14` to `v12.12`

## 2019/07/21 [0.5.0][9]

### Changed

- feat: update peerDependencies' versions to latest supported version, but
  without breaking ESLint change from 5.x to 6.x

## 2019/04/05 [0.4.0][8]

### Added

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

### Changed

- upgraded all dependencies to latest version (updated example as well)
- changeed all `dependencies` to `peerDependencies`

## 2019/02/03 [0.3.0][7]

### Added

- [`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)
  (works with [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md))
- [`sort-keys`](https://eslint.org/docs/rules/sort-keys)

### Changed

- changed prettier's `printWidth` from 100 back to 80
- upgraded all dependencies to latest version (updated example as well)
- upgraded node version (via `.nvmrc`) from 8 to 10

### Deprecated

- deprecated [`sort-imports`](https://eslint.org/docs/rules/sort-imports), because
  it does not work properly with [`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md),
  see the [#389 issue](https://github.com/benmosher/eslint-plugin-import/issues/389).

### Removed

- `globals` from the ESLint configuration, as they are defined in the `env` already

## 2018/08/25 [0.2.0][6]

### Removed

- removed stylelint and moved into own package: https://github.com/natterstefan/stylelint-config-ns

## 2018/08/25 [0.1.3][5]

### Fix

- fixed missing files in published npm module

## 2018/08/25 [0.1.2][4]

### Changed

- Remove scope from package name

## 2018/08/25 [0.1.1][3]

### Changed

- Prepare package for npm release

## 2018/05/27 [0.1.0][2]

### Added

- Initial setup with prettier, esLint and stylelint

[2]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.1.0
[3]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.1.1
[4]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.1.2
[5]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.1.3
[6]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.2.0
[7]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.3.0
[8]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.4.0
[9]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v0.5.0
[10]: https://github.com/natterstefan/eslint-config-ns/releases/tag/v1.0.0
