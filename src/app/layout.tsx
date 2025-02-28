import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noir V2.0",
  description: "More functionality and modern",
};

import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

const myColor: MantineColorsTuple = [
  "#effde7",
  "#e1f8d4",
  "#c3efab",
  "#a2e67e",
  "#87de58",
  "#75d93f",
  "#6bd731",
  "#59be23",
  "#4da91b",
  "#3d920d",
];
const theme = createTheme({
  colors: {
    myColor,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased overflow-x-hidden`}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
