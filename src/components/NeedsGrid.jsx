import { Link } from 'react-router-dom';
import {
    Home, Building2, HeartHandshake, Brain, Stethoscope,
    Wrench, PiggyBank, FileText, Users, ArrowRight,
} from 'lucide-react';
import { needs } from '../data/needs';
import { members } from '../data/members';

const ICONS = { Home, Building2, HeartHandshake, Brain, Stethoscope, Wrench, PiggyBank, FileText, Users };

export default function NeedsGrid() {
    return (
        <section id="needs" className="scroll-mt-24 bg-olive-50/60 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="max-w-2xl">
                    <p className="eyebrow">Start here</p>
                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        What do you need help with?
                    </h2>
                    <p className="mt-5 text-lg text-ink-700">
                        You don&rsquo;t need to know what kind of professional you&rsquo;re looking
                        for. Pick whichever of these sounds closest to your situation.
                    </p>
                </div>

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {needs.map((need) => {
                        const Icon = ICONS[need.icon] ?? Users;
                        const count = members.filter((m) => m.needs?.includes(need.key)).length;

                        return (
                            <li key={need.key}>
                                <Link
                                    to={`/directory?need=${need.key}`}
                                    className="card group flex h-full flex-col p-7 hover:shadow-card-hover
                                               focus-visible:ring-2 focus-visible:ring-olive-700"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl
                                                   bg-olive-100 text-olive-700 transition-colors
                                                   group-hover:bg-olive-700 group-hover:text-white"
                                    >
                                        <Icon size={26} strokeWidth={1.75} />
                                    </span>

                                    <h3 className="text-xl font-semibold leading-snug">{need.label}</h3>
                                    <p className="mt-2.5 flex-1 text-base text-ink-600">{need.description}</p>

                                    <span className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold text-terra-600">
                                        {count} {count === 1 ? 'member' : 'members'}
                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
