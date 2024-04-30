import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DefaultFooter, DefaultHeader } from "@/components/globals";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DefaultHeader />
        {children}
        <DefaultFooter />
      </body>
    </html>
  );
}
