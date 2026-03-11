import js from '@eslint/js';

export default [
  {
    // No @typescript-eslint/parser installed; ignore TS/TSX so the JS parser
    // doesn't choke on type annotations and JSX in these files.
    ignores: ['dist/', 'node_modules/', '**/*.ts', '**/*.tsx'],
  },
  js.configs.recommended,
];
