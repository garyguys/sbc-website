import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowUpRight, ArrowRight, Mail } from 'lucide-react';
import { upcomingEvents, monthName, parseDate } from '../data/events';

/**
 * Upcoming events, grouped by month. Each month is a heading with a grid of
 * cards beneath it, so a busy month simply adds a row rather than stretching
 * a column down the page. The home page shows the next few; /events shows
 * everything.
 */

/** Card treatments cycle so the list reads as a pinboard. */
const TONES = ['card-accent', 'card', 'card-dark', 'card', 'card-cream'];

const STYLE = {
    'card': { date: 'bg-olive-100 text-ink-900', title: 'text-ink-900', body: 'text-ink-600', meta: 'text-ink-500', tag: 'bg-olive-300 text-ink-900' },
    'card-accent': { date: 'bg-white text-ink-900', title: 'text-ink-900', body: 'text-ink-700', meta: 'text-ink-800', tag: 'bg-white text-ink-900' },
    'card-cream': { date: 'bg-white text-ink-900', title: 'text-ink-900', body: 'text-ink-700', meta: 'text-ink-600', tag: 'bg-olive-300 text-ink-900' },
    'card-dark': { date: 'bg-olive-300 text-ink-900', title: 'text-parchment', body: 'text-olive-100', meta: 'text-olive-200', tag: 'bg-olive-300 text-ink-900' },
};

const audienceLabel = (e) => (e.audience === 'members' ? 'Members only' : 'Open to the public');

const dayNumber = (iso) => parseDate(iso).getDate();
const weekday = (iso) => parseDate(iso).toLocaleDateString('en-CA', { weekday: 'short' });
const monthShort = (iso) => parseDate(iso).toLocaleDateString('en-CA', { month: 'short' });

/** Group a sorted list of events by calendar month, keeping order. */
const groupByMonth = (list) => {
    const groups = [];
    for (const e of list) {
        const d = parseDate(e.date);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        let g = groups[groups.length - 1];
        if (!g || g.key !== key) {
            g = { key, label: `${monthName(e.date)} ${d.getFullYear()}`, events: [] };
            groups.push(g);
        }
        g.events.push(e);
    }
    return groups;
};

export function EventCard({ event: e, index, clamp = true }) {
    const tone = TONES[index % TONES.length];
    const s = STYLE[tone];
    return (
        <article className={`${tone} card-press flex h-full flex-col p-5 sm:p-6`}>
            <div className="flex items-start justify-between gap-3">
                {/* Date block */}
                <p className={`flex shrink-0 flex-col items-center rounded-xl border-2 border-ink-900 px-3 py-1.5 leading-none ${s.date}`}>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em]">{weekday(e.date)}</span>
                    <span className="mt-1 font-serif text-2xl font-bold">{dayNumber(e.date)}</span>
                    <span className="mt-0.5 text-[0.65rem] font-bold uppercase tracking-[0.12em]">
                        {monthShort(e.date)}
                        {e.endDate && ` to ${dayNumber(e.endDate)} ${monthShort(e.endDate)}`}
                    </span>
                </p>
                <span className="flex flex-wrap items-center justify-end gap-2">
                    {e.organizer && (
                        <span className={`whitespace-nowrap rounded-full border-2 border-ink-900 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] ${s.tag}`}>
                            {e.organizer === 'spn' ? 'SPN event' : 'Member event'}
                        </span>
                    )}
                    {e.audience === 'members' && (
                        <span className={`whitespace-nowrap rounded-full border-2 border-ink-900 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] ${s.tag}`}>
                            Members only
                        </span>
                    )}
                </span>
            </div>

            <h3 className={`mt-4 font-serif text-xl font-bold leading-snug ${s.title}`}>
                {e.link ? (
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {e.title}
                        <ArrowUpRight size={16} aria-hidden="true" className="ml-1 inline" />
                    </a>
                ) : (
                    e.title
                )}
            </h3>
            {(e.hostName || e.organizer === 'spn') && (
                <p className={`mt-1 text-sm font-semibold ${s.meta}`}>
                    Hosted by{' '}
                    {e.organizer === 'spn' && !e.hostName ? (
                        'Seniors Professional Network'
                    ) : e.host ? (
                        <Link to={`/directory/${e.host}`} className="underline-offset-4 hover:underline">{e.hostName}</Link>
                    ) : (
                        e.hostName
                    )}
                </p>
            )}
            {e.summary && (
                <p className={`mt-3 text-base leading-relaxed ${s.body} ${clamp ? 'line-clamp-3' : ''}`}>{e.summary}</p>
            )}

            <div className="flex-1" />
            <div className={`mt-4 space-y-1.5 text-sm font-semibold ${s.meta}`}>
                {e.time && (
                    <p className="flex items-start gap-2">
                        <Clock size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                        <span>{e.time}</span>
                    </p>
                )}
                <p className="flex items-start gap-2">
                    <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                    <span>{e.location || 'Location to confirm'}</span>
                </p>
                {e.audience !== 'members' && (
                    <p className="text-xs uppercase tracking-[0.1em] opacity-80">{audienceLabel(e)}</p>
                )}
            </div>
        </article>
    );
}

