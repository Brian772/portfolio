import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brian Ardhisswara",
  description: "Personal portfolio of Brian Ardhisswara",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const isDark = theme === "dark";

  return (
    <html
      lang="en"
      className={`${varelaRound.className} ${isDark ? "dark" : ""}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
