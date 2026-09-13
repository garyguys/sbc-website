import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Mail, Phone, Globe, MapPin, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import { getMemberBySlug, members, displayName } from '../data/members';
import { getNeed } from '../data/needs';

const initials = (name) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

const prettyUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export default function MemberProfile() {
    const { slug } = useParams();
    const m = getMemberBySlug(slug);

    // Keep the document title in step with the profile for shared links / history
    useEffect(() => {
        if (!m) return;
        const previous = document.title;
        document.title = `${displayName(m)} — ${m.company} | Seniors Professional Network`;
        return () => { document.title = previous; };
    }, [m]);

    if (!m) return <Navigate to="/directory" replace />;

    const related = members
        .filter((o) => o.category === m.category && o.slug !== m.slug)
        .slice(0, 3);

    return (
        <>
            <Navbar />
            <main id="main">
                {/* --------------------------------------------------------- header */}
                <section className="border-b border-ink-200 bg-olive-50/60">
                    <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
                        <Link
                            to="/directory"
                            className="inline-flex items-center gap-2 text-base font-medium text-ink-600 hover:text-olive-700"
                        >
                            <ArrowLeft size={18} aria-hidden="true" />
                            Back to the directory
                        </Link>

                        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
                            <span
                                aria-hidden="true"
                                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full
                                           bg-olive-700 font-serif text-3xl font-semibold text-white"
                            >
                                {initials(m.name)}
                            </span>

                            <div className="min-w-0">
                                <p className="eyebrow">{m.category}</p>
                                <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{displayName(m)}</h1>
                                {m.title && <p className="mt-2 text-lg text-ink-700">{m.title}</p>}
                                <p className="mt-2 text-xl font-medium text-terra-700">{m.company}</p>

                                {m.franchiseOf && (
                                    <p className="mt-4 inline-flex rounded-lg bg-terra-50 px-4 py-2.5 text-base text-terra-800">
                                        An independently owned and operated {m.franchiseOf} franchise.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --------------------------------------------------------- content */}
                <section className="bg-parchment py-12 lg:py-16">
                    <div className="mx-auto grid max-w-5xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
                        <div>
                            {m.blurb ? (
                                <>
                                    <h2 className="text-2xl font-semibold">About</h2>
                                    <p className="mt-4 max-w-prose-comfortable text-lg text-ink-700">{m.blurb}</p>
                                </>
                            ) : (
                                <div className="card p-7">
                                    <h2 className="text-2xl font-semibold">About</h2>
                                    <p className="mt-3 text-lg text-ink-700">
                                        A fuller profile is on the way. In the meantime, the contact
                                        details opposite go straight to {m.name.split(' ')[0]} — there
                                        is no referral form and no middleman.
                                    </p>
                                </div>
                            )}

                            {m.services?.length > 0 && (
                                <>
                                    <h2 className="mt-12 text-2xl font-semibold">Services</h2>
                                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {m.services.map((s) => (
                                            <li key={s} className="flex items-start gap-2.5 text-base text-ink-700">
                                                <Check size={20} aria-hidden="true" className="mt-1 shrink-0 text-olive-600" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {m.needs?.length > 0 && (
                                <>
                                    <h2 className="mt-12 text-2xl font-semibold">Can help with</h2>
                                    <ul className="mt-5 flex flex-wrap gap-3">
                                        {m.needs.map((key) => {
                                            const need = getNeed(key);
                                            if (!need) return null;
                                            return (
                                                <li key={key}>
                                                    <Link
                                                        to={`/directory?need=${key}`}
                                                        className="inline-block rounded-full border-2 border-ink-200 bg-white px-5 py-2.5
                                                                   text-base font-medium text-ink-700 hover:border-olive-300 hover:bg-olive-50"
                                                    >
                                                        {need.label}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </>
                            )}
                        </div>

                        {/* --------------------------------------------------- contact */}
                        <aside>
                            <div className="card p-7 lg:sticky lg:top-28">
                                <h2 className="text-xl font-semibold">Get in touch</h2>
                                <p className="mt-2 text-base text-ink-600">
                                    You&rsquo;ll reach {m.name.split(' ')[0]} directly.
                                </p>

                                <dl className="mt-6 space-y-4 text-base">
                                    <div>
                                        <dt className="flex items-center gap-2 font-medium text-ink-500">
                                            <Mail size={18} aria-hidden="true" /> Email
                                        </dt>
                                        <dd className="mt-1">
                                            <a
                                                href={`mailto:${m.email}`}
                                                className="break-words font-medium text-olive-700 underline-offset-2 hover:underline"
                                            >
                                                {m.email}
                                            </a>
                                        </dd>
                                    </div>

                                    {m.phone && (
                                        <div>
                                            <dt className="flex items-center gap-2 font-medium text-ink-500">
                                                <Phone size={18} aria-hidden="true" /> Phone
                                            </dt>
                                            <dd className="mt-1">
                                                <a
                                                    href={`tel:${m.phone.replace(/[^\d+]/g, '')}`}
                                                    className="font-medium text-olive-700 underline-offset-2 hover:underline"
                                                >
                                                    {m.phone}
                                                </a>
                                            </dd>
                                        </div>
                                    )}

                                    {m.website && (
                                        <div>
                                            <dt className="flex items-center gap-2 font-medium text-ink-500">
                                                <Globe size={18} aria-hidden="true" /> Website
                                            </dt>
                                            <dd className="mt-1">
                                                <a
                                                    href={m.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="break-words font-medium text-olive-700 underline-offset-2 hover:underline"
                                                >
                                                    {prettyUrl(m.website)}
                                                </a>
                                            </dd>
                                        </div>
                                    )}

                                    {m.areasServed?.length > 0 && (
                                        <div>
                                            <dt className="flex items-center gap-2 font-medium text-ink-500">
                                                <MapPin size={18} aria-hidden="true" /> Areas served
                                            </dt>
                                            <dd className="mt-1 text-ink-800">{m.areasServed.join(', ')}</dd>
                                        </div>
                                    )}
                                </dl>

                                <a href={`mailto:${m.email}`} className="btn-primary mt-7 w-full">
                                    Send an email
                                </a>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* --------------------------------------------------------- related */}
                {related.length > 0 && (
                    <section className="border-t border-ink-200 bg-olive-50/60 py-14 lg:py-20">
                        <div className="mx-auto max-w-7xl px-5 lg:px-8">
                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <h2 className="text-2xl font-semibold sm:text-3xl">
                                    Others in {m.category}
                                </h2>
                                <Link
                                    to={`/directory?category=${encodeURIComponent(m.category)}`}
                                    className="inline-flex items-center gap-1.5 text-base font-semibold text-terra-600 underline-offset-4 hover:underline"
                                >
                                    See all
                                    <ArrowRight size={17} aria-hidden="true" />
                                </Link>
                            </div>
                            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {related.map((o) => (
                                    <li key={o.slug}>
                                        <MemberCard member={o} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
