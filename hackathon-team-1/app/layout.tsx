"use client";
import "./globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { ContextProvider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Automated management system" />
        <meta name="title" content="Inventory Management" />
      </head>
      <ContextProvider>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <body className={inter.className}>{children}</body>
          </MantineProvider>
        </QueryClientProvider>
      </ContextProvider>
    </html>
  );
}
