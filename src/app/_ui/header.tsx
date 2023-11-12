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
        <header className="fixed w-full h-16 flex bg-black/80 backdrop-blur z-50 border-b border-neutral-800">
            <div>logo</div>
            <nav className="fixed top-16 bottom-0 w-full md:static md:w-auto">
                <ul className="flex">
                    {links.map(({ name, href }) => (
                        <li key={name}>
                            <Link
                                href={href}
                                className={clsx("hover:text-white", {
                                    "text-white": pathname === href,
                                })}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button>mobile</button>
        </header>
    );
}
