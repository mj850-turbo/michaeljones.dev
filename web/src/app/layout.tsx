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
    <html lang="en" className="dark">
      <body className={`antialiased min-h-dvh flex flex-col bg-background text-foreground relative`}>        
        {/* Background layers: gradient + subtle noise */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 [background:linear-gradient(to_bottom,#0A1931,rgba(10,25,49,0.98))]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_10%_-10%,#4A7FA7a6_0%,transparent_60%),radial-gradient(800px_400px_at_90%_-10%,#B3CFE566_0%,transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.06] mix-blend-overlay bg-[url('/noise.svg')]"
        />

        <Nav />
        <main className="flex-1 container mx-auto px-4 py-10 sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
