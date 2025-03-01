"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../providers/theme";
import { Header } from "./header";
import { SchematicProvider } from "@schematichq/schematic-react";
import { SchematicWrapped } from "./schematic-wrapped";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
  if (!publishableKey) {
    throw new Error("Missing Schematic Publishable Key");
  }
  return (
    <ClerkProvider>
      <SchematicProvider publishableKey={publishableKey}>
        <SchematicWrapped>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
          </ThemeProvider>
        </SchematicWrapped>
      </SchematicProvider>
    </ClerkProvider>
  );
}
