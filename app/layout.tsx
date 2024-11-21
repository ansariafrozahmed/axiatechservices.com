import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/HeaderFooter/Footer";
import AosComp from "@/components/Aos";
import LenisWrapper from "@/components/LenisWrapper";

const FRONTEND = "https://axiatechservices.com";

export const metadata: Metadata = {
  title: "Axia Tech Services",
  description:
    "Web Development. Digital Marketing. SEO. All-in-One Solutions to Elevate Your Business.",
  openGraph: {
    title: "Axia Tech Services",
    description:
      "Web Development. Digital Marketing. SEO. All-in-One Solutions to Elevate Your Business.",
    url: `${FRONTEND}`,
    type: "website",
    images: [
      {
        url: `${FRONTEND}/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: "Axia Tech Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axia Tech Services",
    description:
      "Web Development. Digital Marketing. SEO. All-in-One Solutions to Elevate Your Business.",
    images: [`${FRONTEND}/opengraph.webp`],
  },
  alternates: {
    canonical: `${FRONTEND}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisWrapper>
          <AosComp />
          <Header />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
