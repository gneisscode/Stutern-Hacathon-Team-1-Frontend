"use client";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Inter,DM_Sans } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { ContextProvider } from "@/context/Context";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Simple management system" />
        <meta name="title" content="Inventory Management" />
      </head>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <body className={dm_sans.className}>{children}</body>
          </MantineProvider>
        </QueryClientProvider>
      </ContextProvider>
    </html>
  );
}
