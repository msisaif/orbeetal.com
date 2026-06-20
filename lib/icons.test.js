import { describe, it, expect } from "vitest";
import { resolveIcon } from "@/lib/icons";
import { Monitor, Code2 } from "lucide-react";

describe("resolveIcon", () => {
  it("returns a valid lucide icon component", () => {
    expect(resolveIcon("Monitor")).toBe(Monitor);
    expect(resolveIcon("Code2")).toBe(Code2);
  });

  it("returns null for unknown icon names", () => {
    expect(resolveIcon("NotARealIcon")).toBeNull();
    expect(resolveIcon("")).toBeNull();
  });
});