/** Month heading plus a grid of cards. Shared by the home page and /events. */
export function EventGroups({ list, clamp = true }) {
    let index = 0;
    return groupByMonth(list).map((g) => (
        <div key={g.key} className="mt-12 first:mt-0">
            {/* Month divider: the label sits on a dashed rule that runs the full width */}
            <div className="flex items-center gap-4">
                <h3 className="shrink-0 rounded-lg border-2 border-ink-900 bg-olive-100 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.12em]">
                    {g.label}
                </h3>
                <span aria-hidden="true" className="h-0 flex-1 border-t-2 border-dashed border-ink-300" />
            </div>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {g.events.map((e) => {
                    const i = index++;
                    return (
                        <li key={`${e.date}-${e.title}`}>
                            <EventCard event={e} index={i} clamp={clamp} />
                        </li>
                    );
                })}
            </ul>
        </div>
    ));
}

const HOME_LIMIT = 6;

export default function Events() {
    const list = upcomingEvents(HOME_LIMIT);
    const total = upcomingEvents(1000).length;

    return (
        <section id="events" className="band scroll-mt-24 bg-olive-50/50">
            <div className="shell-wide">
                <div className="flex flex-wrap items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <p className="eyebrow">What’s on</p>
                        <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Upcoming events</h2>
                        <p className="mt-5 text-xl text-ink-700">
                            Workshops, talks, open houses and community events from the network and its members, open to
                            the public.
                        </p>
                    </div>
                    {total > 0 && (
                        <Link to="/events" className="btn-primary shrink-0">
                            {total > HOME_LIMIT ? `See all ${total} events` : 'See all events'}
                            <span className="btn-arrow">
                                <ArrowUpRight size={18} aria-hidden="true" />
                            </span>
                        </Link>
                    )}
                </div>

                {list.length === 0 ? (
                    <div className="card mt-12 max-w-2xl p-8">
                        <h3 className="font-serif text-2xl font-bold">Nothing on the calendar just yet</h3>
                        <p className="mt-3 text-lg leading-relaxed text-ink-700">
                            Public events are added here as they are confirmed. If you would like to hear about the
                            next one, drop us a line.
                        </p>
                        <a href="#ask" className="btn-plain mt-7">
                            <Mail size={18} aria-hidden="true" />
                            Send us a message
                        </a>
                    </div>
                ) : (
                    <div className="mt-12">
                        <EventGroups list={list} />
                        {total > HOME_LIMIT && (
                            <p className="mt-8 text-lg text-ink-700">
                                Showing the next {HOME_LIMIT} of {total}.{' '}
                                <Link to="/events" className="inline-flex items-center gap-1 font-semibold text-olive-700 underline-offset-4 hover:underline">
                                    See the full calendar
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
