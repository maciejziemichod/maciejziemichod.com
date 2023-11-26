import { Metadata } from "next";

export const metadata: Metadata = {
    title: "maciejziemichod.com tech stack",
    description:
        "Inspirations and technologies used to build maciejziemichod.com",
};

export default function Page() {
    const inspirations = [
        "https://antfu.me/",
        "https://nextjs.org/",
        "https://vercel.com/home",
        "https://paco.me/",
        "https://nexxel.dev/",
        "https://zenorocha.com/",
        "https://ui.shadcn.com/",
        "https://cherupil.com/",
        "https://brittanychiang.com/",
        "https://maxschmitt.me/",
        "https://ryanhanson.dev/",
        "https://leerob.io/",
        "https://alirezasamadi.com/",
        "https://tolin.ski/",
        "https://wesbos.com/",
        "https://workos.com/",
        "https://tailwindcss.com/",
        "https://stripe.com/",
        "https://typehero.dev/",
    ];

    return (
        <main className="max-w-2xl mx-auto px-6 py-12 sm:py-24">
            <h1 className="text-4xl font-extrabold text-white">
                About this website
            </h1>
            <p className="pt-6">
                Self designed on the go and coded in{" "}
                <a
                    href="https://www.lazyvim.org/"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    LazyVim
                </a>
                . Built with{" "}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    Next.js
                </a>
                ,{" "}
                <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    TypeScript
                </a>{" "}
                and{" "}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    Tailwind CSS
                </a>
                . Deployed with{" "}
                <a
                    href="https://vercel.com/home"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    Vercel
                </a>
                . All text is set in the{" "}
                <a
                    href="https://vercel.com/font"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    Geist typeface
                </a>
                . You can see{" "}
                <a
                    href="https://github.com/maciejziemichod/maciejziemichod.com"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    the code here
                </a>
                .
            </p>

            <p className="pt-5">List of inspirations:</p>
            <ul>
                {inspirations.map((link) => (
                    <li key={link} className="pt-1">
                        <a
                            href={link}
                            target="_blank"
                            className="text-white border-b border-neutral-400 hover:border-white transition"
                        >
                            {new URL(link).hostname}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
