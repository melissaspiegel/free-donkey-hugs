# VS Code Chat Quickstart

1. Install recommended extensions (VS Code will prompt on open).
2. Open Chat → right-click empty area → enable **Chat History**.
3. Use **Suggested Actions** from `/prompts` (Plan Mode / Create Reusable Components).
4. Prefer fully-qualified tool names (FQNs) for Tools; let VS Code update if prompted.
5. Delegate to Coding Agent when ready; review the PR before merge.
6. Try **Resolve conflicts with AI** (Preview) on a safe branch.

## Testing
- Unit: `pnpm test:snowflake` (Vitest browser runner).
- E2E:  `pnpm e2e:snowflake` (Playwright).

## Scripts to add to package.json
```json
{
  "scripts": {
    "test:snowflake": "vitest -c vitest.snowflake.config.ts",
    "test:snowflake:ui": "vitest -c vitest.snowflake.config.ts --ui",
    "e2e:snowflake": "playwright test -c playwright.snowflake.config.ts",
    "ci:snowflake": "pnpm test:snowflake && pnpm e2e:snowflake"
  }
}
```
