# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

(Node.js support requirements have sometimes increased in minor or patch releases.)

## [Unreleased]

### Added

- Ship standalone native ESM, CommonJS, and UMD bundles with conditional exports, CDN entry points, and side-effect-free package metadata.
- Expose `package.json` as an importable package subpath.

### Changed

- **Breaking:** Rename the fork distribution to `@kitschpatrol/node-inspect-extracted`, requiring scoped installation and import paths.
- **Breaking:** Raise the declared minimum Node.js version from 14 to 14.6.0.

### Removed

- **Breaking:** Remove `getStringWidth`, `inspectDefaultOptions`, `identicalSequenceRange`, and `isZeroWidthCodePoint` from top-level CommonJS exports; they remain accessible through the default export.

### Fixed

- Correct module declarations, add a typed default export and custom `stylize` option, and constrain Proxy targets to objects.

### Documentation

- Document the scoped fork, installation, and native browser ESM usage; add an ESM browser example.

### Maintenance

- Replace Webpack/Babel bundling with tsdown and add Vite example commands, formatting checks, editor setup, and updated contributor runtime requirements.
- Add cross-platform CI, link checks, GitHub release and metadata workflows, and scheduled upstream-fork synchronization.
- Handle permission-model access denials when resolving the test temporary-directory root and synchronize the test helper with Node.js 26.13.
- Refresh development dependencies and pnpm, update workspace policies and fork-synchronization automation, and pin workflow Actions.
- Update the release script to pass an npm one-time password retrieved through the 1Password CLI.

## [3.3.4] - 2026-10-10

### Added

- Include the `error` and `suppressed` properties of SuppressedError objects, including nested suppressed errors.

### Changed

- Preserve namespaced `Symbol.toStringTag` names and restore explicit built-in tags for subclasses.

### Fixed

- Strip OSC escape sequences and colon-separated ANSI parameters correctly.
- Keep indentation balanced when inspecting detached DataView metadata.
- Inspect functions returned by getters as functions, including circular references.
- Honor `breakLength: Infinity` for single-line output while preserving existing line breaks.

### Maintenance

- Synchronize internals and regression tests with Node.js 26.11.1, refresh development dependencies and pnpm, and update lint and dependency-update policies.

## [3.3.4-fork.2] - 2026-11-02

### Maintenance

- Handle permission-model access denials when resolving the test temporary-directory root and synchronize the test helper with Node.js 26.13.
- Refresh development dependencies and pnpm, update fork-synchronization automation, pin release Actions, and adjust workspace dependency policies.

## [3.3.4-fork.1] - 2026-10-15

### Added

- Ship standalone native ESM, CommonJS, and UMD bundles with conditional exports, CDN entry points, and side-effect-free package metadata.
- Expose `package.json` as an importable package subpath.
- Include the `error` and `suppressed` properties of SuppressedError objects, including nested suppressed errors.

### Changed

- **Breaking:** Rename the fork distribution to `@kitschpatrol/node-inspect-extracted`, requiring scoped installation and import paths.
- **Breaking:** Raise the declared minimum Node.js version from 14 to 14.6.0.
- Preserve namespaced `Symbol.toStringTag` names and restore explicit built-in tags for subclasses.

### Removed

- **Breaking:** Remove `getStringWidth`, `inspectDefaultOptions`, `identicalSequenceRange`, and `isZeroWidthCodePoint` from top-level CommonJS exports; they remain accessible through the default export.

### Fixed

- Correct module declarations, add a typed default export and custom `stylize` option, and constrain Proxy targets to objects.
- Strip OSC escape sequences and colon-separated ANSI parameters correctly.
- Keep indentation balanced when inspecting detached DataView metadata.
- Inspect functions returned by getters as functions, including circular references.
- Honor `breakLength: Infinity` for single-line output while preserving existing line breaks.

### Documentation

- Document the scoped fork, installation, and native browser ESM usage; add an ESM browser example.

### Maintenance

- Replace Webpack/Babel bundling with tsdown and add Vite example commands, formatting checks, editor setup, and updated contributor runtime requirements.
- Add cross-platform CI, link checks, GitHub release and metadata workflows, and scheduled upstream-fork synchronization.
- Synchronize internals and regression tests with Node.js 26.11.1, refresh development dependencies and pnpm, and update lint and dependency-update policies.

