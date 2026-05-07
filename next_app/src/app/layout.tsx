import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academia LMS",
  description: "A platform designed for the focused student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light"
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-md antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
