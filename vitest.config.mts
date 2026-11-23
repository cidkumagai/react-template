import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://viteplus.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    include: ['__test__/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    globals: true,
    watch: false,
    coverage: {
      provider: 'v8',
      include: ['src'],
      exclude: ['**/dist', '**/*.d.ts'],
    },
    onConsoleLog: (_log, type) => type !== 'stderr',
    setupFiles: ['__test__/setup-test.ts'],
  },
});