## [3.3.3] - 2026-07-21

### Changed

- Display wrapped proxies as `Proxy(...)` when `showProxy` is false, retaining nesting and revoked-proxy information.

### Fixed

- Provide separate ESM and CommonJS declaration paths through conditional package exports.
- Unwrap nested tracked proxies without triggering their handlers during inspection and string formatting.
- Prevent colored stack inspection from looping indefinitely when a `node_modules` path ends without another separator.
- Preserve negative zero and scientific notation when numeric separators are enabled.

### Documentation

- Add help text describing the upstream synchronization checker's comparison and update options.

### Maintenance

- Synchronize internals and tests with Node.js 26.5.0, build before packaging, and check that CommonJS and ESM declaration files remain synchronized.
- Refresh development dependencies, pnpm, and the development container; repair CI coverage-token forwarding and update contributor metadata.

## [3.3.3-fork.1] - 2026-07-27

### Added

- Ship standalone native ESM, CommonJS, and UMD bundles with conditional exports, CDN entry points, and side-effect-free package metadata.
- Expose `package.json` as an importable package subpath.

### Changed

- **Breaking:** Rename the fork distribution to `@kitschpatrol/node-inspect-extracted`, requiring scoped installation and import paths.
- **Breaking:** Raise the declared minimum Node.js version from 14 to 14.6.0.
- Display wrapped proxies as `Proxy(...)` when `showProxy` is false, retaining nesting and revoked-proxy information.

### Removed

- **Breaking:** Remove `getStringWidth`, `inspectDefaultOptions`, `identicalSequenceRange`, and `isZeroWidthCodePoint` from top-level CommonJS exports; they remain accessible through the default export.

### Fixed

- Correct ESM/CommonJS declarations, add a typed default export and custom `stylize` option, and constrain Proxy targets to objects.
- Unwrap nested tracked proxies without triggering their handlers during inspection and string formatting.
- Prevent colored stack inspection from looping indefinitely when a `node_modules` path ends without another separator.
- Preserve negative zero and scientific notation when numeric separators are enabled.

### Documentation

- Document the scoped fork, installation, and native browser ESM usage; add an ESM browser example alongside the UMD example.
- Add help text describing the upstream synchronization checker's comparison and update options.

### Maintenance

- Replace Webpack/Babel bundling with tsdown, add Vite example commands, and update contributor runtime requirements and development dependencies.
- Add cross-platform CI, link checking, GitHub release and repository-metadata automation, plus formatting and editor setup.
- Synchronize upstream internals and tests with Node.js 26.5.0, build before packaging, and check that CommonJS and ESM declaration files remain synchronized.

## [3.3.2] - 2026-03-22

### Maintenance

- Synchronize ANSI stripping with Node.js 25.8.1, returning strings without escape introducers directly.
- Refresh development dependencies and pnpm, adopt Babel 8 release candidates and ESLint 10, and replace c8 with superc8.
- Move CI and publishing to shared workflows and adjust lint configuration for the updated tooling.

## [3.3.1] - 2026-03-01

### Fixed

- Inspect values thrown by getters fully, including non-Error values, and restore indentation after getter failures.
- Include error `cause` and `errors` properties automatically only when they belong to the inspected error itself.

### Maintenance

- Synchronize tests with Node.js 25.7.0, expand getter/error regression coverage, and allow test architecture selection through `NVE_ARCH`.
- Refresh development dependencies and pnpm, migrate lint tooling to ESLint 10 and `@eslint/markdown`, and update dependency overrides.

## [3.3.0] - 2025-12-16

### Added

- Add syntax-aware RegExp coloring with a configurable `inspect.styles.regexp.colors` palette and support function-valued color styles.

### Changed

- **Breaking:** Remove the compatibility fallback for browsers without RegExp lookbehind support, including Safari 16.3.
- Display ArrayBuffer and DataView metadata as bracketed properties and apply consistent styling to built-in extra properties.

### Fixed

- Handle errors whose stack, name, message, or aggregated-errors getters throw, falling back to an error representation when necessary.
- Use `Error.isError()` when available to recognize errors from other realms.

