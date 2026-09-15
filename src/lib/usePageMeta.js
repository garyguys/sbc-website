import { useEffect } from 'react';

export const SITE_URL = 'https://www.seniorsbc.com';
export const SITE_NAME = 'Seniors Professional Network';

export const DEFAULT_DESCRIPTION =
    'A network of trusted professionals serving seniors and their families across Metro Vancouver and the Fraser Valley. ' +
    'Senior living, home care, health, legal, financial, real estate and more. Browse the directory and reach them directly.';

const setMeta = (selector, attr, value) => {
    const el = document.head.querySelector(selector);
    if (el) el.setAttribute(attr, value);
};

/**
 * Keeps the document head in step with the current page: title, meta
 * description, canonical URL and the Open Graph tags Facebook reads when a
 * profile or article link is shared. index.html carries the home-page
 * defaults; each page calls this with its own values.
 *
 * `path` is the canonical path for the page ('/directory/jane-doe'). Query
 * strings are deliberately left off so filtered directory views all point
 * back at /directory.
 */
export default function usePageMeta({ title, description = DEFAULT_DESCRIPTION, path = '/', noindex = false }) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Trusted professionals serving seniors in Metro Vancouver & the Fraser Valley`;
        const url = `${SITE_URL}${path}`;

        document.title = fullTitle;
        setMeta('meta[name="description"]', 'content', description);
        setMeta('link[rel="canonical"]', 'href', url);
        setMeta('meta[property="og:title"]', 'content', title || SITE_NAME);
        setMeta('meta[property="og:description"]', 'content', description);
        setMeta('meta[property="og:url"]', 'content', url);
        setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow');
    }, [title, description, path, noindex]);
}
