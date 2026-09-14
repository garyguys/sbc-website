import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import { members, CATEGORIES } from '../data/members';

function Chip({ active, count, onClick, children }) {
    return (
        <button
            type="button"
            aria-pressed={active}
            onClick={onClick}
            className={`inline-flex min-h-[3rem] items-center whitespace-nowrap rounded-full border-2
                        border-ink-900 px-5 text-base font-semibold transition-[transform,box-shadow,background-color] duration-150
                        ${active ? 'bg-olive-300 text-ink-900 shadow-hard-sm' : 'bg-white text-ink-800 hover:bg-olive-100'}`}
        >
            {children}
            {count != null && <span className="ml-2 opacity-70">{count}</span>}
        </button>
    );
}

export default function DirectoryPage() {
    const [params, setParams] = useSearchParams();
    const category = params.get('category') ?? '';

    useEffect(() => {
        const previous = document.title;
        document.title = `${category || 'Member directory'} | Seniors Professional Network`;
        return () => { document.title = previous; };
    }, [category]);

    const setCategory = (value) => {
        const next = new URLSearchParams(params);
        if (value) next.set('category', value);
        else next.delete('category');
        setParams(next);
    };

    // Only offer industries that actually contain members
    const industries = useMemo(
        () =>
            CATEGORIES.map((c) => ({ name: c, count: members.filter((m) => m.category === c).length })).filter(
                (c) => c.count > 0,
            ),
        [],
    );

    const results = useMemo(
        () => (category ? members.filter((m) => m.category === category) : members),
        [category],
    );

    return (
        <>
            <Navbar />
            <main id="main">
                {/* ---------------------------------------------------------- header */}
                <section className="border-b-2 border-ink-900 bg-olive-50/50 py-12 lg:py-16">
                    <div className="shell">
                        <p className="eyebrow">Member directory</p>
                        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">Every member</h1>
                        <p className="mt-5 max-w-2xl text-xl text-ink-700">
                            Everyone here works with older adults across Metro Vancouver and the Fraser Valley.
                            Contact them directly — no form, no fee, nobody in between.
                        </p>
                    </div>
                </section>

                {/* ---------------------------------------------------------- filter */}
                <section className="border-b-2 border-ink-900 bg-parchment">
                    <div className="shell py-6">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink-600">Industry</p>
                        <ul className="no-scrollbar mt-4 flex gap-2.5 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
                            <li>
                                <Chip active={!category} onClick={() => setCategory('')}>
                                    All {members.length}
                                </Chip>
                            </li>
                            {industries.map((c) => (
                                <li key={c.name}>
                                    <Chip active={category === c.name} count={c.count} onClick={() => setCategory(c.name)}>
                                        {c.name}
                                    </Chip>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------------------------------------------------------- results */}
                <section className="bg-parchment py-12 lg:py-16">
                    <div className="shell">
                        <p aria-live="polite" className="text-lg text-ink-700">
                            Showing <strong className="font-bold text-ink-900">{results.length}</strong>{' '}
                            {results.length === 1 ? 'member' : 'members'}{' '}
                            {category ? (
                                <>
                                    in <strong className="font-bold text-ink-900">{category}</strong>
                                </>
                            ) : (
                                'across all industries'
                            )}
                        </p>

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
                                <h2 className="text-2xl font-semibold">Nobody in that industry yet</h2>
                                <p className="mx-auto mt-3 max-w-md text-lg text-ink-700">
                                    Clear the filter to see everyone, or tell us what you need and we&rsquo;ll point
                                    you in the right direction.
                                </p>
                                <div className="mt-7 flex flex-wrap justify-center gap-3">
                                    <button type="button" onClick={() => setCategory('')} className="btn-primary">
                                        Show all members
                                    </button>
                                    <a href="mailto:info@seniorsbc.com" className="btn-plain">
                                        Email us
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* ---------------------------------------------------------- join */}
                <section className="border-t-2 border-ink-900 bg-olive-800 py-14">
                    <div className="shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-parchment">Do you serve older adults?</h2>
                            <p className="mt-3 max-w-2xl text-lg text-olive-100">
                                {members.length} professionals are already here. Membership is by application.
                            </p>
                        </div>
                        <a href="mailto:info@seniorsbc.com?subject=Membership%20Application" className="btn-accent shrink-0">
                            Apply to join
                            <span className="btn-arrow-invert">
                                <ArrowRight size={18} aria-hidden="true" />
                            </span>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
