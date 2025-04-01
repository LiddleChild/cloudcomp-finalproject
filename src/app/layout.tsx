import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "../components/providers/NextAuthProvider";
import { getSession } from "../lib/auth/auth-config";

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
  const nextAuthSession = await getSession();

  return (
    <html lang="en">
      <body className={`${notoSansThai.className} antialiased`}>
        <div className="flex flex-col w-screen h-screen bg-ci-cream">
          <NextAuthProvider session={nextAuthSession}>
            {children}
            <Toaster />
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
