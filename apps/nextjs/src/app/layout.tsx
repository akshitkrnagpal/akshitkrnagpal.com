import { title, description } from "@akshitkrnagpal/data";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Acme } from "next/font/google";

const font = Acme({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    title,
    url: "https://www.akshitkrnagpal.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@akshitkrnagpal",
    creator: "@akshitkrnagpal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
