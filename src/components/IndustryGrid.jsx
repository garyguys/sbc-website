import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2, HeartPulse, Wrench, PiggyBank, House, Scale, Plane, Flower2, Users } from 'lucide-react';
import { members, CATEGORIES, CATEGORY_ICONS } from '../data/members';
import Annotation from './Annotation';

/** Icon components by name, matching CATEGORY_ICONS in the data file. */
const ICONS = { Building2, HeartPulse, Wrench, PiggyBank, House, Scale, Plane, Flower2, Users };

/** Every industry card gets the same cream treatment so the grid reads as one set. */
const TONE = 'card-cream';
const STYLE = { icon: 'bg-white text-olive-800', title: 'text-ink-900', body: 'text-ink-700', link: 'text-olive-700' };

const SHOWN = 3; // company names listed per card

const shuffle = (list) => {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

/**
 * Company names for a card. Industries with more names than fit get a fresh
 * random selection on every page load so the same few are not always the
 * ones on show; small industries list everyone in their usual order.
 */
const companiesFor = (group) => {
    const all = [...new Set(group.members.map((m) => m.company))];
    const shown = all.length > SHOWN ? shuffle(all).slice(0, SHOWN) : all;
    return { shown, more: all.length - shown.length };
};

export default function IndustryGrid() {
    const [groups] = useState(() =>
        CATEGORIES
            .map((category) => ({ category, members: members.filter((m) => m.category === category) }))
            .filter((g) => g.members.length > 0)
            .map((g) => ({ ...g, ...companiesFor(g) })),
    );

    return (
        <section id="industries" className="band scroll-mt-24 bg-parchment">
            <div className="shell">
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <p className="eyebrow">The directory</p>
                        <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Browse by industry</h2>
                        <p className="mt-5 text-xl text-ink-700">
                            Pick the field closest to what you need and you’ll see everyone in it.
                        </p>
                    </div>
                    <Link to="/directory" className="btn-primary shrink-0">
                        See everyone
                        <span className="btn-arrow">
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                    </Link>
                </div>

                <Annotation side="left" className="mt-8 hidden justify-center lg:flex">
                    {'Real people,\nready to help'}
                </Annotation>

                <ul className="mt-6 grid gap-5 lg:grid-cols-2">
                    {groups.map((g, i) => {
                        const Icon = ICONS[CATEGORY_ICONS[g.category]] || Users;
                        const { shown, more } = g;
                        const count = g.members.length;
                        // An odd last card stretches across both columns so the grid stays even
                        const isOddLast = i === groups.length - 1 && groups.length % 2 === 1;
                        return (
                            <li key={g.category} className={isOddLast ? 'lg:col-span-2' : ''}>
                                <Link
                                    to={`/directory?category=${encodeURIComponent(g.category)}`}
                                    className={`${TONE} card-press flex h-full items-center gap-5 p-5 sm:p-6`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-ink-900 ${STYLE.icon}`}
                                    >
                                        <Icon size={26} />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className={`block font-serif text-xl font-bold leading-snug sm:text-2xl ${STYLE.title}`}>
                                            {g.category}
                                        </span>
                                        {/* Company names are a desktop detail; on phones the card is just the industry */}
                                        <span className={`mt-1 hidden text-base leading-relaxed sm:block ${STYLE.body}`}>
                                            {shown.join(' · ')}
                                            {more > 0 && ` · +${more} more`}
                                        </span>
                                    </span>
                                    <span className="flex shrink-0 flex-col items-center gap-1.5">
                                        <span className="badge-num">{count}</span>
                                        <span className={`inline-flex items-center gap-1 text-sm font-bold ${STYLE.link}`}>
                                            View
                                            <ArrowUpRight size={16} aria-hidden="true" />
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
}
