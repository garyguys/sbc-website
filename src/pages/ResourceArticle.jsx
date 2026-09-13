import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getResourceBySlug } from '../data/resources';
import { getNeed } from '../data/needs';

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
                <aside className="mt-8 flex gap-4 rounded-2xl border-l-4 border-terra-500 bg-terra-50 p-6">
                    <Info size={22} aria-hidden="true" className="mt-1 shrink-0 text-terra-600" />
                    <p className="text-lg leading-relaxed text-terra-900">{block.text}</p>
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
                    <header className="border-b border-ink-200 bg-olive-50/60">
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

                            {article.relatedNeeds?.length > 0 && (
                                <div className="mt-16 rounded-2xl border border-ink-200 bg-white p-8">
                                    <h2 className="text-xl font-semibold">Need someone to help with this?</h2>
                                    <p className="mt-2 text-base text-ink-600">
                                        These members of the network work on exactly this.
                                    </p>
                                    <ul className="mt-5 flex flex-wrap gap-3">
                                        {article.relatedNeeds.map((key) => {
                                            const need = getNeed(key);
                                            if (!need) return null;
                                            return (
                                                <li key={key}>
                                                    <Link to={`/directory?need=${key}`} className="btn-primary !text-[0.95rem]">
                                                        {need.label}
                                                        <ArrowRight size={17} aria-hidden="true" />
                                                    </Link>
                                                </li>
                                            );
                                        })}
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
