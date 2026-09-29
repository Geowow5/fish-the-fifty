import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fish the Fifty",
  description: "Fish the state. Complete the challenge. Explore fishing adventures across all 50 states.",
  other: {
    "impact-site-verification": "2786409d-c42f-4c4a-b056-0f299b54ddb6",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
