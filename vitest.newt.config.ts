/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests-snowflake/unit/**/*.spec.{ts,tsx}"],
    browser: {
      enabled: true,
      name: "chromium",
      provider: "playwright"
    },
    setupFiles: [
      "tests-snowflake/setup/setup-env.ts",
      "tests-snowflake/setup/setup-dom.ts"
    ],
    globals: true,
    isolate: true,
    restoreMocks: true,
    clearMocks: true,
    mockReset: true,
    cache: { dir: ".vitest-snowflake" },
    reporters: ["default"]
  }
});
