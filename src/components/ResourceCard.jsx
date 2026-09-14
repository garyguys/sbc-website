import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

/** A guide article card, shared by the home page preview and the resources index. */
export default function ResourceCard({ resource: r, headingLevel = 'h3' }) {
    const Heading = headingLevel;
    return (
        <Link to={`/resources/${r.slug}`} className="card card-press group flex h-full flex-col p-7">
            <span
                aria-hidden="true"
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl
                           border-2 border-ink-900 bg-olive-300 text-ink-900"
            >
                <BookOpen size={22} />
            </span>
            <p className="eyebrow">{r.category}</p>
            <Heading className="mt-2 text-xl font-semibold leading-snug group-hover:text-olive-700">{r.title}</Heading>
            <p className="mt-3 flex-1 text-base text-ink-600">{r.summary}</p>
            <p className="mt-5 flex items-center justify-between text-sm font-medium text-ink-500">
                {r.readingTime}
                <ArrowRight size={18} aria-hidden="true" className="text-terra-600 transition-transform group-hover:translate-x-1" />
            </p>
        </Link>
    );
}
