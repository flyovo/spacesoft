module.exports = {
  env: {
    browser: true,
    es6: true,
    webextensions: true,
    node: true
  },
  extends: [
    'react-app',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    // Possible Errors
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-control-regex': 'off',

    // Best Practices
    'block-scoped-var': 'warn',
    'consistent-return': 'warn',
    'guard-for-in': 'warn',
    'max-classes-per-file': ['warn', 2],
    'no-new': 'warn',
    'no-multi-spaces': 'off',
    'no-param-reassign': 'warn',
    'no-proto': 'warn',
    'no-return-assign': 'warn',
    radix: 'warn',
    'vars-on-top': 'warn',

    // Variables
    'no-restricted-globals': 'warn',
    'no-shadow': 'warn',
    'no-use-before-define': 'off',

    // Stylistic Issues
    camelcase: 'warn',
    indent: 'off',
    'eol-last': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    'max-len': 'off',
    'new-cap': 'off',
    'no-multiple-empty-lines': 'off',
    'no-bitwise': 'warn',
    'no-continue': 'warn',
    'no-multi-assign': 'warn',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': 'warn',
    'object-curly-newline': 'off',
    'one-var': 'off',
    'operator-assignment': 'warn',
    'quote-props': ['error', 'as-needed'],

    // Deprecated rules
    'global-require': 'off',

    // ECMAScript 6
    'no-var': 'warn',
    'object-shorthand': ['warn', 'always'],
    'prefer-const': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        array: true
      }
    ],
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'class-methods-use-this': 'warn',

    // eslint-plugin-import
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never'
      }
    ],
    'import/no-anonymous-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.stories.js',
          '**/*.stories.jsx',
          '**/*.stories.ts',
          '**/*.stories.tsx',
          '**/*.config.js',
          '**/*.config.ts',
          '/dist/*'
        ]
      }
    ],
    'import/prefer-default-export': 'off',

    // React
    'react/button-has-type': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/destructuring-assignment': 'warn',
    'react/display-name': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/jsx-boolean-value': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/jsx-indent-props': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-key': 'warn',
    'react/jsx-one-expression-per-line': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-bind': 'warn',
    'react/jsx-wrap-multilines': 'off',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-unused-state': 'warn',
    'react/prop-types': 'warn',
    'react/require-default-props': 'off',
    'react/sort-comp': 'warn',
    'react/state-in-constructor': 'warn',
    'react/static-property-placement': 'warn',

    // React Hooks
    'react-hooks/exhaustive-deps': 'warn',

    // jsx-a11y
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
