# Seniors Professional Network — Design & Implementation Guide

Reference for anyone (human or agent) working on this repository.

> **History:** this site was previously *Seniors Business Connect (SBC)* with a
> blue palette and a single-page layout. In August 2026 it was rebranded to
> *Seniors Professional Network (SPN)* and rebuilt around the member directory.
> All `sbc-*` colour tokens and the old `Features.jsx` / `TabbedShowcase.jsx` /
> `MemberDirectory.jsx` components were removed. Do not reintroduce them.

---

## 1. Technical stack

| | |
|---|---|
| Framework | React 19 via Vite 7 |
| Routing | React Router 7 (`BrowserRouter`) |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Fonts | Self-hosted via `@fontsource-variable/*` |
| Hosting | Vercel (SPA rewrite in `vercel.json`), domain on Hostinger |

`framer-motion` and `gsap` remain in `package.json` but are **no longer
imported anywhere**. Animation is now plain CSS (`animate-fade-up`, Tailwind
transitions). Remove both packages if you want a smaller install; they are left
in place only so an older branch still builds.

---

## 2. Brand

The palette is sampled directly from the logo artwork, not chosen alongside it.

| Token | Hex | Where it comes from | Use for |
|---|---|---|---|
| `olive-700` | `#4E5111` | wreath, "SENIORS", left figure | Primary. Buttons, links, headings on light. |
| `olive-800` | `#3E4110` | — | Large dark panels (How it works, newsletter, CTAs). |
| `terra-500` | `#A35E2B` | arc, "NETWORK", right figure | Accent. Secondary buttons, highlights. |
| `terra-600/700` | `#8B4E23` / `#6E3D1C` | — | Accent **text** (eyebrows, company names) — the 500 is too light for small type on white. |
| `ink-900` | `#16150F` | "PROFESSIONAL", centre figure | Headings, footer background. |
| `parchment` | `#FDFDFC` | logo background | Page background. Warmer than pure white; deliberate. |

**The rule that keeps this coherent:** olive is the structural colour, terracotta
is the punctuation. If a section feels muddy, it usually has too much terracotta.

### Contrast

Every foreground/background pair used in the UI clears **WCAG AA (4.5:1)**. This
was verified numerically, not by eye. Two tokens have restrictions:

- `ink-400` (`#94927F`) — **decorative only**: icons, borders, dividers. It is
  2.5:1 on white and must never carry body text or placeholders.
- `ink-500` (`#747260`) — the lightest token permitted for real text.

If you change a colour, re-check the pairs before shipping.

---

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Headings | **Source Serif 4 Variable** | Echoes the classical roman caps of the logo wordmark. Applied automatically to `h1`–`h4` in `index.css`. |
| Body / UI | **Inter Variable** | Chosen for legibility at large sizes. |
| Eyebrows | Inter, uppercase, `tracking-[0.18em]` | Echoes `CONNECT · COLLABORATE · SUPPORT` in the logo. Use the `.eyebrow` class. |

Fonts are **self-hosted**, not loaded from Google Fonts — one fewer third-party
request, no render-blocking round trip, and nothing about the visitor is shared
with a third party just to draw text. Imports live in `src/main.jsx`.

> The previous guide said "never use serif." That applied to the old brand and
> is now reversed: the SPN logo is serif-forward, and the headings follow it.

### Scale

Base body text is **17px**, not 16px, and `lg`/`xl` are nudged up to match
(`tailwind.config.js` → `fontSize`). The primary audience is seniors and the
adult children helping them. Do not shrink this back to save vertical space.
Interactive targets are a minimum of 44px tall (`min-h-[2.75rem]` / `.btn`).

---

## 4. Routes

| Path | Page | Notes |
|---|---|---|
| `/` | `HomePage` | Hero → Needs → Directory preview → About → How it works → Resources → Join |
| `/directory` | `DirectoryPage` | Accepts `?q=`, `?need=`, `?category=` — all shareable |
| `/directory/:slug` | `MemberProfile` | Unknown slug redirects to `/directory` |
| `/resources` | `ResourcesPage` | |
| `/resources/:slug` | `ResourceArticle` | Unpublished or unknown slug redirects to `/resources` |
| `/privacy`, `/terms` | | |
| `*` | | Redirects to `/` |

`vercel.json` rewrites everything to `index.html`. Without it, a direct hit on
`/directory/karen-tyrell` 404s. Don't delete it.

---

## 5. Data

