import { fixture, html, expect } from "@open-wc/testing";

describe("sanity", () => {
  it("renders", async () => {
    const el = await fixture<HTMLDivElement>(html`<div>Hello</div>`);
    expect(el.textContent).toContain("Hello");
  });
});
