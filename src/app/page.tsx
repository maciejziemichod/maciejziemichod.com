import Link from "next/link";
import { SimpleCard } from "./_ui/simple-card";

export default function Home() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-12 sm:py-24">
            <h1 className="text-4xl font-extrabold text-white">
                Maciej Ziemichod
            </h1>
            <p className="pt-6">
                Hi, I&apos;m Maciej Ziemichod, a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    curiosity&nbsp;driven
                </span>{" "}
                full stack developer.
            </p>
            <p className="pt-5">
                My passion lies in building robust solutions and digital
                experiences. You can find my full{" "}
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
                    link="https://app.transcash.eu/"
                    image="/transcash.jpg"
                    alt="Transcash app website."
                    title="Transcash"
                    description="Led the development of Transcash, a platform offering factoring and legal services for transport firms"
                    stack={[
                        "React",
                        "TypeScript",
                        "Redux",
                        "RxJS",
                        "PHP",
                        "Symfony",
                        "RabbitMQ",
                        "Redis",
                        "Node.js",
                        "AWS",
                        "Nginx",
                        "Docker",
                    ]}
                />
                <SimpleCard
                    link="https://app.pactus.eu/"
                    image="/pactus.jpg"
                    title="Pactus"
                    alt="Pactus app website."
                    description="Developed Pactus, a dedicated debt collection app for transport companies"
                    stack={[
                        "TypeScript",
                        "Node.js",
                        "PHP",
                        "Symfony",
                        "RabbitMQ",
                        "Redis",
                        "React",
                        "RxJS",
                        "Redux",
                        "Docker",
                        "Nginx",
                        "AWS",
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
                I'm an adaptable full-stack developer with a knack for solving
                complex problems and delivering efficient solutions. My
                technical expertise spans TypeScript, React, Node.js, PHP,
                Symfony, and AWS, alongside proficiency in tools like Docker and
                WordPress. I thrive on rapid learning and collaboration, with
                experience leading and contributing to projects that drive
                measurable impact.
            </p>
            <p className="pt-5">
                Beyond programming, I immerse myself in life’s diverse
                experiences. From traveling and gaming to exploring new hobbies,
                I embrace curiosity and creativity in everything I do. If you'd
                like to dive deeper into my journey, projects, and interests,
                you can learn{" "}
                <Link
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                    href="/about"
                >
                    more about me here
                </Link>
                .
            </p>
        </main>
    );
}
