module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    },
    "plugins": [
        "@typescript-eslint",
        "unicorn",
        "node",
        "sonarjs",
        "import"
    ],
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:unicorn/recommended",
        "plugin:sonarjs/recommended",
        "plugin:import/recommended",
        "plugin:node/recommended",
        "plugin:import/typescript",
        "prettier",
    ],
    "env": {
        "es2022": true
    },
    "rules": {
        "consistent-return": 0,
        "import/extensions": 0,
        // This rule is the same thing as node/no-extraneous-dependencies, so we turn it off
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": "error",
        "import/prefer-default-export": 0,
        "no-process-exit": 0,
        // Allow for in and for of
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
        "no-underscore-dangle": 0,
        "node/no-missing-import": 0,
        "node/no-unpublished-import": 0,
        "node/no-unsupported-features/es-syntax": 0,
        "unicorn/filename-case": 0,
        "unicorn/no-process-exit": 0,
        "unicorn/prefer-module": 0,
        "unicorn/prevent-abbreviations": 0,
        "sonarjs/no-duplicate-string": 0,
        "unicorn/no-useless-undefined": ["error", {"checkArguments": false}],
        "no-use-before-define": 0,
        // No shadow doesn't work with JS files
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/consistent-type-imports": [
            "error",
            {
                "prefer": "type-imports",
                "disallowTypeAnnotations": false
            }
        ],
        "unicorn/prefer-top-level-await": 1,
        "sonarjs/no-redundant-jump": 0,
        "no-useless-return": 0,
        'no-await-in-loop': 0,
        // Remix uses this (V2_MetaFunction)
        'camelcase': 0,
        // Remix resource routes look better with a small switch (HTTP methods)
        "sonarjs/no-small-switch": 0,
        // Remix-blues-stack uses this in their server.ts file
        "import/no-dynamic-require": 0,
        // Remix-blues-stack uses this in their server.ts file
        "global-require": 0,
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
        },
        {
            "files": ["**/*.d.ts"],
            "rules": {
                "@typescript-eslint/ban-types": 0
            }
        }
    ]
};
