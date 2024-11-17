import js from '@eslint/js';
import globals from "globals";
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import airbnbBase from "eslint-config-airbnb";
import airbnbReact from "eslint-config-airbnb";
import airbnbReactHooks from "eslint-config-airbnb";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'react-hooks': eslintReactHooks,
            react: eslintReact,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin
        }
    },
    {
        ignores: ['node_modules', 'dist', 'eslint.config.js']
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2022
            },
            parserOptions: {
                project: ['./tsconfig.app.json', './tsconfig.node.json']
            }
        }
    },
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            ...airbnbBase.rules,
            ...airbnbReact.rules,
            ...airbnbReactHooks.rules,
            ...eslintConfigPrettier.rules,
            'prettier/prettier': 'error', // Проверка Prettier как правило ESLint
            '@typescript-eslint/no-unused-expressions': ['error', {
                allowShortCircuit: true, // Разрешить short-circuit выражения
                allowTernary: true, // Разрешить тернарные операторы
                allowTaggedTemplates: true, // Разрешить шаблонные строки
            }],
            'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
            'import/prefer-default-export': 'off',
            'no-console': 'warn'
        }
    }
    );
