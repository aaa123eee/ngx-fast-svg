import { dirname } from 'path';
import { fileURLToPath } from 'url';
import baseConfig from '../../eslint.config.mjs';
import nx from '@nx/eslint-plugin';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'ngxFastSvg',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'ngx-fast-svg',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/prefer-standalone': 'off',
      // Newly enabled by the typescript-eslint v8 recommended set; was not
      // enforced before the ESLint v9 upgrade. The `expr && action()` short-
      // circuit idiom used in this lib reads as an "unused expression" under
      // the stricter default.
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  ...nx.configs['flat/angular-template'],
];
