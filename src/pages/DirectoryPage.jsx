import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import { members, CATEGORIES, searchIndex } from '../data/members';
import { needs, getNeed } from '../data/needs';

export default function DirectoryPage() {
    const [params, setParams] = useSearchParams();

    const query = params.get('q') ?? '';
    const need = params.get('need') ?? '';
    const category = params.get('category') ?? '';

    // Local state keeps typing responsive; the URL is updated on a debounce so
    // that a search remains shareable and the back button behaves sensibly.
    // When the URL changes from elsewhere (back button, a needs-grid link, the
    // hero search box) the draft is re-synced during render rather than in an
    // effect — see react.dev "You Might Not Need an Effect".
    const [draft, setDraft] = useState(query);
    const [syncedQuery, setSyncedQuery] = useState(query);
    if (query !== syncedQuery) {
        setSyncedQuery(query);
        setDraft(query);
    }

    useEffect(() => {
        const t = setTimeout(() => {
            if (draft === query) return;
            const next = new URLSearchParams(params);
            if (draft.trim()) next.set('q', draft.trim());
            else next.delete('q');
            setParams(next, { replace: true });
        }, 250);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [draft]);

    const setParam = (key, value) => {
        const next = new URLSearchParams(params);
        if (value) next.set(key, value);
        else next.delete(key);
        setParams(next);
    };

    const clearAll = () => setParams(new URLSearchParams());

    const results = useMemo(() => {
        const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        return members.filter((m) => {
            if (category && m.category !== category) return false;
            if (need && !m.needs?.includes(need)) return false;
            if (terms.length === 0) return true;
            const haystack = searchIndex(m);
            return terms.every((t) => haystack.includes(t));
        });
    }, [query, need, category]);

    const activeNeed = need ? getNeed(need) : null;
    const hasFilters = Boolean(query || need || category);

    // Only offer categories that actually contain members
    const availableCategories = CATEGORIES.filter((c) => members.some((m) => m.category === c));

    return (
        <>
            <Navbar />
            <main id="main">
                {/* ---------------------------------------------------------- header */}
                <section className="border-b border-ink-200 bg-olive-50/60">
                    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
                        <p className="eyebrow">Member directory</p>
                        <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                            {activeNeed ? activeNeed.label : 'Find a professional'}
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-ink-700">
                            {activeNeed
                                ? activeNeed.description
                                : 'Search by name, company, service, or the kind of help you need. Every member here works with seniors and their families across Metro Vancouver and the Fraser Valley.'}
                        </p>

                        {/* Search */}
                        <div className="relative mt-8 max-w-2xl" role="search">
                            <label htmlFor="directory-search" className="sr-only">
                                Search members
                            </label>
                            <Search
                                size={22}
                                aria-hidden="true"
                                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-400"
                            />
                            <input
                                id="directory-search"
                                type="search"
                                value={draft}
                                onChange={(e) => setDraft(e.target.value)}
                                placeholder="Search by name, company, or service…"
                                className="h-14 w-full rounded-full border-2 border-ink-200 bg-white pl-14 pr-14 text-base
                                           placeholder:text-ink-500 focus:border-olive-700 focus:outline-none"
                            />
                            {draft && (
                                <button
                                    type="button"
                                    onClick={() => setDraft('')}
                                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center
                                               justify-center rounded-full text-ink-500 hover:bg-ink-100"
                                >
                                    <span className="sr-only">Clear search</span>
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* ---------------------------------------------------------- filters */}
                <section className="border-b border-ink-200 bg-parchment">
                    <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
                        <div className="flex items-center gap-2 text-base font-semibold text-ink-700">
                            <SlidersHorizontal size={18} aria-hidden="true" />
                            <span>Situation</span>
                        </div>
                        <ul className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
                            <li>
                                <Chip active={!need} onClick={() => setParam('need', '')}>
                                    Any
                                </Chip>
                            </li>
                            {needs.map((n) => (
                                <li key={n.key}>
                                    <Chip active={need === n.key} onClick={() => setParam('need', n.key)}>
                                        {n.label}
                                    </Chip>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex items-center gap-2 text-base font-semibold text-ink-700">
                            <span>Field</span>
                        </div>
                        <ul className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
                            <li>
                                <Chip active={!category} onClick={() => setParam('category', '')}>
                                    All fields
                                </Chip>
                            </li>
                            {availableCategories.map((c) => (
                                <li key={c}>
                                    <Chip active={category === c} onClick={() => setParam('category', c)}>
                                        {c}
                                    </Chip>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------------------------------------------------------- results */}
                <section className="bg-parchment py-12 lg:py-16">
                    <div className="mx-auto max-w-7xl px-5 lg:px-8">
                        <div className="flex flex-wrap items-baseline justify-between gap-4">
                            <p aria-live="polite" className="text-lg text-ink-700">
                                <strong className="font-semibold text-ink-900">{results.length}</strong>{' '}
                                {results.length === 1 ? 'member' : 'members'}
                                {hasFilters ? ' match your search' : ' in the network'}
                            </p>
                            {hasFilters && (
                                <button
                                    type="button"
                                    onClick={clearAll}
                                    className="text-base font-semibold text-terra-600 underline-offset-4 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>

                        {results.length > 0 ? (
                            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {results.map((m) => (
                                    <li key={m.slug} className="animate-fade-up">
                                        <MemberCard member={m} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="card mt-8 p-10 text-center">
                                <h2 className="text-2xl font-semibold">No members match that yet</h2>
                                <p className="mx-auto mt-3 max-w-md text-lg text-ink-700">
                                    Try a broader search, or clear the filters to see everyone. If you
                                    can&rsquo;t find the kind of help you need, we&rsquo;re happy to point you
                                    in the right direction.
                                </p>
                                <div className="mt-7 flex flex-wrap justify-center gap-3">
                                    <button type="button" onClick={clearAll} className="btn-primary">
                                        Show all members
                                    </button>
                                    <a href="mailto:info@seniorsbc.com" className="btn-outline">
                                        Ask us
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* ---------------------------------------------------------- CTA */}
                <section className="bg-olive-800 py-14">
                    <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 lg:flex-row lg:items-center lg:px-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                                Are you a professional who serves seniors?
                            </h2>
                            <p className="mt-2 max-w-2xl text-lg text-olive-100">
                                Membership is by application. We meet regularly, refer to one another, and
                                keep the standard high.
                            </p>
                        </div>
                        <Link to="/#join" className="btn-accent shrink-0">
                            Apply to join
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

function Chip({ active, onClick, children }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={`whitespace-nowrap rounded-full border-2 px-5 py-2.5 text-base font-medium transition-colors ${
                active
                    ? 'border-olive-700 bg-olive-700 text-white'
                    : 'border-ink-200 bg-white text-ink-700 hover:border-olive-300 hover:bg-olive-50'
            }`}
        >
            {children}
        </button>
    );
}
