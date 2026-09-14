import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { publishedResources } from '../data/resources';
import ResourceCard from './ResourceCard';

export default function ResourcesPreview() {
    const items = publishedResources().slice(0, 3);
    if (items.length === 0) return null;

    return (
        <section id="resources" className="band scroll-mt-24 bg-parchment">
            <div className="shell">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <p className="eyebrow">Resources</p>
                        <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Guidance worth having early</h2>
                        <p className="mt-5 text-xl text-ink-700">
                            Practical, plain-language guides written for the conversations most families put off
                            until a crisis forces them.
                        </p>
                    </div>
                    <Link to="/resources" className="btn-plain shrink-0">
                        All resources
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>

                <ul className="mt-12 grid gap-6 md:grid-cols-3">
                    {items.map((r) => (
                        <li key={r.slug}>
                            <ResourceCard resource={r} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
