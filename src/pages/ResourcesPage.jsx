import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { publishedResources } from '../data/resources';

export default function ResourcesPage() {
    const items = publishedResources();

    return (
        <>
            <Navbar />
            <main id="main">
                <section className="border-b border-ink-200 bg-olive-50/60">
                    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
                        <p className="eyebrow">Resources</p>
                        <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                            Guides for the decisions ahead
                        </h1>
                        <p className="mt-5 max-w-2xl text-lg text-ink-700">
                            Plain-language guidance from the people who do this every day. Written to be
                            read before a decision has to be made, not after.
                        </p>
                    </div>
                </section>

                <section className="bg-parchment py-12 lg:py-20">
                    <div className="mx-auto max-w-7xl px-5 lg:px-8">
                        {items.length > 0 ? (
                            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                                            <h2 className="mt-2 text-xl font-semibold leading-snug group-hover:text-olive-700">
                                                {r.title}
                                            </h2>
                                            <p className="mt-3 flex-1 text-base text-ink-600">{r.summary}</p>
                                            <p className="mt-5 flex items-center justify-between text-sm font-medium text-ink-500">
                                                {r.readingTime}
                                                <ArrowRight
                                                    size={17}
                                                    aria-hidden="true"
                                                    className="text-terra-600 transition-transform group-hover:translate-x-1"
                                                />
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-lg text-ink-700">New guides are on the way.</p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
