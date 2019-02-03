# eslint-config-ns

All notable changes to this project will be documented here. The format is based
on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project
adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased][1]

### Added

- [`import/order`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)
  (works with [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md))
- [`sort-keys`](https://eslint.org/docs/rules/sort-keys)

### Changed

- changed prettier's `printWidth` from 100 back to 80
- upgraded all dependencies to latest version (updated example as well)

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
[1]: https://github.com/natterstefan/eslint-config-ns/compare/v0.2.0...HEAD
