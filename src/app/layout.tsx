import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://brianardhisswara.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brian Ardhisswara | UI/UX Designer & Frontend Developer",
    template: "%s | Brian Ardhisswara",
  },
  description:
    "Personal portfolio of Brian Ardhisswara — UI/UX Designer and Frontend Developer from Malang, Indonesia. Crafting intuitive interfaces and responsive web experiences with modern design systems.",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "Product Designer",
    "Interaction Design",
    "Design Systems",
    "Tailwind CSS",
    "React",
    "Laravel",
    "Figma",
    "Web Development",
    "Portfolio",
    "Malang",
    "Indonesia",
  ],
  authors: [{ name: "Brian Ardhisswara", url: siteUrl }],
  creator: "Brian Ardhisswara",
  publisher: "Brian Ardhisswara",
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
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Brian Ardhisswara — UI/UX Designer & Frontend Developer",
    description:
      "Personal portfolio of Brian Ardhisswara — UI/UX Designer and Frontend Developer from Malang, Indonesia. Crafting intuitive interfaces and responsive web experiences.",
    siteName: "Brian Ardhisswara Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brian Ardhisswara Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Ardhisswara — UI/UX Designer & Frontend Developer",
    description:
      "Personal portfolio of Brian Ardhisswara — UI/UX Designer and Frontend Developer from Malang, Indonesia.",
    images: ["/og-image.png"],
    creator: "@brianardhisswara",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const isDark = theme === "dark";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brian Ardhisswara",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    sameAs: [
      "https://github.com/brianardhisswara",
      "https://read.cv/brianardhisswara",
      "https://dribbble.com/brianardhisswara",
      "https://twitter.com/brianardhisswara",
    ],
    jobTitle: "UI/UX Designer & Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "UI Design",
      "UX Design",
      "Frontend Development",
      "Design Systems",
      "Interaction Design",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Figma",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malang",
      addressCountry: "ID",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Brian Ardhisswara Portfolio",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${varelaRound.className} ${isDark ? "dark" : ""}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
