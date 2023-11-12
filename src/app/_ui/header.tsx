"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

const links = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export function Header() {
    const pathname = usePathname();
    return (
        <header className="sticky top-0 w-full h-16 flex items-center justify-between bg-black/80 backdrop-blur z-50 border-b border-neutral-800 px-6">
            <div>
                <Link href="/">
                    <Logo />
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
