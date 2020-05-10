module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "env": {
        "node": true,
        "es6": true
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "node",
        "sonarjs",
        "lodash",
        "import"
    ],
    "extends": [
        "airbnb-base",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended",
        "plugin:lodash/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:node/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": "error",
        "node/no-unsupported-features/es-syntax": 0,
        "lodash/prefer-lodash-method": 0,
        "lodash/import-scope": 0,
        "import/prefer-default-export": 0,
        "import/no-unresolved": 0
    },
    "overrides": [
        {
            "files": ["**/*.test.ts", "**/*.spec.ts", "**/*.e2e.ts", "**/test/**/*.ts"],
            "rules": {
                "import/no-extraneous-dependencies": 0,
                "no-unused-expressions": 0,
                "@typescript-eslint/explicit-function-return-type": 0,
            }
        },
        {
            "files": ["**/*.e2e.ts"],
            "rules": {
                "global-require": 0,
                "node/no-missing-require": 0
            }
        }
    ]
};