Everything the site displays lives in `src/data/`. There is no CMS and no
database — editing these three files *is* editing the site.

### `members.js`
The roster, plus `CATEGORIES`, and helpers (`membersByCategory`,
`getMemberBySlug`, `displayName`, `searchIndex`).

- **`slug` is a permanent URL.** Renaming one breaks any link already shared.
- `searchIndex()` defines what the directory search matches. Filling in
  `services` and `areasServed` is the single highest-value improvement
  available — it makes members findable by what they *do*, not just their name.
- Optional fields (`title`, `blurb`, `phone`, `website`, `credentials`,
  `franchiseOf`, `areasServed`) degrade gracefully when `null` or empty. The UI
  hides the row rather than showing a blank.
- Members marked `franchiseOf` get an "independently owned and operated" note on
  their profile. Two Heart to Home Meals franchises are in the network and
  **must stay visibly distinct** — families need to reach the right one.

### `needs.js`
The "what do you need help with?" situations. Each `key` must match the `needs`
array on members. Adding a need without assigning members to it produces an
empty results page.

### `resources.js`
Articles as structured blocks (`p`, `h2`, `ul`, `callout`) rendered by
`ResourceArticle.jsx` — no markdown dependency. `published: false` hides an
article from the index and 404s its URL, so drafts can live in the repo safely.

**Editorial rule:** existing articles are deliberately evergreen. They make no
claims about programs, costs, benefit amounts, wait times, or law, because those
change and would need re-checking before every deploy. If you add an article
that does make those claims, date it and set a review reminder.

---

## 6. Components

| File | Role |
|---|---|
| `Navbar.jsx` | Sticky, gains a border and blur on scroll. Full-width mobile menu; body scroll locked while open. |
| `Hero.jsx` | Search box routes to `/directory?q=`. Logo mark is the only decoration; `alt=""` because it is decorative. |
| `NeedsGrid.jsx` | 3×3 situational entry points with live member counts. |
| `DirectoryPreview.jsx` | Category counts + a deterministic six-member sample (first member of each category — no reshuffling on render). |
| `MemberCard.jsx` | Shared by directory, preview, and related-members. |
| `About.jsx` | Mission copy, carried over from SBC. Three pillars mirror the logo tagline. |
| `HowItWorks.jsx` | Dark olive panel, three steps. |
| `ResourcesPreview.jsx` | Renders nothing when no articles are published. |
| `JoinUs.jsx` | Newsletter + two CTA cards. |
| `Footer.jsx` | Four columns. Logo is `brightness-0 invert`ed to sit on dark. |

### Member card contact treatment

Phone numbers are shown **in full as text**; email and website are **buttons**.
This is deliberate and worth preserving:

- Plenty of visitors will write a phone number down or dial it from a landline,
  so hiding it behind a "Call" button costs them something real.
- Email and website addresses are long, wrap raggedly inside a card, and made
  the grid look broken. Buttons also give a 44px tap target.
- Full contact details, unabbreviated, are on the profile page.

---

## 7. Accessibility

Not decoration on this site — it is the audience. What is already in place:

- Skip link to `#main` on every page.
- Visible 2px focus ring on all interactive elements (`:focus-visible`).
- Every icon is either `aria-hidden` or has an accessible name.
- Repeated links ("Email", "Website", "Profile") carry `sr-only` context so a
  screen-reader user hears *which* member they belong to.
- Result counts are in an `aria-live="polite"` region.
- Filter chips use `aria-pressed`.
- `prefers-reduced-motion` disables animation and smooth scrolling.
- All text meets WCAG AA.

**Do not** add autoplaying carousels, hover-only affordances, or motion that
cannot be stopped.

---

## 8. Principles for future work

1. **The directory is the product.** Everything else exists to get someone into
   it. If a change adds scroll between a visitor and a member's phone number,
   it needs a good reason.
2. **Never invent member information.** Every field in `members.js` came from
   the member or from Garrett. Do not fill a blank `blurb` with plausible
   marketing copy — these are real businesses and getting it wrong is worse than
   leaving it empty. Empty fields are handled gracefully by design.
3. **Search the repo for `TODO` before deploying.** `members.js` carries a list
   of items awaiting confirmation, including one public-facing placeholder
   (`Heart to Home Meals — [Territory]`) that must not ship as-is.
4. **Keep type large and contrast high.** See §3 and §2.
5. **Plain language.** "Choosing a retirement residence", not "Senior living
   solutions." Write the way someone would say it to a neighbour.
