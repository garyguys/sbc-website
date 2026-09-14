import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { members, sameBusiness } from '../data/members';

/**
 * Four "polaroid" member cards pinned around the hero on very wide screens.
 * A fresh set is drawn on every page load, one member per industry where
 * possible, so the spread reads as a network and everyone gets their turn.
 */
const SLOTS = [
    { pos: 'left-0 top-0 -rotate-6', tone: 'bg-olive-300 text-ink-900' },
    { pos: 'right-0 top-6 rotate-6', tone: 'bg-terra-100 text-terra-800' },
    { pos: 'left-10 bottom-2 rotate-3', tone: 'bg-olive-800 text-parchment' },
    { pos: 'right-10 bottom-6 -rotate-3', tone: 'bg-olive-100 text-ink-900' },
];

const shuffle = (list) => {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

/**
 * Random members, preferring a different industry for each slot, and never
 * two people from the same business in one load.
 */
const drawMembers = (count) => {
    const picked = [];
    const seen = new Set();
    const clashes = (m) => picked.some((p) => sameBusiness(p, m));
    for (const m of shuffle(members)) {
        if (picked.length === count) break;
        if (seen.has(m.category) || clashes(m)) continue;
        seen.add(m.category);
        picked.push(m);
    }
    for (const m of shuffle(members)) {
        if (picked.length === count) break;
        if (!picked.includes(m) && !clashes(m)) picked.push(m);
    }
    return picked;
};

export default function Hero() {
    const [pinned] = useState(() => drawMembers(SLOTS.length).map((member, i) => ({ member, ...SLOTS[i] })));

    return (
        <section className="relative overflow-hidden bg-olive-50/50">
            <div className="shell relative pb-16 pt-16 lg:pb-20 lg:pt-24 2xl:pb-24 2xl:pt-28">
                {/* Pinned member cards — decorative on 2xl and up only */}
                <div className="pointer-events-none absolute inset-x-0 bottom-8 top-16 hidden 2xl:block">
                    <div className="pointer-events-auto relative mx-auto h-full max-w-[88rem]">
                        {pinned.map(({ member: m, pos, tone }) => (
                            <Link
                                key={m.slug}
                                to={`/directory/${m.slug}`}
                                className={`absolute ${pos} w-[15.5rem] rounded-2xl border-2 border-ink-900 bg-white p-2.5
                                            shadow-hard transition-transform duration-200 hover:-translate-y-1`}
                            >
                                <span className="block px-2 pb-1 pt-1.5">
                                    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] ${tone}`}>
                                        {m.category}
                                    </span>
                                    <span className="mt-2.5 block font-serif text-lg font-bold leading-tight">{m.name}</span>
                                    <span className="mt-0.5 block text-sm text-ink-600">{m.company}</span>
                                    <span className="mt-3 inline-flex items-center gap-1 rounded-full border-2 border-ink-900 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-ink-900">
                                        Learn more
                                        <ArrowRight size={12} aria-hidden="true" />
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto max-w-2xl text-center">
                    <a
                        href="https://bccrns.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pill mx-auto transition-colors hover:bg-olive-800"
                    >
                        <ShieldCheck size={16} aria-hidden="true" />
                        Part of the BC Community Response Networks
                        <span className="sr-only">, opens in a new tab</span>
                    </a>
                    <p className="eyebrow mt-8">Connect · Collaborate · Support</p>
                    <h1 className="marker-head mt-5 font-serif text-[2.6rem] font-bold tracking-tight sm:text-6xl">
                        Trusted professionals who <span className="marker">understand seniors.</span>
                    </h1>
                    <p className="mx-auto mt-7 max-w-xl text-xl text-ink-700">
                        A network of local professionals who work with seniors every day, across Metro Vancouver
                        and the Fraser Valley. Find the right person, and reach them directly.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link to="/directory" className="btn-accent w-full sm:w-auto">
                            Browse the directory
                            <span className="btn-arrow-invert">
                                <ArrowRight size={18} aria-hidden="true" />
                            </span>
                        </Link>
                        <Link to="/#how-it-works" className="btn-plain w-full sm:w-auto">
                            How it works
                        </Link>
                    </div>

                    <p className="mt-7 flex items-center justify-center gap-2 text-base font-medium text-ink-700">
                        <ShieldCheck size={18} aria-hidden="true" className="text-olive-700" />
                        Every member is someone we know and meet with regularly.
                    </p>
                </div>

            </div>
        </section>
    );
}
