import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EventGroups } from '../components/Events';
import { upcomingEvents } from '../data/events';
import usePageMeta from '../lib/usePageMeta';

/** Every upcoming event, grouped by month. The home page shows only the next few. */
export default function EventsPage() {
    usePageMeta({
        title: 'Upcoming events',
        description:
            'Workshops, talks, open houses and community events for seniors and families across Metro Vancouver and the Fraser Valley, from the Seniors Professional Network and its members.',
        path: '/events',
    });

    const list = upcomingEvents(1000);

    return (
        <>
            <Navbar />
            <main id="main" className="bg-parchment">
                <section className="border-b-2 border-ink-900 bg-olive-50/50">
                    <div className="shell-wide py-12 lg:py-16">
                        <Link to="/" className="inline-flex items-center gap-2 text-base font-medium text-ink-600 hover:text-olive-700">
                            <ArrowLeft size={18} aria-hidden="true" />
                            Back to home
                        </Link>
                        <p className="eyebrow mt-8">What’s on</p>
                        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Upcoming events</h1>
                        <p className="mt-5 max-w-2xl text-xl text-ink-700">
                            Workshops, talks, open houses and community events from the network and its members. Unless
                            marked otherwise, everyone is welcome.
                        </p>
                    </div>
                </section>

                <div className="shell-wide py-12 lg:py-16">
                    {list.length === 0 ? (
                        <div className="card max-w-2xl p-8">
                            <h2 className="font-serif text-2xl font-bold">Nothing on the calendar just yet</h2>
                            <p className="mt-3 text-lg leading-relaxed text-ink-700">
                                Public events are added here as they are confirmed. If you would like to hear about the
                                next one, drop us a line.
                            </p>
                            <Link to="/#ask" className="btn-plain mt-7">
                                <Mail size={18} aria-hidden="true" />
                                Send us a message
                            </Link>
                        </div>
                    ) : (
                        <EventGroups list={list} clamp={false} />
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
