import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
    Mail, Phone, Globe, MapPin, ArrowLeft, ArrowRight, Check, Clock, Languages, CalendarCheck,
    CreditCard, Award, Linkedin, Facebook, Instagram, ExternalLink, Users, Compass,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MemberCard from '../components/MemberCard';
import { getMemberBySlug, members, displayName, initials, colleaguesOf } from '../data/members';
import { withBusiness } from '../data/businesses';
import usePageMeta from '../lib/usePageMeta';

const prettyUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');
const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;
const firstName = (name) => name.split(' ')[0];

/** Split a blurb on blank lines into paragraphs. */
function Paragraphs({ text, className }) {
    return text.split(/\n\s*\n/).map((p, i) => (
        <p key={i} className={className}>
            {p}
        </p>
    ));
}

function Card({ title, children, className = 'card' }) {
    return (
        <div className={`${className} p-7`}>
            <h2 className="text-2xl font-semibold">{title}</h2>
            {children}
        </div>
    );
}

function Fact({ icon, label, children }) {
    const Icon = icon;
    return (
        <div>
            <dt className="flex items-center gap-2 font-medium text-ink-500">
                <Icon size={18} aria-hidden="true" /> {label}
            </dt>
            <dd className="mt-1 text-ink-900">{children}</dd>
        </div>
    );
}

const socialLinks = (social = {}) =>
    [
        social.linkedin && { label: 'LinkedIn', href: social.linkedin, icon: Linkedin },
        social.facebook && { label: 'Facebook', href: social.facebook, icon: Facebook },
        social.instagram && {
            label: 'Instagram',
            href: social.instagram.startsWith('http') ? social.instagram : `https://www.instagram.com/${social.instagram.replace(/^@/, '')}`,
            icon: Instagram,
        },
    ].filter(Boolean);

