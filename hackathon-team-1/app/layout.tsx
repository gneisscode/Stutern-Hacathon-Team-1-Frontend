"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MantineProvider } from "@mantine/core";
import { ContextProvider } from '@/context/Context';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content='Automated management system'/>
        <meta name="title" content='Inventory Management' />
      </head>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ContextProvider>
          <body className={inter.className}>{children}</body>
        </ContextProvider>
      </MantineProvider>
    </html>
  );
}
