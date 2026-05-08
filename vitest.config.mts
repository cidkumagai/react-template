import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite-plus';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
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
