import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { members, CATEGORIES, getMemberBySlug, initials } from '../data/members';
import Annotation from './Annotation';

/**
 * Four "polaroid" member cards pinned around the hero on very wide screens.
 * Pick members from different industries so the spread reads as a network.
 * Slugs that no longer exist are skipped, so removing a member never breaks
 * the home page.
 */
const PINNED = [
    { slug: 'karen-tyrell', pos: 'left-0 top-0 -rotate-6', tone: 'bg-olive-300 text-ink-900' },
    { slug: 'sadhana-kumar', pos: 'right-0 top-6 rotate-6', tone: 'bg-terra-500 text-white' },
    { slug: 'garrett-robertson', pos: 'left-10 bottom-2 rotate-3', tone: 'bg-olive-800 text-parchment' },
    { slug: 'louise-taylor', pos: 'right-10 bottom-6 -rotate-3', tone: 'bg-olive-100 text-ink-900' },
];

export default function Hero() {
    const memberCount = members.length;
    const industryCount = CATEGORIES.filter((c) => members.some((m) => m.category === c)).length;
    const pinned = PINNED.map((p) => ({ ...p, member: getMemberBySlug(p.slug) })).filter((p) => p.member);

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
                                className={`absolute ${pos} w-[13.5rem] rounded-2xl border-2 border-ink-900 bg-white p-2.5
                                            shadow-hard transition-transform duration-200 hover:-translate-y-1`}
                            >
                                {m.photo ? (
                                    <img src={m.photo} alt="" className="h-24 w-full rounded-xl border-2 border-ink-900 object-cover" />
                                ) : (
                                    <span
                                        aria-hidden="true"
                                        className={`flex h-24 items-center justify-center rounded-xl font-serif text-3xl font-bold ${tone}`}
                                    >
                                        {initials(m.name)}
                                    </span>
                                )}
                                <span className="mt-2.5 block px-1 pb-1">
                                    <span className="block font-serif text-base font-bold leading-tight">{m.name}</span>
                                    <span className="mt-0.5 block text-sm text-ink-600">{m.company}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto max-w-2xl text-center">
                    <p className="pill mx-auto">
                        <ShieldCheck size={16} aria-hidden="true" />
                        Part of the BC Community Response Networks
                    </p>
                    <p className="eyebrow mt-8">Connect · Collaborate · Support</p>
                    <h1 className="marker-head mt-5 font-serif text-[2.6rem] font-bold tracking-tight sm:text-6xl">
                        The people you’d want looking after <span className="marker">your own parents.</span>
                    </h1>
                    <p className="mx-auto mt-7 max-w-xl text-xl text-ink-700">
                        {memberCount} trusted professionals across {industryCount} industries, serving seniors and
                        their families in Metro Vancouver and the Fraser Valley.
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
                        No referral fees. You contact members directly.
                    </p>
                </div>

                <Annotation side="left" className="absolute bottom-10 right-1/2 hidden translate-x-[21rem] 2xl:flex">
                    {'Real people,\nnot a lead form'}
                </Annotation>
            </div>
        </section>
    );
}
