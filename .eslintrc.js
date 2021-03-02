module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-native', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        camelcase: 'off',
        'max-len': ['error', { code: 80 }, { ignoreComments: true }],
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'jsx-quotes': ['error', 'prefer-single'],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'no-use-before-define': [
            'error',
            { functions: true, classes: true, variables: false },
        ],
        'react/prop-types': 'off',
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'prettier/prettier': ['error'],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    parser: 'babel-eslint',
    settings: {
        'import/resolver': {
            'babel-module': {},
        },
        'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
        'react-native/style-sheet-object-names': ['EStyleSheet', 'StyleSheet'],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
                "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
            ],

            // If need to support jsx
            //     parserOptions: {
            //       ecmaFeatures: { jsx: true }
            //     },
            /**
             * Typescript Rules
             * https://github.com/bradzacher/eslint-plugin-typescript
             * Enable your own typescript rules.
             */
            rules: {
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    { functions: true, classes: true, variables: false },
                ],
                // Prevent TypeScript-specific constructs from being erroneously flagged as unused
                '@typescript-eslint/no-unused-vars': 'error',
                // Require PascalCased class and interface names
                // '@typescript-eslint/class-name-casing': 'error',
                '@typescript-eslint/naming-convention': 'error',

                // Require a specific member delimiter style for interfaces and type literals
                // Default Semicolon style
                '@typescript-eslint/member-delimiter-style': 'error',
                // Require a consistent member declaration order
                '@typescript-eslint/member-ordering': 'error',
                // Require consistent spacing around type annotations
                '@typescript-eslint/type-annotation-spacing': 'error',
            },
        },
    ],
};
