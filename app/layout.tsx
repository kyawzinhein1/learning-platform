"use client";

import { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Hydrate on client-side only
  }, []);

  if (!hydrated) {
    return null; // Render nothing until hydrated
  }

  return (
    <html lang="en">
      <body className="px-5 py-4 text-primary">
        <NextUIProvider>
          <Providers>{children}</Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
