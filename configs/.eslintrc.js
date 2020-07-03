module.exports = {
    root: true,
    env: {
        // this section will be used to determine which APIs are available to us
        // (i.e are we running in a browser environment or a node.js env)
        node: true,
        browser: true,
        'jest/globals': true,
        'cypress/globals': true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        // specifying a module sourcetype prevent eslint from marking import statements as errors
        sourceType: 'module',
    },
    extends: [
        // use the recommended rule set for both plain javascript and vue
        'eslint:recommended',
        'airbnb-base',
        'plugin:vue/recommended',
        'plugin:vue/strongly-recommended',
        'plugin:vue-a11y/recommended',
        'plugin:jest/recommended',
        'plugin:cypress/recommended',
    ],
    plugins: ['vue-a11y', 'jest', 'cypress'],
    rules: {
        indent: ['warn', 4],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'no-extra-semi': 'off',
        semi: 'off',
        'space-before-function-paren': 'error',
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'operator-linebreak': 'off',
    },
    settings: {
        'import/resolver': {
            node: {},
            webpack: {
                config: './build/webpack.base.conf.js',
            },
        },
    },
    overrides: [
        // Modify rules for build scripts
        {
            files: ['src/system.js', '{build,config,test}/**/*'],
            rules: {
                // Disable no-console rule for build scripts
                'no-console': 0,

                // Allow devDeps to be used without error
                'import/no-extraneous-dependencies': [
                    'error',
                    {
                        devDependencies: true,
                    },
                ],
            },
        },
        // Ignore jest rules for cypress tests
        {
            files: ['*.cypress.spec.js'],
            rules: {
                'jest/expect-expect': 'off',
            },
        },
        {
            files: ['*.vue'],
            rules: {
                'max-len': 'off',
                'vue/attributes-order': 'off',
                'vue/html-self-closing': [
                    'error',
                    { html: { normal: 'never', void: 'always' } },
                ],
                'vue/require-valid-default-prop': 'error',
                'vue/singleline-html-element-content-newline': 'error',
                'vue/no-unused-vars': 'error',
                'vue/order-in-components': 'error',
                'vue/this-in-template': 'error',
                'vue/component-name-in-template-casing': [
                    'error',
                    'PascalCase',
                    {
                        registeredComponentsOnly: false,
                    },
                ],
                'vue/script-indent': ['error', 4],
                'vue/html-indent': ['error', 4],
                'vue/max-len': [
                    'error',
                    {
                        code: 80,
                        template: 500,
                        ignoreRegExpLiterals: true,
                        ignoreTemplateLiterals: true,
                    },
                ],
                'vue-a11y/label-has-for': [
                    2,
                    {
                        required: {
                            some: ['nesting', 'id'],
                        },
                    },
                ],
            },
        },
    ],
};
