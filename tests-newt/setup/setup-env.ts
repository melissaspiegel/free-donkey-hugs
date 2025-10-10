// Global test env setup for browser runner
import "mdui/components/icon.js";
import "mdui/components/button.js";
// Optional: start MSW for API mocking in unit tests
try {
  const { worker } = await import("../../msw-snowflake/browser");
  beforeAll(async () => { await worker.start({ onUnhandledRequest: "bypass" }); });
  afterAll(async () => { await worker.stop(); });
} catch (e) {
  // MSW optional; ignore if not present
}
