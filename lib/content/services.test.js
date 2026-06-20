import { describe, it, expect } from "vitest";
import { getServices, getServicesPageMeta } from "./services.js";

describe("content repository — services", () => {
  it("getServices validates and returns services", async () => {
    const services = await getServices();
    expect(services.length).toBeGreaterThan(0);
    expect(services.every((s) => s.title && s.description && s.icon && s.image)).toBe(true);
  });

  it("getServicesPageMeta returns title and description", async () => {
    const meta = await getServicesPageMeta();
    expect(meta.title.length).toBeGreaterThan(0);
    expect(meta.description.length).toBeGreaterThan(0);
  });
});
