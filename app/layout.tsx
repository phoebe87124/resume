import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaceSmileIcon } from "@heroicons/react/24/outline"

import AppSidebar from '@/app/components/app-sidebar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '鄭筱蓁 | Senior Frontend Developer | 系統設計 x 溝通合作',
  description: 'Senior Frontend Developer with 5+ years of experience in web platform and SaaS development. Specialized in frontend architecture, system design, and technical leadership, with hands-on experience building CRM, CMS, AI, blockchain, and data analytics products.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased text-olive-700`}
    >
      <body className="min-h-full flex">
        <AppSidebar />

        <main className="lg:block hidden ml-64 flex-grow-1">
          {children}
        </main>

        <main className="lg:hidden flex ml-64 flex-col flex-grow-1 justify-center items-center w-full min-h-full gap-3 p-5 text-center">
          <p>
            請切換至電腦版網頁，以達到最佳瀏覽體驗
          </p>
          <FaceSmileIcon className="w-10" />
        </main>
      </body>
    </html>
  );
}
