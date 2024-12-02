/** @format */

import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB Clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SEarch */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
