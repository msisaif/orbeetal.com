"use client";

import dynamic from "next/dynamic";

const BackToTop = dynamic(
  () => import("./BackToTop").then((m) => m.BackToTop),
  { ssr: false }
);

export function BackToTopLazy() {
  return <BackToTop />;
}
