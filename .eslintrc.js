module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["warn", 4],
        quotes: ["warn", "double"],
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-unused-vars": "warn",
    },
};
