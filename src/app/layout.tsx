import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { Header } from "@/app/_ui/header";
import { Footer } from "@/app/_ui/footer";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
            <body className="antialiased bg-black text-neutral-400 break-words">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
