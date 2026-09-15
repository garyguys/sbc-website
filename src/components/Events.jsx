import { MapPin, CalendarDays, Clock, ArrowUpRight, Mail } from 'lucide-react';
import { upcomingEvents, monthName, shortDate, parseDate } from '../data/events';

/** Card treatments cycle so the timeline reads as a pinboard. */
const TONES = ['card-accent', 'card', 'card-dark', 'card', 'card-cream'];

const STYLE = {
    'card': { date: 'text-terra-600', title: 'text-ink-900', body: 'text-ink-600', meta: 'text-ink-500' },
    'card-accent': { date: 'text-terra-800', title: 'text-ink-900', body: 'text-ink-700', meta: 'text-ink-800' },
    'card-cream': { date: 'text-terra-600', title: 'text-ink-900', body: 'text-ink-700', meta: 'text-ink-600' },
    'card-dark': { date: 'text-olive-300', title: 'text-parchment', body: 'text-olive-100', meta: 'text-olive-200' },
};

const COLUMNS = 5; // months shown on the wide timeline

const audienceLabel = (e) => (e.audience === 'members' ? 'Members only' : 'Open to the public');

/** Small tag marking the network's own events, so they stand apart from members' events. */
const SPN_TAG = {
    'card': 'border-ink-900 bg-olive-300 text-ink-900',
    'card-accent': 'border-ink-900 bg-white text-ink-900',
    'card-cream': 'border-ink-900 bg-olive-300 text-ink-900',
    'card-dark': 'border-olive-300 bg-olive-300 text-ink-900',
};

function EventBody({ event: e, tone, index, withMonth = false }) {
    const s = STYLE[tone];
    return (
        <>
            <div className="flex items-start justify-between gap-3">
                <p className={`flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] ${s.date}`}>
                    {withMonth && <CalendarDays size={16} aria-hidden="true" />}
                    {withMonth ? `${monthName(e.date)} — ` : ''}
                    {shortDate(e.date)}
                    {e.endDate && ` to ${shortDate(e.endDate)}`}
                </p>
                <span className="flex shrink-0 items-center gap-2">
                    {e.organizer === 'spn' && (
                        <span className={`whitespace-nowrap rounded-full border-2 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] ${SPN_TAG[tone]}`}>
                            SPN event
                        </span>
                    )}
                    <span className="badge-num !h-7 !w-7 !text-xs">{index + 1}</span>
                </span>
            </div>
            <h3 className={`mt-3 font-serif text-xl font-bold leading-snug ${s.title}`}>
                {e.link ? (
                    <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {e.title}
                        <ArrowUpRight size={16} aria-hidden="true" className="ml-1 inline" />
                    </a>
                ) : (
                    e.title
                )}
            </h3>
            {e.summary && <p className={`mt-2 text-base leading-relaxed ${s.body}`}>{e.summary}</p>}
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
                {e.hostName && (
                    <p className="text-xs uppercase tracking-[0.1em] opacity-80">Hosted by {e.hostName}</p>
                )}
                <p className="text-xs uppercase tracking-[0.1em] opacity-80">{audienceLabel(e)}</p>
            </div>
        </>
    );
}

export default function Events() {
    const list = upcomingEvents(6);

    // Month columns start from the current month, or the first event's month
    // if everything listed is further out than that.
    const today = new Date();
    const firstEvent = list[0] ? parseDate(list[0].date) : today;
    const start = new Date(Math.min(today, firstEvent));
    const months = Array.from({ length: COLUMNS }, (_, i) => {
        const d = new Date(start.getFullYear(), start.getMonth() + i, 1);
        return { key: `${d.getFullYear()}-${d.getMonth()}`, label: monthName(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`) };
    });
    const columnFor = (e) => {
        const d = parseDate(e.date);
        return months.findIndex((m) => m.key === `${d.getFullYear()}-${d.getMonth()}`);
    };

    // Only events that land inside the visible months go on the wide timeline
    const onTimeline = list.filter((e) => columnFor(e) >= 0);

    return (
        <section id="events" className="band scroll-mt-24 bg-olive-50/50">
            <div className="shell-wide">
                <div className="max-w-2xl">
                    <p className="eyebrow">What’s on</p>
                    <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Upcoming events</h2>
                    <p className="mt-5 text-xl text-ink-700">
                        Workshops, talks, open houses and community events from the network and its members, open to
                        the public.
                    </p>
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
                    <>
                        {/* Wide screens: one column per month, cards level at the top */}
                        <div className="mt-12 hidden xl:block">
                            <div className="grid gap-x-4" style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}>
                                {months.map((m) => (
                                    <div
                                        key={m.key}
                                        className="rounded-lg border-2 border-ink-900 bg-olive-100 px-3 py-2 text-center
                                                   text-sm font-bold uppercase tracking-[0.12em]"
                                    >
                                        {m.label}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 grid gap-x-4" style={{ gridTemplateColumns: `repeat(${COLUMNS}, minmax(0, 1fr))` }}>
                                {months.map((m, col) => (
                                    <div key={m.key} className="flex min-h-[10rem] flex-col gap-5 border-l border-dashed border-ink-300 pb-4 pl-4 pr-1 pt-2 last:border-r">
                                        {onTimeline
                                            .map((e, i) => ({ e, i }))
                                            .filter(({ e }) => columnFor(e) === col)
                                            .map(({ e, i }) => {
                                                const tone = TONES[i % TONES.length];
                                                return (
                                                    <article key={`${e.date}-${e.title}`} className={`${tone} card-press p-5`}>
                                                        <EventBody event={e} tone={tone} index={i} />
                                                    </article>
                                                );
                                            })}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Everything narrower: a plain stack */}
                        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:hidden">
                            {list.map((e, i) => {
                                const tone = TONES[i % TONES.length];
                                return (
                                    <li key={`${e.date}-${e.title}`}>
                                        <article className={`${tone} p-6`}>
                                            <EventBody event={e} tone={tone} index={i} withMonth />
                                        </article>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
}
