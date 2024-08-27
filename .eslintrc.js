/**
 * @file Eslint configuration file.
 */

module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  settings: {
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts'],
    // },
    'import/resolver': {
      // Use this resolver for import path
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },

  parserOptions: {
    // parser: '@babel/eslint-parser',
    // ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    // sourceType: 'module' // Allows for the use of imports

    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },

  env: {
    browser: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",

    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    // extend plugin:storybook/<configuration>, such as:
    'plugin:storybook/recommended',

    // https://github.com/prettier/eslint-config-prettier#installation
    // usage with Prettier, provided by 'eslint-config-prettier'.
    // 'prettier'
    'plugin:prettier/recommended',
    // Import plugin
    // See https://github.com/import-js/eslint-plugin-import
    // 'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',

    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',

    // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
    // Prettier has not been included as plugin to avoid performance impact
    // add it as an extension for your IDE

    // https://www.npmjs.com/package/eslint-plugin-jsdoc
    'jsdoc',

    // Import plugin
    // See https://github.com/import-js/eslint-plugin-import
    'import',
  ],

  globals: {
    ga: 'readonly', // Google Analytics
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly',
  },

  // add your custom rules here
  rules: {
    // "jsdoc/no-missing-syntax": "off", deactivated, too much complicated to understand.
    // "jsdoc/no-restricted-syntax": "off", deactivated, too much complicated to understand.
    // "jsdoc/no-types": "off", //-> it contradict the require-param-type rule.
    // "jsdoc/require-example": "off", too much constraint.

    'jsdoc/check-access': 'error', // Recommended
    'jsdoc/check-alignment': 'error', // Recommended
    'jsdoc/check-examples': ['off', { baseConfig: { rules: { semi: ['error', 'never'] } }, checkEslintrc: false }],
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-line-alignment': 'error',
    'jsdoc/check-param-names': [
      'error',
      {
        enableFixer: true,
        checkRestProperty: true,
        allowExtraTrailingParamDocs: false,
        checkDestructured: true,
        disableExtraPropertyReporting: true,
      },
    ], // Recommended

    'jsdoc/check-property-names': 'error', // Recommended
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error', // Recommended
    'jsdoc/check-types': 'error', // Recommended
    'jsdoc/check-values': 'error', // Recommended
    'jsdoc/empty-tags': 'error', // Recommended
    'jsdoc/implements-on-classes': 'error', // Recommended
    'jsdoc/match-description': 'error',
    'jsdoc/multiline-blocks': 'error', // Recommended
    'jsdoc/newline-after-description': 'off', // Recommended
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/no-defaults': 'error',
    'jsdoc/no-multi-asterisks': 'error', // Recommended
    'jsdoc/no-undefined-types': 'error', // Recommended
    'jsdoc/require-asterisk-prefix': 'error',
    'jsdoc/require-description': 'error',
    'jsdoc/require-description-complete-sentence': 'error',
    'jsdoc/require-file-overview': 'error',
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ], // Recommended -> OK
    'jsdoc/require-param': 'off', // Recommended
    'jsdoc/require-param-description': 'error', // Recommended
    'jsdoc/require-property': 'error', // Recommended
    'jsdoc/require-property-description': 'error', // Recommended
    'jsdoc/require-property-name': 'error', // Recommended
    'jsdoc/require-property-type': 'error', // Recommended
    'jsdoc/require-returns': 'off', // Recommended
    'jsdoc/require-returns-check': 'off', // Recommended
    'jsdoc/require-returns-description': 'off', // Recommended
    'jsdoc/require-returns-type': 'off', // Recommended
    'jsdoc/require-throws': 'error',
    'jsdoc/require-yields': 'error', // Recommended
    'jsdoc/require-yields-check': 'error', // Recommended
    'jsdoc/tag-lines': ['off', 'never', { tags: { example: { lines: 'always' } } }], // Recommended
    'jsdoc/valid-types': 'off', // Recommended

    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Warning for the use of require statements except in import statements.
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    'import/no-unresolved': 'error',
    'import/no-duplicates': 'warn',
    'import/no-unassigned-import': 'warn',
    'import/newline-after-import': 'warn',
  },

  overrides: [
    {
      // deactivate jsdoc lint for mutations because it will be remove in pinia.
      // deactivate jsdoc lint for stories because stories are already here for documentation purpose.
      files: ['src/store/**/mutations*.js', 'src/stories/**/*', 'src/boot/*'],
      rules: {
        'jsdoc/check-access': 'off', // Recommended
        'jsdoc/check-alignment': 'off', // Recommended
        'jsdoc/check-examples': 'off',
        'jsdoc/check-indentation': 'off',
        'jsdoc/check-line-alignment': 'off',
        'jsdoc/check-param-names': 'off', // Recommended
        'jsdoc/check-property-names': 'off', // Recommended
        'jsdoc/check-syntax': 'off',
        'jsdoc/check-tag-names': 'off', // Recommended
        'jsdoc/check-types': 'off', // Recommended
        'jsdoc/check-values': 'off', // Recommended
        'jsdoc/empty-tags': 'off', // Recommended
        'jsdoc/implements-on-classes': 'off', // Recommended
        'jsdoc/match-description': 'off',
        'jsdoc/multiline-blocks': 'off', // Recommended
        'jsdoc/newline-after-description': 'off', // Recommended
        'jsdoc/no-bad-blocks': 'off',
        'jsdoc/no-defaults': 'off',
        'jsdoc/no-multi-asterisks': 'off', // Recommended
        'jsdoc/no-undefined-types': 'off', // Recommended
        'jsdoc/require-asterisk-prefix': 'off',
        'jsdoc/require-description': 'off',
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-jsdoc': 'off', // Recommended -> OK
        'jsdoc/require-param': 'off', // Recommended
        'jsdoc/require-param-description': 'off', // Recommended
        'jsdoc/require-param-name': 'off', // Recommended
        'jsdoc/require-param-type': 'off', // Recommended
        'jsdoc/require-property': 'off', // Recommended
        'jsdoc/require-property-description': 'off', // Recommended
        'jsdoc/require-property-name': 'off', // Recommended
        'jsdoc/require-property-type': 'off', // Recommended
        'jsdoc/require-returns': 'off', // Recommended
        'jsdoc/require-returns-check': 'off', // Recommended
        'jsdoc/require-returns-description': 'off', // Recommended
        'jsdoc/require-returns-type': 'off', // Recommended
        'jsdoc/require-throws': 'off',
        'jsdoc/require-yields': 'off', // Recommended
        'jsdoc/require-yields-check': 'off', // Recommended
        'jsdoc/tag-lines': 'off', // Recommended
        'jsdoc/valid-types': 'off', // Recommended
      },
    },
  ],
}
