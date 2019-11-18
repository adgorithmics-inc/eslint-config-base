module.exports = {
    rules: {
        '@typescript-eslint/no-magic-numbers': [
            'error',
            { ignore: [0, 1, -1, 2, 100] },
        ],
        'no-magic-numbers': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
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
