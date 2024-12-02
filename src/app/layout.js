/** @format */

import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      {/* Header */}
      <Header />

      {/* Navbar */}

      {/* SEarch */}
      {children}
      </body>
    </html>
  );
}
