import { Link } from 'react-router-dom';
import { ArrowUpRight, Building2, HeartPulse, Wrench, PiggyBank, House, Scale, Plane, Flower2, Users } from 'lucide-react';
import { members, CATEGORIES, CATEGORY_ICONS } from '../data/members';
import Annotation from './Annotation';

/** Icon components by name, matching CATEGORY_ICONS in the data file. */
const ICONS = { Building2, HeartPulse, Wrench, PiggyBank, House, Scale, Plane, Flower2, Users };

/**
 * Card treatments rotate so the grid reads as a pinboard rather than a table.
 * Keyed by position, not by category, so adding or removing an industry just
 * reshuffles the colours.
 */
const TONES = [
    'card',
    'card-accent',
    'card',
    'card',
    'card-dark',
    'card',
    'card-cream',
    'card',
    'card',
];

const STYLE = {
    'card': { icon: 'bg-olive-50 text-olive-800', title: 'text-ink-900', body: 'text-ink-600', link: 'text-olive-700' },
    'card-accent': { icon: 'bg-white text-olive-800', title: 'text-ink-900', body: 'text-ink-700', link: 'text-olive-800' },
    'card-cream': { icon: 'bg-white text-olive-800', title: 'text-ink-900', body: 'text-ink-700', link: 'text-olive-700' },
    'card-dark': { icon: 'bg-olive-300 text-ink-900', title: 'text-parchment', body: 'text-olive-100', link: 'text-olive-300' },
};

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

export default function IndustryGrid() {
    const groups = CATEGORIES
        .map((category) => ({ category, members: members.filter((m) => m.category === category) }))
        .filter((g) => g.members.length > 0);
    const total = members.length;

    return (
        <section id="industries" className="band scroll-mt-24 bg-parchment">
            <div className="shell">
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <p className="eyebrow">The directory</p>
                        <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Browse by industry</h2>
                        <p className="mt-5 text-xl text-ink-700">
                            {groups.length === 9 ? 'Nine' : groups.length} fields, {total} members. Pick the one closest
                            to what you need and you’ll see everyone in it.
                        </p>
                    </div>
                    <Link to="/directory" className="btn-primary shrink-0">
                        See all {total}
                        <span className="btn-arrow">
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </span>
                    </Link>
                </div>

                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {groups.map((g, i) => {
                        const tone = TONES[i % TONES.length];
                        const s = STYLE[tone];
                        const Icon = ICONS[CATEGORY_ICONS[g.category]] || Users;
                        const companies = [...new Set(g.members.map((m) => m.company))];
                        const shown = companies.slice(0, 3);
                        const more = companies.length - shown.length;
                        const count = g.members.length;
                        return (
                            <li key={g.category}>
                                <Link
                                    to={`/directory?category=${encodeURIComponent(g.category)}`}
                                    className={`${tone} card-press flex h-full flex-col p-7`}
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <span
                                            aria-hidden="true"
                                            className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 border-ink-900 ${s.icon}`}
                                        >
                                            <Icon size={26} />
                                        </span>
                                        <span className="badge-num">{count}</span>
                                    </div>
                                    <h3 className={`mt-6 font-serif text-2xl font-bold leading-snug ${s.title}`}>{g.category}</h3>
                                    <p className={`mt-3 flex-1 text-base leading-relaxed ${s.body}`}>
                                        {shown.join(' · ')}
                                        {more > 0 && ` · +${more} more`}
                                    </p>
                                    <span className={`mt-6 inline-flex items-center gap-1.5 text-base font-bold ${s.link}`}>
                                        View {plural(count, 'member')}
                                        <ArrowUpRight size={18} aria-hidden="true" />
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <Annotation className="mt-10 hidden justify-end lg:flex">
                    {'Every listing is a\nreal person you can ring'}
                </Annotation>
            </div>
        </section>
    );
}
