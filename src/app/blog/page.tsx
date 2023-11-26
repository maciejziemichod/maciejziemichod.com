import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Maciej Ziemichod",
    description:
        "My thoughts on software development, mainly focused on TypeScript ecosystem.",
};

export default function Page() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-12 sm:py-24">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Coming soon... (I hope)
            </h1>
            <p className="pt-5">
                Upcoming: my Next.js thoughts; TypeScript weirdness; custom
                error messages in Jest.
            </p>
        </main>
    );
}
