import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
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