### Maintenance

- Synchronize with Node.js 25.2.1 and expand RegExp highlighting, inspection, and primordial apply coverage.
- Refresh development dependencies and workflow Actions, add glob and js-yaml overrides, introduce a development container, and extend testing to Node.js 25.

## [3.2.2] - 2025-10-12

### Added

- Collapse repeated recursive frame sequences in long error stacks.

### Changed

- Omit redundant built-in tags when a subclass constructor name already contains the tag.
- **Breaking:** Change CommonJS `identicalSequenceRange()` results from `{ len, offset }` to `[len, offset]`.

### Fixed

- Ignore exceptions from `Symbol.toStringTag` getters during object and module-namespace classification.
- Format negative fractional numbers correctly with `numericSeparator` enabled.

### Maintenance

- Synchronize internals and regression tests with Node.js 24.10.0 and refresh development dependencies and pnpm.
- Run linting in CI, install tooling dependencies recursively, host CI on Node.js 24, and migrate npm publishing to trusted publishing.

## [3.2.1] - 2025-09-09

### Fixed

- Highlight complete scoped package names in colored stack traces.
- Retain AggregateError, RangeError, and TypeError identification when their prototype constructors are altered.

### Documentation

- Make HTML styling examples self-contained with imports and complete invocation code.

### Maintenance

- Synchronize with Node.js 24.7.0 while retaining Node.js 14 syntax compatibility, refresh development dependencies and lint tooling, and expand coverage.

## [3.2.0] - 2025-07-28

### Fixed

- Use native Map and Set brand checks to avoid misclassifying Immutable.js collections and similarly named objects.
- Preserve error labels and indentation when stacks are non-string values, and detect circular references between errors and their stacks.

### Maintenance

- Synchronize internal path handling and regression tests with Node.js 24.4.1.
- Refresh development dependencies and pnpm, including ESLint styling and explicit resource management parser support.

## [3.1.0] - 2025-05-06

### Added

- Inspect URL objects as their href when custom inspection is disabled.

### Changed

- Lower the declared minimum Node.js version from 18 to 14.
- Display enumerable symbol keys without square brackets and quote non-enumerable string keys consistently.

### Fixed

- Handle built-ins with altered constructor properties and functions whose names are not strings.
- Inspect non-string error names and stacks without relying on string coercion.
- Preserve original exceptions raised during inspection instead of replacing them with generic assertion errors.
- Honor custom `Symbol.toPrimitive` behavior for `%s` formatting while retaining inspection behavior for built-in conversions.
- Recognize additional ANSI escape sequences and terminators when stripping control characters.

### Documentation

- Update the support policy to Node.js 20 and later, clarify treatment of older versions, and replace the coverage badge with Codecov.

### Maintenance

- Synchronize inspection internals and tests with Node.js 24.0.0, migrate to ESLint 9 flat configuration and local Node-core rules, and refresh development dependencies.
- Run multi-version coverage through nve and Codecov, add GitHub-based npm publishing with provenance, and restrict package contents to distribution files, declarations, and the module wrapper.

## [3.0.2] - 2024-05-12

### Changed

- **Breaking:** Raise the declared minimum Node.js version from 16 to 18.

### Maintenance

- Adopt pnpm explicitly for contributor installs and CI, refresh development dependencies, and remove the semver and word-wrap overrides.
- Synchronize tests and lint configuration through Node.js 22.1.0 while retaining test compatibility with Node.js 18–21.

## [3.0.1] - 2024-02-01

### Fixed

- Expose TypeScript declarations through the package's `exports` map so export-aware module resolution can find them.

### Maintenance

- Synchronize internal validation and stack processing with Node.js 21.6.1, add validator coverage, refresh development dependencies and Actions, and test Node.js 21.

## [3.0.0] - 2023-06-30

### Changed

- **Breaking:** Raise the minimum supported Node.js version to 16.

### Fixed

- Ignore exceptions from an error's `cause` getter when comparing stack traces.

### Maintenance

- Synchronize with Node.js 20.3.1, refresh development dependencies, add semver and word-wrap overrides, and update the CI matrix.

## [2.0.2] - 2023-03-16

