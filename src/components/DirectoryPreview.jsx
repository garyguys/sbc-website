import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { members, CATEGORIES } from '../data/members';
import MemberCard from './MemberCard';

/**
 * Deterministic sample so the homepage doesn't reshuffle on every render:
 * one member from each of the first six non-empty categories.
 */
const featured = () => {
    const picked = [];
    for (const c of CATEGORIES) {
        const first = members.find((m) => m.category === c);
        if (first) picked.push(first);
        if (picked.length === 6) break;
    }
    return picked;
};

export default function DirectoryPreview() {
    const counts = CATEGORIES.map((c) => ({
        category: c,
        count: members.filter((m) => m.category === c).length,
    })).filter((c) => c.count > 0);

    return (
        <section id="directory" className="scroll-mt-24 bg-parchment py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <p className="eyebrow">The directory</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            {members.length} professionals, one network
                        </h2>
                        <p className="mt-5 text-lg text-ink-700">
                            Browse by field, or search for exactly what you need. Contact details are
                            listed openly — you deal with the member directly.
                        </p>
                    </div>
                    <Link to="/directory" className="btn-primary shrink-0">
                        Browse all members
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>

                {/* Category counts */}
                <ul className="mt-10 flex flex-wrap gap-3">
                    {counts.map(({ category, count }) => (
                        <li key={category}>
                            <Link
                                to={`/directory?category=${encodeURIComponent(category)}`}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-ink-200 bg-white
                                           px-5 py-2.5 text-base font-medium text-ink-700 transition-colors
                                           hover:border-olive-300 hover:bg-olive-50 hover:text-olive-800"
                            >
                                {category}
                                <span className="rounded-full bg-ink-100 px-2 py-0.5 text-sm font-semibold text-ink-600">
                                    {count}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* A sample of members */}
                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featured().map((m) => (
                        <li key={m.slug}>
                            <MemberCard member={m} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
