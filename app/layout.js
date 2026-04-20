import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rakesh Roushan Arya | AI/ML Engineer Portfolio",
  description:
    "Personal portfolio of Rakesh Roushan Arya — Aspiring AI/ML Engineer building intelligent systems with Python & Data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
