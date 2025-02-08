import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteMart - 優質筆記交易平台",
  description: "發現並交易優質筆記，促進知識共享的最佳平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="notemart-theme"
        >
          <I18nProvider>
            <div className="relative min-h-screen">
              <div className="gradient-background" />
              {/* 裝飾性漂浮元素 */}
              <div className="floating-element w-32 h-32 top-20 left-10" />
              <div className="floating-element w-24 h-24 top-40 right-20" />
              <div className="floating-element w-16 h-16 bottom-20 left-1/4" />
              <div className="relative z-10">
                <Header />
                <main>{children}</main>
              </div>
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
