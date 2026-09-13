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
| `members.js` | The member roster, categories, and search behaviour |
| `needs.js` | The "what do you need help with?" situations |
| `resources.js` | Guide articles |

Adding a member means adding one object to the `members` array. The only
required fields are `slug`, `name`, `company`, `email`, and `category`;
everything else is optional and hidden when absent.

⚠️ **Before deploying, search `src/data/members.js` for `TODO`.** It lists the
items still awaiting confirmation, including one placeholder that is
public-facing and must not ship as written.

## Assets

`public/` holds the logo in three forms — horizontal, stacked, and the circular
mark — plus favicons, all generated from the two source PNGs (also kept there).
Transparent backgrounds; regenerate from the originals if the logo changes.

## Further reading

See [`DESIGN.md`](./DESIGN.md) for the design system, colour tokens, contrast
rules, component conventions, and the principles behind how this is built.
