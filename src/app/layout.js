import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { customFont, neueFont } from './fonts'  // Add neueFont import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Holden Budiman",
  description: "UX Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${customFont.variable} ${neueFont.variable}`}>
        {children}
      </body>
    </html>
  );
}