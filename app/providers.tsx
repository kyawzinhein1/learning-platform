"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component is mounted
  }, []);

  if (!mounted) {
    return null; // Don't render anything until the component is mounted
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