### Fixed

- Escape HTML characters in `stylizeWithHTML()` output, including text without an assigned color style.

### Documentation

- Update the browser example to demonstrate HTML-sensitive strings, property names, and symbols.

### Maintenance

- Add regression coverage for HTML escaping across inspected values and property keys.

## [2.0.1] - 2023-03-16

### Added

- Expose `isZeroWidthCodePoint()` through the CommonJS export.

### Removed

- **Breaking:** Remove `getStringWidth` and `inspectDefaultOptions` from named ES module exports; inspection defaults remain available through `inspect.defaultOptions`.

### Fixed

- Honor `maxArrayLength` when inspecting Map and Set entries, including omitted-item counts.
- Report errors thrown by Proxy accessors instead of failing because `assert.fail` is missing.
- Restore Safari 16.3 loading with fallbacks for unsupported RegExp lookbehind.
- Add missing TypeScript declarations for ANSI/HTML styling helpers and the exported Proxy constructor.

### Documentation

- Correct README spelling, syntax, and example code.

### Maintenance

- Refresh development dependencies and lint configuration, fix test-runner version parsing with semver, and extend CI to Node.js 19.
- Synchronize upstream tests through Node.js 19.8.1 and expand formatting, namespace, long-running inspection, and internal regression coverage.

## [2.0.0] - 2022-10-19

### Added

- Add `Proxy.revocable()` support and display revoked wrapped proxies as `<Revoked Proxy>`.
- Include the contained errors when inspecting `AggregateError`.
- Expose `identicalSequenceRange()` through the CommonJS export.

### Changed

- **Breaking:** Raise the minimum supported Node.js version to 14.
- Improve colored stack traces with accurate built-in module detection and dimmed working-directory prefixes, including file URLs.

### Fixed

- Handle symbol-valued constructor names and avoid invoking `Symbol.iterator` getters merely to classify objects.

### Maintenance

- Synchronize inspection internals with Node.js 18.11.0 and expand path, URL, and proxy regression coverage.
- Refresh development dependencies and GitHub Actions, and update CI to test Node.js 14, 16, and 18.

## [1.1.0] - 2022-02-24

### Added

- Ship TypeScript declarations for inspection options, formatting functions, custom inspection hooks, and ANSI stripping.
- Add the `numericSeparator` option for numbers, BigInts, typed arrays, and numeric format substitutions.
- Pass `inspect` as the third argument to custom inspection functions.
- Display error causes, including falsy causes, and collapse stack frames shared with the cause.

### Changed

- **Breaking:** Require RegExp lookbehind support for string escaping.

### Fixed

- Recognize and format `arguments` objects with the `[Arguments]` label.
- Escape lone UTF-16 surrogates correctly and preserve multiline layout when compacting nested output.
- Validate string input and update ANSI sequence handling in `stripVTControlCharacters()`.

### Maintenance

- Synchronize with Node.js 17.6.0, refresh development dependencies and lint rules, and extend testing through Node.js 17 while retaining Node.js 10 coverage.

## [1.0.8] - 2021-06-30

### Added

- Provide an ES module wrapper with default and named exports, selected through conditional package exports.

### Fixed

- Track circular references while inspecting inherited getters, matching Node.js 16.4 behavior.

### Maintenance

- Refresh development dependencies, extend linting to ES modules, and add wrapper import tests.

## [1.0.7] - 2021-05-03

### Fixed

- Restore Node.js 10 loading by falling back to `global` when `globalThis` is unavailable.

### Maintenance

- Repair coverage execution in CI and replace Node.js 15 with Node.js 16 in the test matrix.

## [1.0.6] - 2021-05-03

### Fixed

- Transpile the distributed bundle with Babel so it can be consumed by Rollup.

### Documentation

- Update the coverage badge to reference the `main` branch.

### Maintenance

- Synchronize source and tests with Node.js 16, refresh build/lint dependencies, and move CI triggers to `main`.
- Compare upstream changes against recorded Git commits instead of comparing local file copies.

## [1.0.5] - 2021-03-28

### Added

- Restore the `getStringWidth`, `inspectDefaultOptions`, and `stripVTControlCharacters` exports.

### Fixed

