import Image from "next/image";

type SimpleCardProps = {
    link: string;
    image: string;
    alt: string;
    title: string;
    description: string;
    stack: string[];
};

export function SimpleCard({
    link,
    image,
    alt,
    title,
    description,
    stack,
}: SimpleCardProps) {
    return (
        <div className="border border-transparent rounded-md p-2 -m-2 hover:border-neutral-800 transition-colors">
            <a href={link} target="_blank">
                <Image
                    className="rounded-md w-full"
                    src={image}
                    alt={alt}
                    width={574}
                    height={344}
                    priority={true}
                />
                <h3 className="text-white text-lg pt-4">{title}</h3>
                <p className="pt-2">{description}</p>
                <p className="text-xs pt-2">{stack.join(" | ")}</p>
            </a>
        </div>
    );
}
