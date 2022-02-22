[![npm-version](https://img.shields.io/npm/v/@cyntler/eslint-config.svg)](https://www.npmjs.com/package/@cyntler/eslint-config)
[![npm-download](https://img.shields.io/npm/dt/@cyntler/eslint-config.svg)](https://www.npmjs.com/package/@cyntler/eslint-config)

# @cyntler/eslint-config

My personal configuration for ESLint.

## Installing

To install this configuration, run the command below.

```bash
npm i -D eslint @rushstack/eslint-patch @cyntler/eslint-config # npm
yarn add -D eslint @rushstack/eslint-patch @cyntler/eslint-config # Yarn
```

## How to use?

For this configuration, the name of the ESLint configuration file should be: `.eslintrc.js` and saved as a `.js` file to be able to use `require` keyword.

**.eslintrc.js**

```javascript
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: "@cyntler/eslint-config",
  parserOptions: { tsconfigRootDir: __dirname },
};
```

You should also add a `.eslintignore` file to list all paths and files that should be avoided by ESLint.<br>It's a good idea to list the `eslintrc.js` file here, if ESLint reports any warnings or errors in this file.

**.eslintignore**

```
.eslintrc.js
```
