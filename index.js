module.exports = {
    rules: {
        eqeqeq: ['error'],
        'no-plusplus': ['error'],
        'max-depth': ['error', 4],
        camelcase: ['error', { properties: 'never' }],
        'no-array-constructor': ['error'],
        'no-console': ['error'],
        'no-loop-func': ['error'],
        'no-magic-numbers': [
            'error',
            {
                ignore: [0, 1, -1, 2, 100],
                detectObjects: true,
            },
        ],
        'no-redeclare': ['error'],
        'no-unused-expressions': ['error'],
        'no-use-before-define': ['error'],
        yoda: ['error'],
        'no-undef': ['error'],
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        curly: 'error',
        'jest/no-disabled-tests': 'error',
        'jest/expect-expect': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/valid-title': 'error',
    },
    env: {
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['jest', 'prettier'],
    overrides: [
        {
            files: [
                '**/__tests__/**',
                '**/*.test.js',
                '**/*.spec.js',
                '**/*.test.ts',
                '**/*.spec.ts',
            ],
            rules: {
                'no-magic-numbers': 'off',
                'no-global-assign': 'off',
                '@typescript-eslint/no-magic-numbers': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
            },
            env: {
                jest: true,
                node: true,
            },
            parserOptions: {
                ecmaVersion: 9,
            },
        },
    ],
};
