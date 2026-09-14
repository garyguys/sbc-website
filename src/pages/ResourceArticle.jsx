import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getResourceBySlug } from '../data/resources';

function Block({ block }) {
    switch (block.t) {
        case 'h2':
            return <h2 className="mt-12 text-2xl font-semibold sm:text-[1.75rem]">{block.text}</h2>;
        case 'p':
            return <p className="mt-5 text-lg leading-relaxed text-ink-700">{block.text}</p>;
        case 'ul':
            return (
                <ul className="mt-5 space-y-3">
                    {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-ink-700">
                            <span
                                aria-hidden="true"
                                className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-terra-500"
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            );
        case 'callout':
            return (
                <aside className="card-accent mt-8 flex gap-4 p-6">
                    <Info size={22} aria-hidden="true" className="mt-1 shrink-0 text-ink-900" />
                    <p className="text-lg font-medium leading-relaxed text-ink-900">{block.text}</p>
                </aside>
            );
        default:
            return null;
    }
}

export default function ResourceArticle() {
    const { slug } = useParams();
    const article = getResourceBySlug(slug);

    useEffect(() => {
        if (!article) return;
        const previous = document.title;
        document.title = `${article.title} | Seniors Professional Network`;
        return () => { document.title = previous; };
    }, [article]);

    if (!article) return <Navigate to="/resources" replace />;

    return (
        <>
            <Navbar />
            <main id="main">
                <article>
                    <header className="border-b-2 border-ink-900 bg-olive-50/50">
                        <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
                            <Link
                                to="/resources"
                                className="inline-flex items-center gap-2 text-base font-medium text-ink-600 hover:text-olive-700"
                            >
                                <ArrowLeft size={18} aria-hidden="true" />
                                All resources
                            </Link>
                            <p className="eyebrow mt-8">{article.category}</p>
                            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                                {article.title}
                            </h1>
                            <p className="mt-5 text-xl text-ink-700">{article.summary}</p>
                            <p className="mt-6 text-base font-medium text-ink-500">{article.readingTime}</p>
                        </div>
                    </header>

                    <div className="bg-parchment py-12 lg:py-16">
                        <div className="mx-auto max-w-3xl px-5 lg:px-8">
                            {article.body.map((block, i) => (
                                <Block key={i} block={block} />
                            ))}

                            {article.relatedCategories?.length > 0 && (
                                <div className="card-dark mt-16 p-8">
                                    <h2 className="font-serif text-2xl font-bold text-parchment">Need someone to help with this?</h2>
                                    <p className="mt-3 text-lg text-olive-100">
                                        These members of the network work on exactly this.
                                    </p>
                                    <ul className="mt-7 flex flex-wrap gap-3">
                                        {article.relatedCategories.map((c) => (
                                            <li key={c}>
                                                <Link to={`/directory?category=${encodeURIComponent(c)}`} className="btn-accent">
                                                    {c}
                                                    <ArrowRight size={18} aria-hidden="true" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
