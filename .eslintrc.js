// .eslintrc.js

module.exports = {
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  // parserOptions: {
  //   ecmaVersion: 6,
  //   // ecmaVersion: 2018,
  //   sourceType: "module",
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  parser: "babel-eslint",
  env: {
    node: true,
    //   ecma: true
  },
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"],
  },
  settings: {
    react: {
      //   version: "17.0.1",
      version: "detect",
    },
  },
};
