// components/ThemeProvider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <style jsx global>{`
        html,
        body {
          transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </>
  );
}
