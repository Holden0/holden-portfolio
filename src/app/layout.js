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
  title: "Holden Budiman - UX Designer Portfolio",
  description: "Portfolio showcasing UX design work for web and mobile applications",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: 'Holden Budiman | UX Designer',
    description: 'UX designer specializing in creating seamless user experience for modern web and mobile applications',
    url: 'https://www.holdenbudiman.com/', // Replace with your actual domain
    siteName: 'Holden Budiman Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Replace with your actual image path
        width: 1200,
        height: 630,
        alt: 'Holden Budiman Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holden Budiman | UX Designer',
    description: 'UX designer specializing in creating seamless user experience for modern web and mobile applications',
    images: ['/og-image.jpg'], // Replace with your actual image path
  },
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
