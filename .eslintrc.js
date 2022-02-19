module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': ['off'],
    'space-before-function-paren': 'off',
  },
};
