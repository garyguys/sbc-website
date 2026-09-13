import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { publishedResources } from '../data/resources';

export default function ResourcesPreview() {
    const items = publishedResources().slice(0, 3);
    if (items.length === 0) return null;

    return (
        <section id="resources" className="scroll-mt-24 bg-parchment py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <p className="eyebrow">Resources</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            Guidance worth having early
                        </h2>
                        <p className="mt-5 text-lg text-ink-700">
                            Practical, plain-language guides written for the conversations most families
                            put off until a crisis forces them.
                        </p>
                    </div>
                    <Link to="/resources" className="btn-outline shrink-0">
                        All resources
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>

                <ul className="mt-10 grid gap-6 md:grid-cols-3">
                    {items.map((r) => (
                        <li key={r.slug}>
                            <Link
                                to={`/resources/${r.slug}`}
                                className="card group flex h-full flex-col p-7 hover:shadow-card-hover"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl
                                               bg-terra-50 text-terra-600 transition-colors
                                               group-hover:bg-terra-500 group-hover:text-white"
                                >
                                    <BookOpen size={22} strokeWidth={1.75} />
                                </span>
                                <p className="eyebrow">{r.category}</p>
                                <h3 className="mt-2 text-xl font-semibold leading-snug group-hover:text-olive-700">
                                    {r.title}
                                </h3>
                                <p className="mt-3 flex-1 text-base text-ink-600">{r.summary}</p>
                                <p className="mt-5 text-sm font-medium text-ink-500">{r.readingTime}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
