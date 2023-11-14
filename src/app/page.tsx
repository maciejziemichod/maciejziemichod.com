import Link from "next/link";

export default function Home() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-12 sm:py-24">
            <h1 className="text-4xl font-extrabold text-white">
                Maciej Ziemichod
            </h1>
            <p className="pt-6">
                Hi, I'm Maciej Ziemichod, a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    curiosity&nbsp;driven
                </span>{" "}
                full stack developer.
            </p>
            <p className="pt-5">
                My passion lies in building software and digital experiences.
                You can find my full{" "}
                <Link
                    href="/work"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    projects list here
                </Link>
                .
            </p>

            <div className="mt-32 pb-2 relative">
                <div className="absolute bottom-0 -left-4 w-[0.5px] h-24 bg-gradient-to-b from-transparent to-neutral-600"></div>
                <div className="absolute bottom-0 -left-4 w-2/3 h-[0.5px]  bg-gradient-to-l from-transparent to-neutral-600"></div>
                <h2 className="text-white text-2xl font-semibold">
                    Recent work
                </h2>
            </div>

            <div className="mt-32 pb-2 relative">
                <div className="absolute bottom-0 -right-4 w-[0.5px] h-24 bg-gradient-to-b from-transparent to-neutral-600"></div>
                <div className="absolute bottom-0 -right-4 w-2/3 h-[0.5px]  bg-gradient-to-r from-transparent to-neutral-600"></div>
                <h2 className="text-white text-2xl font-semibold">
                    More about me
                </h2>
            </div>
            <p className="pt-5">
                I'm proficient in TypeScript, Node, React ecosystem, PHP and
                WordPress. Rapid adoption and perseverance are my most valuable
                traits.
            </p>
            <p className="pt-5">
                Outside of programming I embrace the joy of exploring life. Too
                many things seem interesting to me, from traveling to games. You
                can{" "}
                <Link
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                    href="/about"
                >
                    read more about me here
                </Link>
                .
            </p>
        </main>
    );
}
