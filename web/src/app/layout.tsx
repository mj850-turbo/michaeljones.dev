import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Michael Jones — Portfolio",
  description: "Frontend‑leaning full‑stack developer in Fayetteville, AR.",
  metadataBase: new URL("https://michaeljones.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-dvh flex flex-col bg-background text-foreground`}>
        <Nav />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
