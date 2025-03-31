import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const notoSansThai = Noto_Sans_Thai({ subsets: [] });

export const metadata: Metadata = {
  title: "Spirit Together",
  description: "Let's Spirit Together!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.className} flex flex-col w-screen h-screen bg-ci-cream antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
