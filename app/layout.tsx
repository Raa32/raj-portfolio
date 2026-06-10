import type { Metadata } from "next";
import { Anton, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { StoreProvider } from "@/components/StoreProvider";
import SkipLink from "@/components/ui/SkipLink";
import ViewToggle from "@/components/ui/ViewToggle";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rxj.life"),
  title: "Raj Sahu, Software Engineer",
  description:
    "I build the infrastructure software runs on, and I know how to support the people who use it. Software engineer in Athlone, Ireland.",
  openGraph: {
    title: "Raj Sahu, Software Engineer",
    description:
      "I build the infrastructure software runs on, and I know how to support the people who use it.",
    url: "https://rxj.life",
    siteName: "Raj Sahu",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Sahu, Software Engineer",
    description:
      "I build the infrastructure software runs on, and I know how to support the people who use it.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-bg text-white antialiased`}
      >
        <StoreProvider>
          <SkipLink />
          <ViewToggle />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
