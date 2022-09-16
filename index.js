module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "unicorn",
        "node",
        "sonarjs",
        "lodash",
        "import"
    ],
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended",
        "plugin:lodash/recommended",
        "plugin:import/recommended",
        "plugin:node/recommended",
        "plugin:import/typescript",
        "prettier",
    ],
    "env": {
        "es2022": true
    },
    "rules": {
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
        "node/no-unsupported-features/es-syntax": 0,
        "lodash/prefer-lodash-method": 0,
        "lodash/import-scope": 0,
        "import/prefer-default-export": 0,
        // turn on errors for missing imports
        "import/no-unresolved": "error",
        "import/extensions": 0,
        "node/no-missing-import": 0,
        "no-underscore-dangle": 0,
        "unicorn/filename-case": 0,
        "node/no-unpublished-import": 0,
        "no-process-exit": 0,
        "unicorn/no-process-exit": 0,
        "unicorn/prevent-abbreviations": 0,
        "unicorn/prefer-module": 0,
        "consistent-return": 0,
    },
    "overrides": [
        {
            "files": ["**/*.test.ts", "**/*.spec.ts", "**/*.e2e.ts", "**/test/**/*.ts", "**/*.cy.*", '**/*.config.*', 'cypress/**/*', 'mocks/**/*'],
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
