module.exports = {
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-unknown-property': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/prop-types': 'off',
        'react/require-default-props': 'error',
        'react/jsx-boolean-value': 'error',
        'react/no-unused-state': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-key': 'error',
        'react/require-render-return': 'error',
        'react/no-redundant-should-component-update': 'error',
        'react/no-direct-mutation-state': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    extends: ['plugin:react/recommended'],
    plugins: ['react', 'react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
