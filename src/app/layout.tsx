import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { getServerContext } from "@remkoj/optimizely-cms-react/rsc";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optimizely CMS Boilerplate - Create Next App",
  description: "Generated by create next app for Optimizely CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { locale } = getServerContext();
  return (
    <html lang={locale ?? "en"}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
