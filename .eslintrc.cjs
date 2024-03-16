/* eslint-env node */

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'airbnb-base',
        'airbnb-typescript/base'
    ],
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'unused-imports', '@stylistic'],
    root: true,
    rules: {
        'max-len': 'off',
        'no-await-in-loop': 'off',
        'no-restricted-syntax': 'off',
        'import/no-default-export': 'error',
        'class-methods-use-this': 'off',
        'import/prefer-default-export': 'off',
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/no-trailing-spaces': 'error',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/indent': 'off',
        'unused-imports/no-unused-vars': [
            'off',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_'
            }
        ],
        '@typescript-eslint/prefer-destructuring': [
            'error',
            {
                'object': true,
                'array': true
            }
        ],
        "import/no-extraneous-dependencies":[
            "error",
            {
               "devDependencies":[
                  "**/*.{u,i}spec.ts"
               ]
            }
          ]
    },
    'ignorePatterns': ["**/*.cjs"]
};
