# Seniors Professional Network

Public website for the Seniors Professional Network (SPN) — a network of trusted
professionals serving seniors and their families across Metro Vancouver and the
Fraser Valley.

Formerly *Seniors Business Connect*.

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

## Editing the site

There is no CMS. Three files in `src/data/` control almost everything:

| File | Contains |
|---|---|
| `members.js` | The member roster and industry categories |
| `events.js` | Upcoming events for the home page |
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
