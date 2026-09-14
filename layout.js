import "./globals.css";

export const metadata = {
  title: "Fish the Fifty",
  description: "Fish the state. Complete the challenge. Explore fishing adventures across all 50 states.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
