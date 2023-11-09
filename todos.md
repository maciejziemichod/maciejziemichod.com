## notes

-   https://nextjs.org/learn/foundations/about-nextjs
-   move from netlify to vercel
-   analytics
-   list out more recommendations
-   https://nextjs.org/docs/getting-started/project-structure
-   add my twitter
-   shadcn?
-   go through:
    -   https://nextjs.org/docs/app/building-your-application/optimizing/images
    -   https://nextjs.org/docs/app/building-your-application/optimizing/fonts
    -   https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia
    -   https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts
    -   IN THE END: whole nextjs, react and tailwind docs

---

## designs

-   img {
    will-change: filter;
    transition: filter 300ms;

        &:hover {
            filter: drop-shadow(0 0 2em #61dafbaa);
        }

    }

-   image background gradient like vercel logo in starter nextjs after:bg-gradient-conic
-   https://typehero.dev/
-   https://vercel.com/home
-   https://nextjs.org/
-   https://stripe.com/
-   https://ryanhanson.dev/ (look for more macos like websites and at apple.com)
-   https://maxschmitt.me/
-   https://tolin.ski/
-   https://wesbos.com/
-   https://leerob.io/
-   https://ui.shadcn.com/
-   https://tx.shadcn.com/
-   https://workos.com/

---

## parts:

-   website itself
-   Vercel geist font pod moją strone
-   list of recommended dev resources
-   fighting sea monsters
-   some sentence from this as part of my website:
    To me, the biggest benefit of Knowledge Based Games is when you apply a similar approach to life, embracing exploration, perseverance, curiosity and a cultivation of skill, connecting the dots yourself, and so on. Then practising in your everyday life, feeds back into your gaming experience. That's just one of the many things I love about gaming.
-   blog
    -   description how to do stuff in nextjs, current navigation item, folders structure, redirect from homepage
    -   typescript weirdness
        -   "in" doesn't work. For example object with keys, function returning one from the properties or default one using "in" operator doesn't work without type assertion of the key inside the if statement with in. Or custom type guard function with "key is keyof typeof object"
        -   An index signature parameter type cannot be a literal type or a generic type
    -   custom error messages in jest:
        ```
        try {
            expect(errors.length).toBe(0);
        } catch (_) {
            throw new Error(
                `Expected 0 errors during parsing, got ${
                    errors.length
                } instead:\n${errors.join("\n")}`,
            );
        }
        ```
-   void tweets
