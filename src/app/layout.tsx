import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { Header } from "@/app/_ui/header";
import { Footer } from "@/app/_ui/footer";

export const metadata: Metadata = {
    title: "Maciej Ziemichod - Full stack developer",
    description: "I'm a passionate full stack developer from Poland.",
};

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
            <body className="antialiased bg-black text-neutral-400 break-words selection:bg-white/10">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
