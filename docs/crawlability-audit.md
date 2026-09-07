# Crawlability audit — 7 September 2026

## Finding and before/after

The reported “only Eseosa Osayi” raw response was **not reproduced**. Before
editing, both the live homepage and a local production build contained 4,821
characters of normalized body text after removing scripts, styles and tags.
The live Googlebot response contained the same text. This includes the headline,
introduction, all three projects and summaries, about, experience, technologies,
and contact links. Matches were ordinary HTML, not React's serialized payload.

The existing architecture already server-renders the homepage, Works,
PortfolioSections, resume link and project case studies. The only Client
Components are navigation, scroll reveals and back-to-top controls. There are no
mounted gates, SSR-disabled dynamic imports, browser-only data fetching, custom
loading/Suspense gates, middleware/proxy files, or effect-inserted portfolio text.
Client Components themselves were not the cause.

Confirmed problems:

- Metadata, canonical URLs, robots declarations and sitemap URLs used
  `https://mreseosa.space`, despite the requested production domain being `.com`.
- ScrollReveals assigned persistent `opacity: 0` to entire sections after
  hydration, waiting for IntersectionObserver callbacks. This can leave content
  hidden if the observer/animation fails or no scrolling occurs. This affects
  browser presentation, not the initial raw response.
- Global `content-visibility: auto` deferred rendering of offscreen sections,
  including case studies. It does not remove HTML, but was removed to make
  portfolio text independent of skipped rendering during extraction.
- Mobile navigation required JavaScript, although portfolio content, resume and
  contact links were already present without it.
- Production Cloudflare returns a managed robots file instead of the app's
  expected declaration. It omits the sitemap and explicitly disallows Amazonbot,
  Applebot-Extended, Bytespider, CCBot, ClaudeBot,
  CloudflareBrowserRenderingCrawler, Google-Extended, GPTBot and
  meta-externalagent. Its wildcard rule allows crawling, with content signals
  `search=yes,ai-train=no,use=reference`. These are separate from Next.js settings.

After the changes, the same substantive portfolio content remains server-rendered.
New HTML includes Person JSON-LD and a no-JavaScript mobile navigation fallback.
Metadata and discovery endpoints use `.com`. Content stays visible by default;
only finite animations alter its presentation.

The exact cause of a particular fetcher's name-only extraction remains unknown
without its original response, user agent and extraction method. The evidence
does not support claiming that meaningful server HTML was absent.

## Files changed

| File | Change |
| --- | --- |
| `data/site.ts` | Shared production URL, professional title and concise description. |
| `app/layout.tsx` | Correct metadataBase, canonical, author URL, title, description, Open Graph and Twitter metadata; remove keyword list; reuse existing generated preview image. |
| `app/page.tsx` | Server-rendered Person JSON-LD with the existing GitHub and LinkedIn URLs; safely escape `<`. |
| `app/projects/[slug]/page.tsx` | Use the shared production URL for project metadata; retain static data, unique titles/descriptions, canonicals and cover images. |
| `app/robots.ts` | Correct host and sitemap domain; retain public crawling allowance. |
| `app/sitemap.ts` | Correct domain for homepage and all three actual case-study routes. |
| `app/components/ScrollReveals.tsx` | Feature-detect animation APIs; eliminate persistent inline hiding; retain 700ms fade/translation animation and cleanup; trigger just before viewport entry. |
| `app/globals.css` | Remove offscreen rendering deferral and estimated section heights. |
| `app/components/MobileMenu.tsx` | Add semantic mobile navigation shown only without JavaScript. |
| `scripts/verify-crawlability.mjs` | Repeatable curl assertions excluding script/style payloads, including all project content and metadata. |
| `docs/crawlability-audit.md` | This audit and verification record. |

The existing single H1, section H2s, article H3s, main/header/nav/section/article/
footer structure was retained. Typography, colors, images, layout and hero motion
were not redesigned. Scroll motion remains an enhancement to visible content.
No private/admin routes exist in the app's route inventory. The unrelated,
pre-existing untracked `public/dp.jpg` was not modified.

## Verification

Yarn is not installed in this environment. The project has a package-lock, so the
equivalent package scripts were run with `npm.cmd` (PowerShell blocks npm.ps1):

```text
npm.cmd run lint                                  PASS
npm.cmd run build                                 PASS
npm.cmd run start -- --port 3100                   Ready
node scripts/verify-crawlability.mjs http://localhost:3100
  Homepage, normal agent: 22 body phrases         PASS
  Homepage, Googlebot: 22 body phrases             PASS
  All three case studies, both agents             PASS
  Titles/descriptions/canonicals/OG/Twitter        PASS
  Person JSON-LD, contact and resume links         PASS
  robots.txt and four sitemap URLs                PASS
git diff --check                                  PASS
```

The verifier requires Node.js 22.18+ for importing the existing TypeScript data;
it was run on Node.js 24.20.0. Next.js generated the homepage statically and all
three case studies through generateStaticParams.

Confirmed raw-body phrases include:

- Eseosa Osayi; Full-Stack Engineer; Next.js Developer; AI-powered products.
- Building production-grade software with Next.js,
- SBP Hotel; Make A Child Smile Initiative; Ese Fabrics, and all their summaries.
- Engineering with purpose.; Where I have built.; SwiftDU; Tools I work with.
- Next.js; React; TypeScript; Node.js; MongoDB.
- Let's build something meaningful.; Send me an email.

Case-study checks additionally compare every description, challenge, solution,
technology, contribution and result against `data/projects.ts`.

Headless Microsoft Edge was tested against the production server at widths 1440
and 390, with JavaScript disabled and enabled. At all four combinations, the
important text was readable, all content headings were CSS-visible, no section
container had zero opacity, and no horizontal overflow was detected. The
no-JavaScript mobile navigation was visible; the JavaScript mobile menu opened
and closed. Scrolling to contact revealed its content. Reduced-motion preference
produced zero animations. Removing the Web Animations API left content visible.
Desktop/no-JavaScript and mobile/JavaScript screenshots were visually inspected.

## Remaining deployment and follow-up work

1. Deploy the repository changes. These tests verify the local production build;
   they do not mean the live deployment has been updated.
2. Review Cloudflare's managed robots and bot controls. App code cannot override
   an edge-generated robots response. Ensure the intended public search/retrieval
   crawlers are allowed and the `.com` sitemap declaration reaches clients.
   Training crawlers and search/retrieval crawlers should be considered separately.
   No Cloudflare configuration was changed during this audit.
3. The live apex currently issues a 308 redirect to `https://www.mreseosa.com/`.
   Align hosting redirects with the requested apex canonical, or deliberately
   choose www and update the shared canonical configuration consistently.
4. Recheck live raw HTML, robots and sitemap after deployment, then submit the
   corrected sitemap in the site's search-console account.
5. Removing content-visibility means the browser lays out more offscreen content.
   This favors dependable extraction; measure production performance if needed.
   No Lighthouse or field-performance score was measured in this audit.
6. This was not a full accessibility audit. In particular, the existing mobile
   overlay's focus management could be reviewed separately.

Production endpoints inspected directly with curl:
[homepage](https://mreseosa.com/),
[robots.txt](https://mreseosa.com/robots.txt),
[sitemap.xml](https://mreseosa.com/sitemap.xml).
