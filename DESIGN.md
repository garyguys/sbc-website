# Seniors Professional Network — Design & Implementation Guide

Reference for anyone (human or agent) working on this repository.

> **History:** the previous version of this site had a blue palette and a
> single-page layout. In August 2026 it was rebuilt as *Seniors Professional
> Network (SPN)* around the member directory. The old colour tokens and the
> `Features.jsx` / `TabbedShowcase.jsx` / `MemberDirectory.jsx` components were
> removed. Do not reintroduce them. The network's former name should not appear
> anywhere on the site.
>
> In September 2026 the visual language moved to the "paper cut-out" look
> described in §2a (the `SPN-mockup-cards-v2.html` direction): hard offset
> shadows, 2px ink borders, a marker highlight in headings, and handwritten
> margin notes. The situational "needs" grid and the directory search box were
> retired in favour of browsing by industry.

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

### 2a. The card language

Everything sits on the page like a paper cut-out. The pieces, all defined in
`src/index.css` under `@layer components`:

| Class | What it is |
|---|---|
| `.card` | White, `rounded-2xl`, 2px `ink-900` border, `shadow-hard` (a solid 5px offset, no blur). |
| `.card-accent` / `.card-cream` / `.card-dark` | Same card on `olive-300` / `olive-50` / `olive-800`. Rotate them through a grid so it reads as a pinboard, not a table (see `IndustryGrid.jsx`, `Events.jsx`). |
| `.card-press` | Add to a card that is a link: on hover it moves 2px into its own shadow. |
| `.btn-primary` / `.btn-accent` / `.btn-plain` | Pill buttons, uppercase, 2px border, `shadow-hard-sm`, same press-in hover. `.btn-arrow` / `.btn-arrow-invert` tuck a round arrow badge into the right end. |
| `.pill` | Small black pill for a status line ("Part of the BC Community Response Networks"). |
| `.badge-num` | Black numbered circle. Override size with `!h-7 !w-7 !text-xs` where needed. |
| `.marker` | Highlighter stroke behind a few words of a heading. Put `.marker-head` on the heading so line-height leaves room for it. |
| `.annotation` + `<Annotation>` | Handwritten note (Caveat) with a curved arrow. Decorative only, hidden below `lg`. Keep the wording warm; never about cost or fees. |
| `.shell` / `.shell-wide` / `.band` | Page gutter (80rem / 102rem) and vertical section rhythm. |

Rules of thumb: borders are always 2px and always `ink-900`; shadows are never
blurred; dashed `ink-200` rules separate regions *inside* a card; sections are
separated by `border-y-2 border-ink-900` bands, not by shadows.

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
| Eyebrows | Inter, uppercase, `tracking-[0.2em]` | Echoes `CONNECT · COLLABORATE · SUPPORT` in the logo. Use the `.eyebrow` class. |
| Annotations | **Caveat Variable** | Handwritten margin notes only. Never for anything a visitor needs to read. |

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
| `/` | `HomePage` | Hero → Browse by industry → How it works → Events → About → Resources → Join |
| `/directory` | `DirectoryPage` | Accepts `?category=` — shareable |
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
The roster, plus `CATEGORIES`, `CATEGORY_ICONS`, and helpers
(`membersByCategory`, `getMemberBySlug`, `displayName`, `initials`).

- **`slug` is a permanent URL.** Renaming one breaks any link already shared.
- Only five fields are required; everything else is optional and the profile
  page shows a section only when the data exists. The full field list is
  documented at the top of the file. Rich profile fields (`blurb`,
  `description`, `services`, `idealClients`, `gettingStarted`, `payment`,
  `accreditations`, `hours`, `languages`, `social`, `booking`) come from the
  "SPN Member Profile - Public Directory" Google Form; paste a member's answers
  in when their response arrives.
- `location` is the short place name on the directory card pin. Use it for
  residences, clinics and anyone tied to one place; leave it off for people
  who travel.
- `photo` is a path under `public/` for a headshot. Cards and profiles fall
  back to initials on an olive disc when it is absent.
- Members marked `franchiseOf` get an "independently owned and operated" note on
  their profile. Two Heart to Home Meals franchises are in the network and
  **must stay visibly distinct** — families need to reach the right one.

### `businesses.js`
Shared records for businesses with more than one member (Get Started Home
Services, Comfort Keepers). The person stays the directory entry: everyone gets
their own card and profile. But the business description, website, address,
services, hours and logo live once in this file, and each member points at it
with `business: '<key>'`. `withBusiness(member)` merges the two, with the
person's own fields winning. Profiles list colleagues under "Also from …", and
the home page hero never shows two people from the same business in one load.
This is NOT for a parent company with different communities (Retirement
Concepts, Aspira, Heart to Home territories); those stay separate listings.

### `events.js`
Upcoming events for the home page. One object per event; past events drop off
automatically, so the list doubles as a record. `audience` is `"public"` or
`"members"`. The wide-screen timeline shows five months from the current one;
narrower screens get a plain stack. With no upcoming events the section shows
a short "nothing scheduled yet" card rather than disappearing.

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
| `Navbar.jsx` | Sticky, gains a 2px ink border on scroll. Full-width mobile menu; body scroll locked while open. |
| `Hero.jsx` | Headline with a marker highlight. Four "pinned" member cards appear on `2xl` screens only, drawn at random on every load (one per industry where possible). |
| `IndustryGrid.jsx` | One cream card per industry with a live count and the first three company names. |
| `HowItWorks.jsx` | Three numbered cards. |
| `Events.jsx` | Reads `events.js`. Five month columns on `xl` with cards level at the top, stacked cards below. |
| `MemberCard.jsx` | Shared by directory and related-members. The whole card links to the profile via an overlay; phone, email and website links sit above it. |
| `About.jsx` | Mission copy. Three pillars mirror the logo tagline. |
| `ResourceCard.jsx` / `ResourcesPreview.jsx` | Guide cards; preview renders nothing when no articles are published. |
| `JoinUs.jsx` | Contact cards for seniors and families, the newsletter, and a low-key note for professionals (membership is by invitation). The newsletter form has no backend and opens the visitor's mail client. |
| `Annotation.jsx` | Handwritten note + arrow. |
| `Footer.jsx` | Four columns. Logo is `brightness-0` `invert`ed to sit on dark. |

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
3. **Search the repo for `TODO` before deploying.** `members.js` marks phone
   numbers that came from the internal roster rather than the public form;
   confirm each member is happy to publish theirs.
4. **Keep type large and contrast high.** See §3 and §2.
5. **Plain language.** "Choosing a retirement residence", not "Senior living
   solutions." Write the way someone would say it to a neighbour.
