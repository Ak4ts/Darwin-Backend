// Arquivo de configuração migrado para ESLint v9+ (Flat Config API)
// O arquivo .eslintrc.js pode ser removido após validação do novo setup.

module.exports = {
  env: {
    node: true,
    es2022: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-console': 'off',
  },
};
