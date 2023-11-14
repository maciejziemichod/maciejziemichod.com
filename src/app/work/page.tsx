import Image from "next/image";

export default function Page() {
    const projects = [
        {
            name: "Northwestern Media",
            description:
                "I was responsible for investigation of the rebuild process to make sure we keep everything working and the one by one website migration goes smoothly. Rebuild involved content migration, changing hosting provider, frontend refresh, maintaining endpoints for mobile apps and rethinking integration with Node servers and Streamguys. I also implemented custom client-side navigation and helped with React radio and audio players.",
            link: "https://www.myktis.com/",
            image: "/nwm.png",
        },
        {
            name: "Huumans",
            description:
                "As lead developer of this project I was helping with and reviewing every part of the application. I wrote documentation and architected reports and users tiers systems. The project involved a lot of communication with client and external integrations. React with TypeScript and Chart.js were used to create custom admin dashboards and interactive widgets for app users.",
            link: "https://app.huumans.io/",
            image: "/huumans.png",
        },
        {
            name: "Columbia Threadneedle Investments",
            description:
                "It was a merge of two big financial websites - CTI and BMO. It was my responsibility to prepare and lead the process and I managed to organise it well enough that there were no big problems on our way and the multisite didn't become slower",
            link: "https://www.columbiathreadneedle.co.uk/en/intm/",
            image: "/cti.png",
        },
        {
            name: "Embraer Webinar Centre",
            description:
                "WordPress based platform for recorded and live webinars. It includes custom integration with Clickmeeting platform where client can host their webinars and provide the access on the website.",
            link: "https://events.embraercommercialaviation.com/",
            image: "/embraer.png",
        },
        {
            name: "Lux Research",
            description:
                "I created new components and then rebranded the website, which was created with Hubspot CMS.",
            link: "https://www.luxresearchinc.com/",
            image: "/lux.png",
        },
        {
            name: "Expleo",
            description:
                "I was responsible for creating frontend components and leaded the rebuild of the landing page. The new landing page has semi-full page transitions created with GSAP.",
            link: "https://expleo.com/global/en/",
            image: "/expleo.png",
        },
        {
            name: "VIP$ Coin",
            description:
                "The main highlight of this project is that it was finished in just a few days as the timeline was very tight.",
            link: "https://www.vipscoin.com/",
            image: "/vipscoin.png",
        },
        {
            name: "BMO GAM",
            description:
                "I've helped during the website replatform. It involved migrating from Elementor version 2 to 3 which introduced many breaking changes. Soon after the european BMO was merged with CTI.",
            link: "https://www.bmogam.com/",
            image: "/bmo.png",
        },
        {
            name: "Jensen Investment Management",
            description:
                "On my first project as professional developer I was thrown in at the deep end. The project was about migrating everything from Kurtosys platform built on top of WordPress and Elementor to a different hosting with different major Elementor version. I had to fill in the gaps of missing plugins from the previous platform and was mostly the only dev on the project. I had the opportunity prove my value and it turned out great - I was promoted to lead developer after about 3 months.",
            link: "https://www.jenseninvestment.com/",
            image: "/jensen.png",
        },
    ];

    return (
        <main className="max-w-4xl mx-auto px-6 py-12 sm:py-24">
            <h1 className="text-4xl font-extrabold text-white">Projects</h1>
            <p className="pt-6">
                List of all of my commercial projects (for side projects go to
                my GitHub).
            </p>

            <div className="py-8">
                {projects.map(({ name, description, link, image }, index) => (
                    <div
                        key={name}
                        className="flex flex-col sm:flex-row gap-8 first:pt-0 pt-20 items-start"
                    >
                        <Image
                            className="rounded-md sm:w-80 object-contain"
                            src={image}
                            alt={`${name} website.`}
                            width={574}
                            height={344}
                            priority={index < 2}
                        />
                        <div>
                            <h2 className="text-xl text-white">{name}</h2>
                            <p className="pt-2">{description}</p>
                            <a
                                href={link}
                                target="_blank"
                                className="mt-4 text-sm text-center block sm:inline-block border border-neutral-800 rounded-lg bg-black px-6 py-2 text-white transition-colors hover:bg-neutral-900"
                            >
                                Visit
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
