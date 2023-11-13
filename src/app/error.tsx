"use client";

export default function Error({ reset }: { reset: () => void }) {
    return (
        <main className="flex flex-col items-center justify-center py-24">
            <h2>Something went wrong!</h2>
            <button
                className="mt-4 rounded-lg bg-white px-4 py-2 text-black transition-colors hover:bg-neutral-200"
                onClick={() => reset()}
            >
                Try again
            </button>
        </main>
    );
}
