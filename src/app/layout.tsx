import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/app/_ui/header";
import { Footer } from "@/app/_ui/footer";
import Script from "next/script";
import { SkipToContent } from "./_ui/skip-to-content";

export const metadata: Metadata = {
    title: "Maciej Ziemichod - Full stack developer",
    description: "I'm a passionate full stack developer from Poland.",
    metadataBase: new URL("https://www.maciejziemichod.com"),
    openGraph: {
        title: "Maciej Ziemichod",
        description: "Maciej Ziemichod's personal website",
        images: "/og.png",
        type: "website",
    },
};

const isProduction = process.env.NODE_ENV === "production";
const contentId = "content";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            {isProduction && (
                <Script
                    src="https://analytics.eu.umami.is/script.js"
                    data-website-id="9d3d5a89-7a3c-4ef2-9e7d-1ca450bb455b"
                    strategy="afterInteractive"
                ></Script>
            )}

            <body className="antialiased bg-black text-neutral-400 break-words selection:bg-white/10">
                <SkipToContent id={contentId} />
                <Header />
                <div id={contentId}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
