import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noir V2.0",
  description: "More functionality and modern",
};
import { ThemeProvider } from "./components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased overflow-x-hidden`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
