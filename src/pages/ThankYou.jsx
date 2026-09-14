import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageMeta from '../lib/usePageMeta';

/** Landing page after the "Just ask us" form is sent (see AskForm). */
export default function ThankYou() {
    usePageMeta({
        title: 'Thank you',
        description: 'Your message to the Seniors Professional Network has been sent.',
        path: '/thank-you',
    });

    return (
        <>
            <Navbar />
            <main id="main" className="bg-parchment">
                <section className="band">
                    <div className="shell">
                        <div className="card mx-auto max-w-2xl p-8 text-center sm:p-12">
                            <span
                                aria-hidden="true"
                                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink-900 bg-olive-300 text-ink-900 shadow-hard-sm"
                            >
                                <Check size={30} strokeWidth={3} />
                            </span>
                            <p className="eyebrow mt-8">Message sent</p>
                            <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Thank you</h1>
                            <p className="mx-auto mt-6 max-w-lg text-xl leading-relaxed text-ink-700">
                                Your message is on its way to us. A real person will read it and reply within a couple
                                of business days, by email or by phone if you asked for a call.
                            </p>
                            <p className="mx-auto mt-4 max-w-lg text-base text-ink-600">
                                If it is urgent, you can also reach any member directly through the directory.
                            </p>
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Link to="/directory" className="btn-accent w-full sm:w-auto">
                                    Browse the directory
                                    <span className="btn-arrow-invert">
                                        <ArrowRight size={18} aria-hidden="true" />
                                    </span>
                                </Link>
                                <Link to="/" className="btn-plain w-full sm:w-auto">
                                    Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
