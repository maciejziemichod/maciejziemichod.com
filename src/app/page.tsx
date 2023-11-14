import Link from "next/link";
import { SimpleCard } from "./_ui/simple-card";

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-5">
                <SimpleCard
                    link="https://www.myktis.com/"
                    image="/nwm.png"
                    title="Northwestern Media"
                    description="Rebuild of legacy network of radio stations
                            websites with client-side navigation, mobile apps and node servers."
                    stack={[
                        "React",
                        "Socket.IO",
                        "TypeScript",
                        "PHP",
                        "Node",
                        "WordPress",
                    ]}
                />
                <SimpleCard
                    link="https://app.huumans.io/"
                    image="/huumans.png"
                    title="Huumans"
                    description="Physical, mental and workplace wellbeing web app with diagnostic and reporting tools for employers and useful resources for employees."
                    stack={[
                        "React",
                        "Chart.js",
                        "TypeScript",
                        "PHP",
                        "WordPress",
                    ]}
                />
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
                Outside of programming I embrace the joy of exploring life. I'm
                interested in too many things, from traveling to games. You can{" "}
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
