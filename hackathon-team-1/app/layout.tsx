import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MantineProvider } from "@mantine/core";
import { ContextProvider } from '@/context/Context';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inventory Management',
  description: 'Automated management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ContextProvider>
          <body className={inter.className}>{children}</body>
        </ContextProvider>
      </MantineProvider>
    </html>
  );
}
