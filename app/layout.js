import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cooking Bar",
  description: "The amazing recipe app",
};

export default function RootLayout({ children }) {
  let header = (
    <header>
      <Link href={"/"}>
        <h1>The Cooking Bar</h1>
      </Link>
    </header>
  );

  let footer = (
    <footer>
      <p>Made with 💚 </p>
    </footer>
  );

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
