import Nav from "@/containers/Nav/Nav";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const SFRoundedFont = localFont({
  src: [
    {
      path: "../../fonts/SF-Compact-Rounded-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/SF-Compact-Rounded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/SF-Compact-Rounded-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/SF-Compact-Rounded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Visual Temple",
  description: "Cherish the art you love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${SFRoundedFont.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
