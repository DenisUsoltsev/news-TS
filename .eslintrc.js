module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended'],

    // Можно отключить правило не использовать require(). Или переделать вызовы require() на import
    // rules: {
    //   '@typescript-eslint/no-require-imports': 'off',
    // },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    }
  }