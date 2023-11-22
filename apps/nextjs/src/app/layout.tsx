import { title, description } from "@akshitkrnagpal/data";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { WEBSITE_URL } from "@/constants";

const font = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title,
  description,
  openGraph: {
    type: "website",
    title,
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
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${font.className} h-full bg-gray-100 bg-[length:2.5rem_2.5rem] bg-[-0.5rem_-0.5rem] bg-[radial-gradient(#999_1px,_transparent_0)]`}
      >
        {children}
      </body>
    </html>
  );
}
