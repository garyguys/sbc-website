import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MapPin, ArrowRight } from 'lucide-react';
import { displayName } from '../data/members';

/** Initials used as a stand-in until member photographs are collected. */
const initials = (name) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export default function MemberCard({ member: m }) {
    return (
        <article className="card group flex h-full flex-col p-6 hover:shadow-card-hover">
            <div className="flex items-start gap-4">
                <span
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full
                               bg-olive-100 font-serif text-lg font-semibold text-olive-800"
                >
                    {initials(m.name)}
                </span>

                <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug">
                        <Link to={`/directory/${m.slug}`} className="hover:text-olive-700">
                            {displayName(m)}
                        </Link>
                    </h3>
                    {m.title && <p className="mt-0.5 text-base text-ink-600">{m.title}</p>}
                    <p className="mt-1 text-base font-medium text-terra-700">{m.company}</p>
                </div>
            </div>

            <p className="mt-4">
                <span className="inline-block rounded-full bg-ink-100 px-3 py-1 text-sm font-medium text-ink-700">
                    {m.category}
                </span>
            </p>

            {m.blurb && <p className="mt-4 text-base text-ink-700">{m.blurb}</p>}

            {m.areasServed?.length > 0 && (
                <p className="mt-4 flex items-start gap-2 text-base text-ink-600">
                    <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-olive-600" />
                    <span>{m.areasServed.join(', ')}</span>
                </p>
            )}

            {/* Pushes the contact block to the bottom so cards in a row line up */}
            <div className="flex-1" />

            <div className="mt-5 border-t border-ink-100 pt-5">
                {/*
                  Phone numbers are shown in full rather than hidden behind a
                  button — plenty of visitors will write the number down or dial
                  it from a landline. Email and website addresses are long and
                  wrap badly in a card, so those get buttons instead.
                */}
                {m.phone && (
                    <p className="flex items-center gap-2.5 text-lg font-medium">
                        <Phone size={19} aria-hidden="true" className="shrink-0 text-ink-400" />
                        <a
                            href={`tel:${m.phone.replace(/[^\d+]/g, '')}`}
                            className="text-ink-800 underline-offset-2 hover:text-olive-700 hover:underline"
                        >
                            {m.phone}
                        </a>
                    </p>
                )}

                <div className={`flex flex-wrap gap-2 ${m.phone ? 'mt-3' : ''}`}>
                    <a
                        href={`mailto:${m.email}`}
                        className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border-2 border-ink-200
                                   px-4 text-base font-medium text-ink-700 transition-colors
                                   hover:border-olive-300 hover:bg-olive-50 hover:text-olive-800"
                    >
                        <Mail size={17} aria-hidden="true" />
                        Email
                        <span className="sr-only">{displayName(m)}</span>
                    </a>

                    {m.website && (
                        <a
                            href={m.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border-2 border-ink-200
                                       px-4 text-base font-medium text-ink-700 transition-colors
                                       hover:border-olive-300 hover:bg-olive-50 hover:text-olive-800"
                        >
                            <Globe size={17} aria-hidden="true" />
                            Website
                            <span className="sr-only">for {m.company}, opens in a new tab</span>
                        </a>
                    )}

                    <Link
                        to={`/directory/${m.slug}`}
                        className="inline-flex min-h-[2.75rem] items-center gap-1.5 rounded-full px-4
                                   text-base font-semibold text-olive-700 hover:bg-olive-50"
                    >
                        Profile
                        <span className="sr-only">for {displayName(m)}</span>
                        <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
