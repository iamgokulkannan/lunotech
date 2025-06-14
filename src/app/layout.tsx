import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SpaceBackground from "@/components/ui/SpaceBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LunoTech - #1 Website Development & Design Company in India | Custom Web Solutions",
  description: "India's top website development company. Expert in custom website design, responsive web development, e-commerce solutions, and professional web applications. Get a stunning, high-performance website that ranks on Google. Free consultation available.",
  keywords: "website development company, website design company, web development services, custom website design, professional website development, responsive website design, e-commerce website development, website development agency, best website developers, website design and development, web application development, website maintenance services, SEO friendly website development, modern website design, website development cost, website development company in India, website design services, website development solutions, website redesign services, website development experts",
  authors: [{ name: "LunoTech" }],
  creator: "LunoTech",
  publisher: "LunoTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lunotech.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/images/logo/logo.png",
        sizes: "any",
      },
      {
        url: "/images/logo/logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/images/logo/logo.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    apple: [
      {
        url: "/images/logo/logo.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    title: "LunoTech - #1 Website Development & Design Company in India | Custom Web Solutions",
    description: "Transform your online presence with India's leading website development company. Expert in custom website design, responsive web development, and e-commerce solutions. Get a stunning, high-performance website that ranks on Google.",
    url: "https://lunotech.in",
    siteName: "LunoTech",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "LunoTech - India's Leading Website Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LunoTech - #1 Website Development & Design Company in India",
    description: "Transform your online presence with India's leading website development company. Expert in custom website design, responsive web development, and e-commerce solutions.",
    images: ["/images/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none">
      <head>
        <style>{`
          #__next-build-watcher {
            display: none !important;
          }
          .nextjs-toast-errors-parent {
            display: none !important;
          }
          [data-nextjs-dialog-overlay] {
            display: none !important;
          }
          [data-nextjs-dialog] {
            display: none !important;
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <SpaceBackground />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
