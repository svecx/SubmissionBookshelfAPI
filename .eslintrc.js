module.exports = {
  root: true,
  extends: 'google',
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: [
        'controllers/**/*.js',
        'models/**/*.js',
        'routes/**/*.js',
        'index.js',
      ],
      rules: {
        'max-len': ['error', {code: 120}],
      },
    },
  ],
};
