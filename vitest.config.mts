import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    globals: true,
    watch: false,
    coverage: {
      provider: "v8",
      include: ["src"],
      exclude: ["**/dist"],
    },
    onConsoleLog: (_log, type) => type !== "stderr",
    setupFiles: ["./tests/setup-test.ts"],
  },
});
