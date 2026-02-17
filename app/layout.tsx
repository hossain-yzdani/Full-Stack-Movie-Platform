import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbars from "@/components/main/navbars";
import Footer from "@/components/main/footer";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/KalamehWeb-Light.woff2",
      weight: "400",
      style: "light",
    },
    {
      path: "../public/fonts/KalamehWeb-Medium.woff2",
      weight: "800",
      style: "light",
    },
    {
      path: "../public/fonts/KalamehWeb-Regular.woff2",
      weight: "600",
      style: "light",
    },
  ],
});

export const metadata: Metadata = {
  title: "کیو مووی",
  description: "دانلود و تماشای آنلاین سریال و فیلم های سینمایی روز دنیا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${myFont.className} font-sans antialiased`}>
        <Navbars />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
