import { Link } from 'react-router-dom';
import { Mail, Globe, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { displayName, initials } from '../data/members';

const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;

const CONTACT_BTN =
    'inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border-2 border-ink-900 ' +
    'bg-white px-4 text-base font-semibold transition-colors hover:bg-olive-300';

/**
 * A member's directory card. Contact details are shown in full and link
 * directly: a phone number you can tap, an email you can send, a website you
 * can open. No enquiry form, nothing in between.
 */
export default function MemberCard({ member: m }) {
    const name = displayName(m);

    return (
        <article className="card card-press flex h-full flex-col p-6">
            <div className="flex items-start gap-4">
                {m.photo ? (
                    <img
                        src={m.photo}
                        alt=""
                        className="h-14 w-14 shrink-0 rounded-full border-2 border-ink-900 object-cover"
                    />
                ) : (
                    <span
                        aria-hidden="true"
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full
                                   border-2 border-ink-900 bg-olive-300 font-serif text-lg font-bold text-ink-900"
                    >
                        {initials(m.name)}
                    </span>
                )}
                <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg font-bold leading-snug">
                        <Link to={`/directory/${m.slug}`} className="hover:text-olive-700">
                            {name}
                        </Link>
                    </h3>
                    {m.title && <p className="mt-0.5 text-sm text-ink-600">{m.title}</p>}
                    <p className="mt-1 text-base font-semibold text-terra-700">{m.company}</p>
                </div>
            </div>

            <p className="mt-4">
                <span className="inline-block rounded-full border-2 border-ink-900 bg-olive-50 px-3 py-0.5 text-sm font-semibold">
                    {m.category}
                </span>
            </p>

            {m.location && (
                <p className="mt-4 flex items-start gap-2 text-base text-ink-600">
                    <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-olive-600" />
                    <span>{m.location}</span>
                </p>
            )}

            <div className="flex-1" />

            <div className="mt-5 border-t-2 border-dashed border-ink-200 pt-5">
                {m.phone && (
                    <p className="flex items-center gap-2.5">
                        <Phone size={18} aria-hidden="true" className="shrink-0 text-ink-500" />
                        <a href={telHref(m.phone)} className="font-serif text-xl font-bold text-ink-900 hover:text-olive-700">
                            {m.phone}
                        </a>
                    </p>
                )}
                <div className={`flex flex-wrap items-center gap-2 ${m.phone ? 'mt-3' : ''}`}>
                    <a href={`mailto:${m.email}`} className={CONTACT_BTN}>
                        <Mail size={18} aria-hidden="true" />
                        Email
                        <span className="sr-only">{name}</span>
                    </a>
                    {m.website && (
                        <a href={m.website} target="_blank" rel="noopener noreferrer" className={CONTACT_BTN}>
                            <Globe size={18} aria-hidden="true" />
                            Website
                            <span className="sr-only">for {m.company}, opens in a new tab</span>
                        </a>
                    )}
                    <Link
                        to={`/directory/${m.slug}`}
                        className="ml-auto inline-flex min-h-[2.75rem] items-center gap-1 px-2 text-base font-bold text-olive-700 hover:underline"
                    >
                        Profile
                        <span className="sr-only">for {name}</span>
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
