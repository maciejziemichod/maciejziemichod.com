export default function Page() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-12 sm:py-24">
            <h1 className="text-4xl font-extrabold text-white">About me</h1>

            <p className="pt-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Reach me
                </span>{" "}
                at{" "}
                <a
                    href="https://twitter.com/maciejziemichod"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    @maciejziemichod
                </a>
                ,{" "}
                <a
                    href="mailto:devziemichod@gmail.com"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    devziemichod@gmail.com
                </a>{" "}
                or{" "}
                <a
                    href="https://www.linkedin.com/in/maciej-ziemich%C3%B3d-b64753178/"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    LinkedIn
                </a>
                .
            </p>

            <p className="pt-8">
                By accident I stumbled upon a{" "}
                <a
                    href="https://www.youtube.com/watch?v=tkv05ZO7d8I"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    YouTube video
                </a>{" "}
                and there I found a great comment that strongly resonates with
                my approach to life:
            </p>
            <blockquote className="italic my-4 pl-4 border-l-2 border-neutral-800">
                <p>
                    &quot;To me, the biggest benefit of Knowledge Based Games is
                    when you apply a similar approach to life, embracing
                    exploration, perseverance, curiosity and a cultivation of
                    skill, connecting the dots yourself, and so on. Then
                    practising in your everyday life, feeds back into your
                    gaming experience. That&apos;s just one of the many things I
                    love about gaming.&quot;
                </p>
            </blockquote>

            <p className="pt-4">
                One of the coolest side projects I ever did was{" "}
                <a
                    href="https://github.com/maciejziemichod/interpreter-in-typescript"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    TypeScript interpreter
                </a>{" "}
                for Monkey programming language. It was really fun to get a
                grasp of how interpreters work and I plan read follow up book{" "}
                <a
                    href="https://compilerbook.com/"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    &quot;Writing A Compiler In Go&quot;
                </a>
                .
            </p>

            <p className="pt-8">
                In my career as a full stack developer I had to quickly adapt to
                various technologies, I was the guy that did the hard/unusual
                tasks. Most of stuff I&apos;ve worked on were in TypeScript,
                Node, React, PHP or WordPress. Here&apos;s a list of relevant
                keywords in random order:
            </p>
            <p className="pt-2 text-xs">
                TypeScript | JavaScript | Node | PHP | React | WordPress | Vue |
                Socket.IO | Chart.js | LearnDash | Elementor | GTM | Next.js |
                Nuxt.js | Tailwind&nbsp;CSS | Sass | Hubspot&nbsp;CMS | GSAP |
                Svelte | Golang | Java | AEM | CSS | HTML | Twig | Redux | Jest
                | React&nbsp;Testing&nbsp;Library | Vuex | Cheerio | Express |
                NestJS | MySQL | Figma | Bootstrap | Git | Parcel | Webpack |
                Vite | GA | Hotjar | jQuery | PM2 | Pardot | PAAPI5
            </p>

            <p className="pt-8">
                I have made a reusable{" "}
                <a
                    href="https://github.com/maciejziemichod/v-tooltip"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    custom directive
                </a>{" "}
                for Vue 3, which makes adding tooltips easy.
            </p>

            <p className="pt-8">
                Currently I&apos;m really into Vim, Golang and LeetCode. For
                those interested,{" "}
                <a
                    href="https://adventofcode.com/"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    Advent of Code
                </a>{" "}
                is a great, interactive alternative to LeetCode.
            </p>

            <p className="pt-8">
                I enjoy quality memes, tea, dark modes and music. Because of my
                passion for learning I suffer from chronic lack of time.
            </p>

            <p className="pt-8">
                Previous versions of my{" "}
                <a
                    href="https://github.com/maciejziemichod/portfolio"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    personal website
                </a>{" "}
                and{" "}
                <a
                    href="https://github.com/maciejziemichod/digital-garden"
                    target="_blank"
                    className="text-white border-b border-neutral-400 hover:border-white transition"
                >
                    blog
                </a>{" "}
                can be found on my GitHub.
            </p>
        </main>
    );
}
