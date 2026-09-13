import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { members } from '../data/members';

export default function Hero() {
    const [q, setQ] = useState('');
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const query = q.trim();
        navigate(query ? `/directory?q=${encodeURIComponent(query)}` : '/directory');
    };

    const memberCount = members.length;
    const categoryCount = new Set(members.map((m) => m.category)).size;

    return (
        <section className="relative overflow-hidden bg-parchment">
            {/* Soft olive wash, echoing the wreath side of the logo */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-olive-100/50 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-24 h-[26rem] w-[26rem] rounded-full bg-terra-100/40 blur-3xl"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-8 lg:py-24">
                <div>
                    <p className="eyebrow">Connect · Collaborate · Support</p>

                    <h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                        Trusted professionals who
                        <span className="text-olive-700"> understand seniors</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-ink-700 sm:text-xl">
                        Finding the right help for an ageing parent — or for yourself — should not
                        mean starting with a search engine and hoping. Our members work with seniors
                        every day, and they know each other.
                    </p>

                    <form onSubmit={submit} className="mt-9 max-w-xl" role="search">
                        <label htmlFor="hero-search" className="sr-only">
                            Search the member directory
                        </label>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <div className="relative flex-1">
                                <Search
                                    size={22}
                                    aria-hidden="true"
                                    className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-400"
                                />
                                <input
                                    id="hero-search"
                                    type="search"
                                    value={q}
                                    onChange={(e) => setQ(e.target.value)}
                                    placeholder="Try “home care”, “dementia”, or “downsizing”"
                                    className="h-14 w-full rounded-full border-2 border-ink-200 bg-white pl-14 pr-5 text-base
                                               placeholder:text-ink-500 focus:border-olive-700 focus:outline-none"
                                />
                            </div>
                            <button type="submit" className="btn-primary shrink-0 !h-14">
                                Search
                            </button>
                        </div>
                    </form>

                    <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-ink-600">
                        <MapPin size={18} aria-hidden="true" className="text-olive-600" />
                        <span>
                            <strong className="font-semibold text-ink-800">{memberCount} members</strong>{' '}
                            across {categoryCount} fields, serving Metro Vancouver &amp; the Fraser Valley
                        </span>
                    </p>

                    <p className="mt-3">
                        <Link
                            to="/directory"
                            className="inline-flex items-center gap-1.5 text-base font-semibold text-terra-600 underline-offset-4 hover:underline"
                        >
                            Browse the full directory
                            <ArrowRight size={17} aria-hidden="true" />
                        </Link>
                    </p>
                </div>

                {/* Logo mark, used as the hero's single visual anchor */}
                <div className="relative hidden justify-self-center lg:block">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -m-10 rounded-full bg-gradient-to-br from-olive-50 via-parchment to-terra-50"
                    />
                    <img
                        src="/spn-mark.png"
                        alt=""
                        aria-hidden="true"
                        width={512}
                        height={489}
                        className="relative w-full max-w-[26rem] drop-shadow-sm"
                    />
                </div>
            </div>
        </section>
    );
}
