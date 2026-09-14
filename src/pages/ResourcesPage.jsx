import ResourceCard from '../components/ResourceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { publishedResources } from '../data/resources';
import usePageMeta from '../lib/usePageMeta';

export default function ResourcesPage() {
    usePageMeta({
        title: 'Resources for seniors and families',
        description: 'Plain-language guides from the Seniors Professional Network: touring a residence, downsizing, home safety, and talking to a parent about help.',
        path: '/resources',
    });
    const items = publishedResources();

    return (
        <>
            <Navbar />
            <main id="main">
                <section className="border-b-2 border-ink-900 bg-olive-50/50">
                    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
                        <p className="eyebrow">Resources</p>
                        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
                            Guides for the decisions ahead
                        </h1>
                        <p className="mt-5 max-w-2xl text-xl text-ink-700">
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
                                    <ResourceCard resource={r} headingLevel="h2" />
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
