# Hiring content review

Reviewed 27 September 2026. No deployment performed.

## Changes

- Updated hero, About, Experience and contact copy while retaining the existing typography, colours, portrait components, responsive classes and reveal effects.
- Replaced the four-year claim with two years, removed the duplicate About counter, and aligned metadata and the generated social image with full-stack positioning.
- Featured SwiftDU, Success Chemist, SBP Hotel and MACSI. Kept CarXSailor and Ese Fabrics in a compact More projects area with their existing case-study URLs.
- Added SwiftDU and Success Chemist case studies and a reusable, explicitly labelled workflow summary. Used the existing SwiftDU presentation asset without portraying it as a capture of the current live site.
- Replaced generic featured-project outcomes with concrete workflows and supported results. Removed the older Gemini description from CarXSailor because the current public product describes requirements filtering and weighted ratings.
- Updated the existing crawlability verification script for the new copy and image fallback.

## Evidence and link checks

- Read and visually inspected `public/resume.pdf`. It lists SBP Hotel from **10/2025**, the agency internship from **04/2025–09/2025**, SwiftDU's **150 student users**, **31 taskers**, and **over ₦1 million in first-month order value**, and Success Chemist's embeddings and semantic search. These match the supplied latest-résumé details. The PDF was preserved unchanged. There is no `public/Eseosa Osayi.pdf` on disk to compare with the IDE tab.
- `https://swiftdu.org` returned HTTP 200 with an operations-suspended notice. Portfolio links and status copy make this clear.
- The final user-confirmed Success Chemist URL is `https://chemist-software.vercel.app`, verified HTTP 200. It is linked from the card and case study; the unavailable notice was removed. The unchanged résumé still contains the earlier `succcesschemist.vercel.app` URL.
- `https://sbphotel.com` returned HTTP 200. Public content shows room prices, amenities, date and guest availability search, services and reservation/contact routes; the résumé additionally confirms FAQ and local-attraction pages.
- `https://macsi.vercel.app` returned HTTP 200. The public campaign funds uniforms made by local tailors. Donation options are ₦4,500, ₦9,000, ₦22,500 or another amount, followed by a prepared WhatsApp message and team-led payment arrangements. The wider educational-materials mission comes from the résumé and supplied brief.
- CarXSailor and Ese Fabrics returned HTTP 200 and remain accessible as additional projects. No external forms, payments or messages were submitted.

## Validation

- `npm.cmd run lint`: passed after removing temporary audit tools and scripts.
- `npm.cmd run build`: passed, including TypeScript and static generation of all six case studies.
- `node scripts/verify-crawlability.mjs http://localhost:3001`: passed for ordinary and Googlebot user agents, including content, links, one H1, metadata, Person JSON-LD, robots.txt and all six sitemap project entries.
- Desktop/mobile visual inspection and interactive navigation testing remain incomplete: the computer-use tool reported no connected apps or browsers. Responsive markup was reviewed, but this does not establish rendered layout correctness.

## Confirmation still needed

- Success Chemist: product screenshots, project dates and implementation stack remain unprovided. The card and case study use labelled brand artwork based on the live site's pill logo, alongside the confirmed workflow summary. This is not represented as a product screenshot.
- Winners Foundation School: removed the part-time role at the user's request.
- The résumé is consistent with the latest details supplied in the request, but no separate newer approved PDF was available for a version comparison.

An unrelated change to `public/dp.jpg` appeared during the work and was left untouched.
