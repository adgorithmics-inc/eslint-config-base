module.exports = {
    rules: {
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                ignore: [0, 1, -1, 2, 100],
                detectObjects: true,
                ignoreReadonlyClassProperties: true,
                ignoreEnums: true,
                ignoreNumericLiteralTypes: true,
            },
        ],
        'no-magic-numbers': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
};
