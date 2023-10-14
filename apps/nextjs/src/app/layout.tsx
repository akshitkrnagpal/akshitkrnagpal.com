import { title, description } from "@akshitkrnagpal/data";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const font = Raleway({ subsets: ["latin"] });

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
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
