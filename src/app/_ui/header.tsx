"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export function Header() {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 w-full h-16 flex items-center justify-between bg-black/80 backdrop-blur z-40 border-b border-neutral-800 px-6">
            <div>
                <Link href="/">
                    <span className="sr-only">Maciej Ziemichod logotype</span>
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 500 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M289 253.904L139 167.301L139 340.506L177.567 318.24L177.567 235.101L249.567 276.67L289 253.904Z"
                            fill="#ffffff"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M362 341.506L362 168.301L212 254.904L250.567 277.17L322.567 235.601L322.567 318.74L362 341.506Z"
                            fill="#ffffff"
                        />
                        <path
                            d="M50.9937 135.104L250 20.2073L449.006 135.104V364.896L250 479.793L50.9937 364.896V135.104Z"
                            stroke="#ffffff"
                            strokeWidth="35"
                        />
                    </svg>
                </Link>
            </div>
            <nav>
                <ul className="flex gap-4">
                    {links.map(({ name, href }) => (
                        <li key={name}>
                            <Link
                                href={href}
                                className={clsx("hover:text-white transition", {
                                    "text-white": pathname === href,
                                })}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
