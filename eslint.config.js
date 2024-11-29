import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,ts}']
  },
  {
    ignores: ['coverage', 'dist', 'docs', 'node_modules']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tseslint.parser,
      parserOptions: {}
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: { jsdoc },
    rules: {
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-wrapper-object-types': 0,
      '@typescript-eslint/no-require-imports': 0,
      '@typescript-eslint/no-unsafe-function-type': 0
    }
  }
]
