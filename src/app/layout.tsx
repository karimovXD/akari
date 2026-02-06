import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/providers/theme.provider";
import { SITE_NAME, WEBSITE_LINK } from "@/constants/seo.constans";
import { QueryProvider } from "./providers/QueryProvider";
//@ts-ignore
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${SITE_NAME}`,
    default: `${SITE_NAME} — Anime Universe`,
  },
  description: `${SITE_NAME} is a place for anime lovers — discover series, characters, and stories brought to life with elegant design and detail.`,
  keywords: [
    `${SITE_NAME}`,
    "anime",
    "anime website",
    "anime collection",
    "anime reviews",
    "anime characters",
    "Japanese animation",
    "otaku culture",
    "next js",
  ],
  openGraph: {
    title: `${SITE_NAME} — Anime Universe`,
    description: `Discover the world of ${SITE_NAME} — a beautifully designed anime website inspired by Japanese animation and storytelling.`,
    url: `${WEBSITE_LINK}`,
    siteName: `${SITE_NAME}`,
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL(`${WEBSITE_LINK}`),
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Anime Universe`,
    description: `${SITE_NAME} is a modern anime space inspired by Japanese animation and culture.`,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/logos/website-logo/akari-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
