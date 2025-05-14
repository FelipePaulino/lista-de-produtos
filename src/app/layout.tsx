import type { Metadata } from "next";

import { CounterContextProvider } from "@/modules/product/contexts";

import { Toaster } from "@/shared/components/external";
import { Header, Footer } from "@/shared/components/internal";

import "./globals.css";

export const metadata: Metadata = {
  title: "Produtos CRUD | Felipe Paulino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <CounterContextProvider>
        <body className="antialiased">
          <Toaster />

          <Header />

          <main className="container mx-auto px-4 py-10">{children}</main>

          <Footer />
        </body>
      </CounterContextProvider>
    </html>
  );
}
