<!-- title -->

# @kitschpatrol/node-inspect-extracted

<!-- /title -->

[![NPM Package @kitschpatrol/node-inspect-extracted](https://img.shields.io/npm/v/@kitschpatrol/node-inspect-extracted.svg)](https://npmjs.com/package/@kitschpatrol/node-inspect-extracted)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)
[![CI](https://github.com/kitschpatrol/node-inspect-extracted/actions/workflows/ci.yml/badge.svg)](https://github.com/kitschpatrol/node-inspect-extracted/actions/workflows/ci.yml)

<!-- short-description -->

**Fork of node-inspect-extracted with ESM fixes.**

<!-- /short-description -->

## Changes

This is a fork of [hildjj/node-inspect-extracted](https://github.com/hildjj/node-inspect-extracted) incorporating some minor changes that I needed (immediately) in other projects:

- Support direct-to-browser ESM imports in addition to UMD and CJS.
- Update `./example-esm/index.html` to demonstrate the module import approach.

It will be deprecated when a wrapper-free ESM build is available upstream.

## Branches

- [main](https://github.com/kitschpatrol/node-inspect-extracted/tree/main) This Branch with additional project template and readme changes for NPM releases.
- [esm-build-tsdown](https://github.com/kitschpatrol/node-inspect-extracted/tree/esm-build-tsdown) Clean merge-able branch with new ESM build approach.

## Installation

To install:

```sh
pnpm add -D @kitschpatrol/node-inspect-extracted
```

## Acknowledgments

Everything except the bundling changes in this fork was created by [Joe Hildebrand](https://github.com/hildjj).

## License

[MIT](license.txt)

---

## More information

Please see the [readme from the upstream-mergeable branch](https://github.com/kitschpatrol/node-inspect-extracted/blob/esm-build-tsdown/README.md) for more details and documentation.
