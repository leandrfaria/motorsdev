import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "./components/header";



export const metadata: Metadata = {
  title: "Motors Dev",
  description: "Sua oficina especializada!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
