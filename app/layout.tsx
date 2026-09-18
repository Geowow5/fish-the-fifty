import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fish the Fifty",
  description: "Fish the state. Complete the challenge. Explore fishing adventures across all 50 states.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
