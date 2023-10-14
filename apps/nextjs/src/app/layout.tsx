import { title, description } from "@akshitkrnagpal/data";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Acme } from "next/font/google";

const font = Acme({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title,
  description,
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
        <meta property="og:image" content="/og" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
