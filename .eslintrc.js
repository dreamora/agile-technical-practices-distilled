module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:jest/recommended",
        "plugin:jest/style",
    ],
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: __dirname + "/tsconfig.lint.json",
        sourceType: "module",
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    },
    settings: {
        jest: {
            version: 27,
        },
        "import/resolver": {
            alias: {
                map: [
                    ["@qs/magellan-shared", __dirname + "/packages/shared/src"],
                    ["@qs/magellan-compiler", __dirname + "/packages/compiler/src"],
                ],
                extensions: [".ts", ".js", ".jsx", ".json"],
            },
        },
    },
    env: {
        browser: true,
        node: true,
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "arrow-parens": ["error", "as-needed"],
        "max-len": ["warn", { code: 150, tabWidth: 4 }],
        "no-console": "error",
        "prettier/prettier": "off",
        curly: "error",
    },
    ignorePatterns: ["*.min.js", "lib", "dist", "bin"],
    overrides: [
        {
            files: ["**/*.test.js", "**/*.test.ts", "**/*.test.tsx", "**/*.spec.ts", "**/*.spec.tsx"],
            env: {
                jest: true,
            },
            rules: {
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-non-null-assertion": "off",
                "max-len": "off",
            },
        },
    ],
};