- Render own `__proto__` properties as computed property names.

### Maintenance

- Refresh development dependencies and update Webpack configuration and lint commands.
- Import upstream inspection updates, expand multi-version testing, and improve upstream synchronization diagnostics.

## [1.0.4] - 2021-03-14

### Fixed

- Restore Safari compatibility by removing RegExp lookbehind from stack matching and multiline string formatting.

## [1.0.3] - 2021-02-09

### Maintenance

- Add homepage and repository links to package metadata.

## [1.0.2] - 2021-02-08

### Fixed

- Correct built-in type detection to check each candidate constructor individually.

### Maintenance

- Stop generating source maps for the browser bundle.

## [1.0.1] - 2021-02-07

### Added

- Export a `Proxy` wrapper that lets inspection show proxy targets and handlers without triggering their traps.
- Export `stylizeWithColor()` and `stylizeWithHTML()` for ANSI and HTML inspection styling.
- Recognize ES module namespace objects during inspection.

### Changed

- **Breaking:** Rename the browser global from `Inspect` to `util`.

### Removed

- **Breaking:** Remove the top-level `getStringWidth`, `inspectDefaultOptions`, and `stripVTControlCharacters` exports.

### Fixed

- Use the bundled buffer shim when inspecting ArrayBuffer contents in browsers.
- Include the built distribution in Git so the package can be installed directly from the repository.

### Documentation

- Document exported APIs, HTML styling, and inspection limitations; correct import examples and demonstrate HTML output in the browser example.
- Add contributor setup instructions, upstream synchronization commands, and a Node.js support policy.

### Maintenance

- Refactor intrinsic method bindings and expand regression coverage for proxies, getters, built-in emulation, and CommonJS/ES module distribution loading.
- Expand upstream comparison/update tooling, repair developer commands, declare `light-server` as a development dependency, and exclude CI files from npm packages.

## [1.0.0] - 2021-02-04

### Added

- Provide Node.js-style `inspect()` for browsers, including configurable depth, hidden properties, getters, sorting, truncation, circular references, custom inspection hooks, and ANSI colors.
- Export `format()` and `formatWithOptions()` for printf-style substitutions and object formatting.
- Export `getStringWidth()`, `stripVTControlCharacters()`, and shared `inspectDefaultOptions` alongside customizable inspection colors and styles.
- Distribute a UMD browser bundle exposed as `Inspect`, with CommonJS loading and a declared minimum of Node.js 10.18.0.

### Documentation

- Document installation, CommonJS and ES module usage, browser script loading, and licensing; include a browser inspection example.

### Maintenance

- Establish Webpack builds, linting, upstream-source checks, adapted Node.js tests, coverage reporting, and CI across Node.js 10–15.

[Unreleased]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.4...HEAD
[1.0.0]: https://github.com/kitschpatrol/node-inspect-extracted/releases/tag/v1.0.0
[1.0.1]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.3...v1.0.4
[1.0.5]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.4...v1.0.5
[1.0.6]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.5...v1.0.6
[1.0.7]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.6...v1.0.7
[1.0.8]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.7...v1.0.8
[1.1.0]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.0.8...v1.1.0
[2.0.0]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v1.1.0...v2.0.0
[2.0.1]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v2.0.0...v2.0.1
[2.0.2]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v2.0.1...v2.0.2
[3.0.0]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v2.0.2...v3.0.0
[3.0.1]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.0.0...v3.0.1
[3.0.2]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.0.1...v3.0.2
[3.1.0]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.0.2...v3.1.0
[3.2.0]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.1.0...v3.2.0
[3.2.1]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.2.0...v3.2.1
[3.2.2]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.2.1...v3.2.2
[3.3.0]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.2.2...v3.3.0
[3.3.1]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.0...v3.3.1
[3.3.2]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.1...v3.3.2
[3.3.3-fork.1]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.2...v3.3.3-fork.1
[3.3.3]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.2...v3.3.3
[3.3.4-fork.1]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.3...v3.3.4-fork.1
[3.3.4-fork.2]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.4-fork.1...v3.3.4-fork.2
[3.3.4]: https://github.com/kitschpatrol/node-inspect-extracted/compare/v3.3.3...v3.3.4
