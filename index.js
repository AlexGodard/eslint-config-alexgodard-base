module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    "env": {
        "node": true,
        "mocha": true,
        "es6": true
    },
    "globals": {
        "expect": true,
        "sinon": true
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "mocha",
        "node",
        "sonarjs",
        "lodash",
        "chai-expect",
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
        "mocha/no-exclusive-tests": "error",
        "mocha/handle-done-callback": "error",
        "mocha/no-global-tests": "error",
        "mocha/no-identical-title": "error",
        "mocha/no-pending-tests": "error",
        "mocha/no-return-and-callback": "error",
        "mocha/no-setup-in-describe": "error",
        "mocha/no-sibling-hooks": "error",
        "mocha/no-skipped-tests": "error",
        "mocha/prefer-arrow-callback": "error",
        "mocha/no-async-describe": "error",
        "chai-expect/missing-assertion": "error",
        "chai-expect/terminating-properties": "error",
        "chai-expect/no-inner-compare": "error",
        "node/no-unsupported-features/es-syntax": 0,
        "lodash/prefer-lodash-method": 0,
        "lodash/import-scope": 0,
        "import/prefer-default-export": 0,
        "import/no-unresolved": 0
    },
    "overrides": [
        {
            "files": ["src/**/*.test.ts", "src/**/*.spec.ts", "src/**/*.e2e.ts"],
            "rules": {
                "import/no-extraneous-dependencies": 0,
                "no-unused-expressions": 0
            }
        },
        {
            "files": ["src/**/*.e2e.ts"],
            "rules": {
                "global-require": 0,
                "node/no-missing-require": 0
            }
        }
    ]
};
