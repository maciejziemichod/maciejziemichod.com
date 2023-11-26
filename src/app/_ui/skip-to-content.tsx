type SkipToContentProps = {
    id: string;
};

export function SkipToContent({ id }: SkipToContentProps) {
    return (
        <a
            href={`#${id}`}
            className="opacity-0 pointer-events-none focus:opacity-100 focus:pointer-events-auto fixed top-3 left-3 z-50 text-center block border border-neutral-800 rounded-lg px-6 py-2 text-white bg-neutral-900"
        >
            Skip to content
        </a>
    );
}
