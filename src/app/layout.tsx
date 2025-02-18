import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Explainer",
  description: "A web application that explains code snippets in plain English",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#121212] min-h-screen">{children}</body>
    </html>
  );
}
