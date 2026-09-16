# Seniors Professional Network

Public website for the Seniors Professional Network (SPN) — a network of trusted
professionals serving seniors and their families across Metro Vancouver and the
Fraser Valley.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint
```

## Deployment

Deployed on **Vercel**; the domain is managed at **Hostinger**. `vercel.json`
rewrites all routes to `index.html` — required, or direct links to
`/directory/<slug>` will 404.

## Contact form

The "Just ask us" form on the home page (`src/components/AskForm.jsx`) posts to
**Formspree** (endpoint `https://formspree.io/f/mdeorbay`, managed from the
Formspree dashboard, which forwards to info@seniorsbc.com). After a successful
send the visitor lands on `/thank-you`. The "send me occasional emails"
checkbox is the mailing-list sign-up: filter the Formspree inbox on
`updates = Yes` to build the list. The only other way to reach SPN on the site
is the plain email address; every "Ask us" button links to `/#ask`.

## Member event submissions

`/submit-event` is an unlisted page (not linked anywhere, `noindex`, and
disallowed in `robots.txt`) where members submit their own events. It posts to
a second Formspree form (`https://formspree.io/f/maeyrvzv`) and lands on
`/thank-you?sent=event`. Nothing is published automatically: add approved
events to `src/data/events.js` by hand with `organizer: 'member'` and a
`hostName`. SPN's own events carry `organizer: 'spn'`, which shows the
"SPN event" tag on the card. Share the address with members directly:
https://www.seniorsbc.com/submit-event

## Search engines and sharing

- `public/sitemap.xml` is **generated**, not edited: `npm run build` runs
  `scripts/sitemap.mjs` first, which lists every member profile and published
  resource from the data files. It is git-ignored for that reason.
- `public/robots.txt` allows everything and points at the sitemap.
- Page titles, descriptions, canonical URLs and Facebook share tags are set
  per page by `src/lib/usePageMeta.js`; `index.html` holds the home-page
  defaults and the Organization structured data.
- `public/share-card.png` (1200×630) is the image Facebook and others show
  when a link to the site is shared.
- After the domain goes live, add the site to Google Search Console and
  submit `https://www.seniorsbc.com/sitemap.xml`.

## Editing the site

There is no CMS. Three files in `src/data/` control almost everything:

| File | Contains |
|---|---|
| `members.js` | The member roster and industry categories |
| `businesses.js` | Shared records for businesses with more than one member |
| `events.js` | Upcoming events (next six on the home page, all of them on `/events`) |
| `resources.js` | Guide articles |

Adding a member means adding one object to the `members` array. The only
required fields are `slug`, `name`, `company`, `email`, and `category`;
everything else is optional and hidden when absent.

Adding an event means adding one object to the `events` array in `events.js`;
past events drop off on their own.

⚠️ **Before deploying, search `src/data/members.js` for `TODO`.** Phone numbers
marked `roster` came from the internal member list rather than the public
profile form and should be confirmed with the member.

Member headshots go in `public/members/` and are referenced from the `photo`
field on the member (e.g. `photo: '/members/karen-tyrell.jpg'`).

## Assets

`public/` holds the logo in three forms — horizontal, stacked, and the circular
mark — plus favicons, all generated from the two source PNGs (also kept there).
Transparent backgrounds; regenerate from the originals if the logo changes.

## Further reading

See [`DESIGN.md`](./DESIGN.md) for the design system, colour tokens, contrast
rules, component conventions, and the principles behind how this is built.