export default function MemberProfile() {
    const { slug } = useParams();
    const person = getMemberBySlug(slug);
    const m = useMemo(() => withBusiness(person), [person]);
    // Title, description and share tags follow the profile for shared links
    usePageMeta({
        title: m ? `${displayName(m)}, ${m.company}` : 'Member directory',
        description: m
            ? (m.tagline || m.blurb || m.description || `${displayName(m)} of ${m.company}, a member of the Seniors Professional Network.`)
            : undefined,
        path: m ? `/directory/${m.slug}` : '/directory',
    });

    if (!m) return <Navigate to="/directory" replace />;

    const colleagues = colleaguesOf(person);
    const related = members
        .filter((o) => o.category === m.category && o.slug !== m.slug && !colleagues.includes(o))
        .slice(0, 3);
    const socials = socialLinks(m.social);
    const hasFacts = m.hours || m.languages?.length || m.years || m.established || m.freeConsultation != null;

    return (
        <>
            <Navbar />
            <main id="main">
                {/* --------------------------------------------------------- header */}
                <section className="border-b-2 border-ink-900 bg-olive-50/50">
                    <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
                        <Link
                            to="/directory"
                            className="inline-flex items-center gap-2 text-base font-medium text-ink-600 hover:text-olive-700"
                        >
                            <ArrowLeft size={18} aria-hidden="true" />
                            Back to the directory
                        </Link>

                        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
                            {m.photo ? (
                                <img
                                    src={m.photo}
                                    alt={`${m.name}`}
                                    className="h-28 w-28 shrink-0 rounded-full border-2 border-ink-900 object-cover shadow-hard-sm"
                                />
                            ) : (
                                <span
                                    aria-hidden="true"
                                    className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full
                                               border-2 border-ink-900 bg-olive-300 font-serif text-3xl font-bold text-ink-900"
                                >
                                    {initials(m.name)}
                                </span>
                            )}

                            <div className="min-w-0">
                                <p className="eyebrow">{m.category}</p>
                                <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{displayName(m)}</h1>
                                {m.title && <p className="mt-2 text-lg text-ink-700">{m.title}</p>}
                                <p className="mt-2 text-xl font-medium text-terra-700">{m.company}</p>
                                {m.tagline && <p className="mt-4 text-lg italic text-ink-700">{m.tagline}</p>}
                                {m.franchiseOf && (
                                    <p className="mt-4 inline-flex rounded-full border-2 border-ink-900 bg-white px-4 py-1.5 text-sm font-semibold text-ink-800">
                                        An independently owned and operated {m.franchiseOf} franchise
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --------------------------------------------------------- content */}
                <section className="bg-parchment py-12 lg:py-16">
                    <div className="mx-auto grid max-w-5xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
                        <div className="space-y-6">
                            {/* About */}
                            <Card title="About">
                                {m.blurb ? (
                                    <div className="mt-3 space-y-4">
                                        <Paragraphs text={m.blurb} className="text-lg leading-relaxed text-ink-700" />
                                    </div>
                                ) : (
                                    <p className="mt-3 text-lg text-ink-700">
                                        More about {firstName(m.name)} is coming soon. In the meantime, the contact
                                        details on this page reach {firstName(m.name)} directly.
                                    </p>
                                )}
                            </Card>

                            {m.description && (
                                <Card title={`About ${m.company}`} className="card-cream">
                                    <div className="mt-3 space-y-4">
                                        <Paragraphs text={m.description} className="text-lg leading-relaxed text-ink-700" />
                                    </div>
                                </Card>
                            )}

                            {m.services?.length > 0 && (
                                <Card title="Services">
                                    {/* CSS columns rather than a grid: items flow down each column, so a long
                                        item does not leave a gap beside its neighbour. */}
                                    <ul className="mt-5 -mb-3 sm:columns-2 sm:gap-x-6">
                                        {m.services.map((s) => (
                                            <li key={s} className="flex items-start gap-2.5 break-inside-avoid pb-3 text-base text-ink-700">
                                                <Check size={20} aria-hidden="true" className="mt-1 shrink-0 text-olive-700" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            )}

                            {(m.idealClients || m.gettingStarted) && (
                                <Card title="Working together" className="card-accent">
                                    <dl className="mt-5 space-y-5">
                                        {m.idealClients && (
                                            <div>
                                                <dt className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ink-800">
                                                    <Users size={16} aria-hidden="true" /> Who they help
                                                </dt>
                                                <dd className="mt-2 text-lg leading-relaxed text-ink-900">{m.idealClients}</dd>
                                            </div>
                                        )}
                                        {m.gettingStarted && (
                                            <div>
                                                <dt className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ink-800">
                                                    <Compass size={16} aria-hidden="true" /> How to get started
                                                </dt>
                                                <dd className="mt-2 text-lg leading-relaxed text-ink-900">{m.gettingStarted}</dd>
                                            </div>
                                        )}
                                    </dl>
                                </Card>
                            )}

                            {(m.payment?.length > 0 || m.accreditations?.length > 0) && (
                                <Card title="Good to know">
                                    <dl className="mt-5 grid gap-6 sm:grid-cols-2">
                                        {m.payment?.length > 0 && (
                                            <div>
                                                <dt className="flex items-center gap-2 font-medium text-ink-500">
                                                    <CreditCard size={18} aria-hidden="true" /> Payment accepted
                                                </dt>
                                                <dd className="mt-2">
                                                    <ul className="space-y-1.5 text-base text-ink-800">
                                                        {m.payment.map((p) => <li key={p}>{p}</li>)}
                                                    </ul>
                                                </dd>
                                            </div>
                                        )}
                                        {m.accreditations?.length > 0 && (
                                            <div>
                                                <dt className="flex items-center gap-2 font-medium text-ink-500">
                                                    <Award size={18} aria-hidden="true" /> Licences &amp; memberships
                                                </dt>
                                                <dd className="mt-2">
                                                    <ul className="space-y-1.5 text-base text-ink-800">
                                                        {m.accreditations.map((a) => <li key={a}>{a}</li>)}
                                                    </ul>
                                                </dd>
                                            </div>
                                        )}
                                    </dl>
                                </Card>
                            )}

                            {m.locations?.length > 0 && (
                                <Card title="Locations">
                                    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                                        {m.locations.map((loc) => (
                                            <li key={loc.name} className="rounded-xl border-2 border-ink-900 bg-olive-50 p-5">
                                                <p className="font-serif text-lg font-bold">{loc.name}</p>
                                                <p className="mt-1.5 flex items-start gap-2 text-base text-ink-700">
                                                    <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-olive-700" />
                                                    <span>{loc.address}</span>
                                                </p>
                                                {loc.phone && (
                                                    <p className="mt-1.5 flex items-center gap-2 text-base">
                                                        <Phone size={18} aria-hidden="true" className="shrink-0 text-olive-700" />
                                                        <a href={telHref(loc.phone)} className="font-medium text-olive-700 underline-offset-2 hover:underline">{loc.phone}</a>
                                                    </p>
                                                )}
                                                {loc.website && (
                                                    <p className="mt-1.5 flex items-center gap-2 text-base">
                                                        <Globe size={18} aria-hidden="true" className="shrink-0 text-olive-700" />
                                                        <a href={loc.website} target="_blank" rel="noopener noreferrer" className="break-all font-medium text-olive-700 underline-offset-2 hover:underline">{prettyUrl(loc.website)}</a>
                                                    </p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            )}

                            {m.areasServed?.length > 0 && (
                                <Card title="Areas served">
                                    <ul className="mt-5 flex flex-wrap gap-2.5">
                                        {m.areasServed.map((a) => (
                                            <li
                                                key={a}
                                                className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink-900 bg-white px-3.5 py-1 text-sm font-semibold"
                                            >
                                                <MapPin size={14} aria-hidden="true" className="text-olive-700" />
                                                {a}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            )}
                        </div>

                        {/* ----------------------------------------------------- aside */}
                        <aside className="space-y-6">
                            <div className="card p-7">
                                <h2 className="text-xl font-semibold">Get in touch</h2>
                                <p className="mt-2 text-base text-ink-600">You’ll reach {firstName(m.name)} directly.</p>

                                <dl className="mt-6 space-y-4 text-base">
                                    <Fact icon={Mail} label="Email">
                                        <a href={`mailto:${m.email}`} className="break-words font-medium text-olive-700 underline-offset-2 hover:underline">
                                            {m.email}
                                        </a>
                                    </Fact>
                                    {m.phone && (
                                        <Fact icon={Phone} label="Phone">
                                            <a href={telHref(m.phone)} className="font-medium text-olive-700 underline-offset-2 hover:underline">
                                                {m.phone}
                                            </a>
                                        </Fact>
                                    )}
                                    {m.website && (
                                        <Fact icon={Globe} label="Website">
                                            <a
                                                href={m.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="break-words font-medium text-olive-700 underline-offset-2 hover:underline"
                                            >
                                                {prettyUrl(m.website)}
                                            </a>
                                        </Fact>
                                    )}
                                    {m.address && (
                                        <Fact icon={MapPin} label="Address">
                                            {m.address}
                                        </Fact>
                                    )}
                                    {m.location && !m.address && (
                                        <Fact icon={MapPin} label="Location">
                                            {m.location}
                                        </Fact>
                                    )}
                                </dl>

                                {socials.length > 0 && (
                                    <ul className="mt-5 flex flex-wrap gap-2">
                                        {socials.map(({ label, href, icon }) => {
                                            const Icon = icon;
                                            return (
                                            <li key={label}>
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex min-h-[2.5rem] items-center gap-2 rounded-full border-2 border-ink-900 bg-white px-3.5 text-sm font-semibold transition-colors hover:bg-olive-300"
                                                >
                                                    <Icon size={16} aria-hidden="true" />
                                                    {label}
                                                    <span className="sr-only">, opens in a new tab</span>
                                                </a>
                                            </li>
                                            );
                                        })}
                                    </ul>
                                )}

                                <a href={`mailto:${m.email}`} className="btn-primary mt-7 w-full">
                                    Send an email
                                </a>
                                {m.booking && (
                                    <a href={m.booking} target="_blank" rel="noopener noreferrer" className="btn-plain mt-3 w-full">
                                        {m.bookingLabel || 'Book or enquire'}
                                        <ExternalLink size={18} aria-hidden="true" />
                                    </a>
                                )}
                            </div>

                            {m.logo && (
                                <div className="card flex items-center justify-center p-6">
                                    <img src={m.logo} alt={`${m.company} logo`} className="max-h-28 w-auto max-w-full" />
                                </div>
                            )}

                            {hasFacts && (
                                <div className="card-cream p-7">
                                    <h2 className="text-xl font-semibold">At a glance</h2>
                                    <dl className="mt-5 space-y-4 text-base">
                                        {m.hours && <Fact icon={Clock} label="Hours">{m.hours}</Fact>}
                                        {m.freeConsultation != null && (
                                            <Fact icon={CalendarCheck} label="Free initial consultation">
                                                {m.freeConsultation ? 'Yes' : 'No'}
                                            </Fact>
                                        )}
                                        {m.languages?.length > 0 && (
                                            <Fact icon={Languages} label="Languages">{m.languages.join(', ')}</Fact>
                                        )}
                                        {m.years && <Fact icon={Award} label="Working with seniors">{m.years}</Fact>}
                                        {m.established && <Fact icon={CalendarCheck} label="Established">{m.established}</Fact>}
                                    </dl>
                                </div>
                            )}
                        </aside>
                    </div>
                </section>

                {/* ------------------------------------------------------ colleagues */}
                {colleagues.length > 0 && (
                    <section className="border-t-2 border-ink-900 bg-parchment py-14 lg:py-20">
                        <div className="shell">
                            <p className="eyebrow">Also from {m.company}</p>
                            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                                {colleagues.length === 1 ? 'A colleague you can also reach' : 'Colleagues you can also reach'}
                            </h2>
                            <ul className="mt-8 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
                                {colleagues.map((o) => (
                                    <li key={o.slug}>
                                        <MemberCard member={o} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* --------------------------------------------------------- related */}
                {related.length > 0 && (
                    <section className="border-t-2 border-ink-900 bg-olive-50/50 py-14 lg:py-20">
                        <div className="shell">
                            <div className="flex flex-wrap items-end justify-between gap-4">
                                <h2 className="text-2xl font-semibold sm:text-3xl">Others in {m.category}</h2>
                                <Link
                                    to={`/directory?category=${encodeURIComponent(m.category)}`}
                                    className="inline-flex items-center gap-1.5 text-base font-semibold text-terra-600 underline-offset-4 hover:underline"
                                >
                                    See all
                                    <ArrowRight size={18} aria-hidden="true" />
                                </Link>
                            </div>
                            <ul className="mt-8 grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
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
