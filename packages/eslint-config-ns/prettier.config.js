module.exports = {
  /**
   * prettier ^1.9 behaviour
   *
   * @see https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-arrowparens-to-always-7430httpsgithubcomprettierprettierpull7430-by-kachkaevhttpsgithubcomkachkaev
   */
  arrowParens: 'avoid',
  bracketSpacing: true,
  /**
   * prettier ^1.9 behaviour
   *
   * @see https://prettier.io/blog/2020/03/21/2.0.0.html#change-default-value-for-endofline-to-lf-7435httpsgithubcomprettierprettierpull7435-by-kachkaevhttpsgithubcomkachkaev
   */
  endOfLine: 'auto',
  printWidth: 80,
  /**
   * Wrap prose if it exceeds the print width.
   */
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
}
