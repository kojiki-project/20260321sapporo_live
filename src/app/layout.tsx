import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "ACOUSTIC 2MAN LIVE | 鴨頭嘉人 × マミヨ",
  description: "2026.3.21 開催！鴨頭嘉人とマミヨによるアコースティック2マンライブ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
