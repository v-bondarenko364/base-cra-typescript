import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unicornPlugin from 'eslint-plugin-unicorn';
import importPlugin from 'eslint-plugin-import';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const config = [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooksPlugin,
			unicorn: unicornPlugin,
			import: importPlugin,
			'@typescript-eslint': typescriptPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			// Common rules
			'no-unused-vars': 'off',
			'comma-dangle': ['error', 'only-multiline'],
			eqeqeq: 'error',
			'no-else-return': 'error',
			'no-multi-spaces': 'error',
			'no-console': 'warn',
			'array-bracket-spacing': ['error', 'never'],
			'block-spacing': ['error', 'always'],
			'brace-style': ['error', '1tbs', { allowSingleLine: true }],
			camelcase: [
				'error',
				{
					ignoreImports: true,
					ignoreDestructuring: true,
					properties: 'always',
				},
			],
			'no-lonely-if': 'error',
			'no-mixed-operators': 'error',
			'no-multi-assign': 'error',
			'no-nested-ternary': 'error',
			'no-plusplus': 'error',
			'no-unneeded-ternary': ['error'],
			'one-var': ['error', 'never'],
			'padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: '*', next: 'return' },
				{ blankLine: 'always', prev: ['const', 'let'], next: '*' },
				{ blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
			],
			'no-var': 'error',
			'prefer-const': 'error',

			// React rules
			'react/prop-types': 'off',
			'react/no-unescaped-entities': 'off',
			'jsx-quotes': ['error', 'prefer-double'],
			'react/no-array-index-key': 'error',
			'react/react-in-jsx-scope': 'off', // Not needed in React 17+
			'react/jsx-uses-react': 'off', // Not needed in React 17+

			// Comments rules
			'sort-vars': ['error', { ignoreCase: true }],
			'prefer-destructuring': [
				'error',
				{
					array: true,
					object: true,
				},
				{
					enforceForRenamedProperties: false,
				},
			],

			// Unicorn rules
			'unicorn/prefer-query-selector': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/no-null': 'off',
			'unicorn/no-array-callback-reference': 'error',
			'unicorn/no-array-for-each': 'error',
			'unicorn/no-array-reduce': 'error',
			'unicorn/no-console-spaces': 'error',
			'unicorn/no-document-cookie': 'error',
			'unicorn/no-empty-file': 'error',
			'unicorn/no-for-loop': 'error',
			'unicorn/no-hex-escape': 'error',
			'unicorn/no-instanceof-array': 'error',
			'unicorn/no-invalid-remove-event-listener': 'error',
			'unicorn/no-keyword-prefix': 'off',
			'unicorn/no-lonely-if': 'error',
			'unicorn/no-negated-condition': 'error',
			'unicorn/no-new-array': 'error',
			'unicorn/no-new-buffer': 'error',
			'unicorn/no-zero-fractions': 'error',
			'unicorn/number-literal-case': 'error',
			'unicorn/prefer-add-event-listener': 'error',
			'unicorn/prefer-array-find': 'error',
			'unicorn/prefer-array-flat': 'error',
			'unicorn/prefer-array-flat-map': 'error',
			'unicorn/prefer-array-index-of': 'error',
			'unicorn/prefer-array-some': 'error',
			'unicorn/prefer-date-now': 'error',
			'unicorn/prefer-default-parameters': 'error',
			'unicorn/prefer-dom-node-append': 'error',
			'unicorn/prefer-dom-node-dataset': 'error',
			'unicorn/prefer-dom-node-remove': 'error',
			'unicorn/prefer-dom-node-text-content': 'error',
			'unicorn/prefer-export-from': 'error',
			'unicorn/prefer-includes': 'error',
			'unicorn/prefer-keyboard-event-key': 'error',
			'unicorn/prefer-math-trunc': 'error',
			'unicorn/prefer-modern-dom-apis': 'error',
			'unicorn/prefer-module': 'error',
			'unicorn/prefer-negative-index': 'error',
			'unicorn/prefer-node-protocol': 'error',
			'unicorn/prefer-number-properties': 'error',
			'unicorn/prefer-optional-catch-binding': 'error',
			'unicorn/prefer-prototype-methods': 'error',
			'unicorn/prefer-reflect-apply': 'error',
			'unicorn/prefer-regexp-test': 'error',
			'unicorn/prefer-set-has': 'error',
			'unicorn/prefer-spread': 'error',
			'unicorn/prefer-string-replace-all': 'error',
			'unicorn/prefer-string-slice': 'error',
			'unicorn/prefer-string-starts-ends-with': 'error',
			'unicorn/prefer-string-trim-start-end': 'error',
			'unicorn/prefer-switch': 'error',
			'unicorn/prefer-ternary': 'error',
			'unicorn/prefer-type-error': 'error',
			'unicorn/relative-url-style': 'error',
			'unicorn/require-array-join-separator': 'error',
			'unicorn/require-number-to-fixed-digits-argument': 'error',
			'unicorn/require-post-message-target-origin': 'error',
			'unicorn/string-content': 'error',
			'unicorn/throw-new-error': 'error',

			// TypeScript rules
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/prefer-includes': 'error',
			'@typescript-eslint/no-magic-numbers': [
				'warn',
				{
					ignoreEnums: true,
					ignoreArrayIndexes: true,
					ignore: [-1, 0, 0.1, 0.5, 0.75, 1, 1.5, 2, 9, 100],
				},
			],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-for-in-array': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/prefer-as-const': 'error',
			'@typescript-eslint/prefer-optional-chain': 'error',
			'@typescript-eslint/unified-signatures': 'error',
		},
	},
	...compat.extends('next/core-web-vitals'),
];

export default config;
