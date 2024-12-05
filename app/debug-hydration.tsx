"use client";

import { useEffect } from "react";

export default function DebugHydration() {
  useEffect(() => {
    console.log("HTML class after hydration:", document.documentElement.className);
  }, []);

  return null;
}
