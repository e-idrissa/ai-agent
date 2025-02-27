"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../providers/theme";
import { Header } from "./header";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}
