module.exports = {
  extends: '@mate-academy/eslint-config',
  globals: {
    expect: 'readonly',
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
