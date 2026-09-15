import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, LoaderCircle, CalendarPlus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import usePageMeta from '../lib/usePageMeta';
import { FIELD, LABEL } from '../lib/formStyles';

/**
 * Unlisted page for members to submit their own events (open houses,
 * seminars, community days) for the home-page calendar. Not linked from the
 * site and marked noindex; share the address with members directly.
 *
 * Submissions go to a dedicated Formspree form and are added to
 * src/data/events.js by hand after review.
 */
const FORM_ENDPOINT = 'https://formspree.io/f/maeyrvzv';
const THANK_YOU_URL = 'https://www.seniorsbc.com/thank-you?sent=event';

export default function SubmitEvent() {
    usePageMeta({
        title: 'Submit an event',
        description: 'For SPN members: submit an upcoming event for the seniorsbc.com calendar.',
        path: '/submit-event',
        noindex: true,
    });

    const navigate = useNavigate();
    const [status, setStatus] = useState('idle');

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setStatus('sending');
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: new FormData(form),
            });
            if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
            form.reset();
            navigate('/thank-you?sent=event');
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <Navbar />
            <main id="main" className="bg-parchment">
                <section className="border-b-2 border-ink-900 bg-olive-50/50">
                    <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
                        <p className="eyebrow">For SPN members</p>
                        <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Submit an event</h1>
                        <p className="mt-5 max-w-2xl text-xl text-ink-700">
                            Hosting an open house, a seminar or a community day that seniors and families are welcome
                            at? Send the details here and it will be added to the events calendar on the home page.
                            Events are reviewed before they go up, usually within a few days.
                        </p>
                    </div>
                </section>

                <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
                    <form action={FORM_ENDPOINT} method="POST" onSubmit={onSubmit} className="card flex flex-col gap-6 p-8 md:p-10">
                        <input type="hidden" name="_subject" value="New event submitted on seniorsbc.com" />
                        <input type="hidden" name="_next" value={THANK_YOU_URL} />
                        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                        <h2 className="font-serif text-2xl font-bold">About you</h2>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="ev-name" className={LABEL}>Your name</label>
                                <input id="ev-name" name="name" type="text" required autoComplete="name" className={`${FIELD} mt-2 h-14`} />
                            </div>
                            <div>
                                <label htmlFor="ev-email" className={LABEL}>Your email</label>
                                <input id="ev-email" name="email" type="email" required autoComplete="email" className={`${FIELD} mt-2 h-14`} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ev-business" className={LABEL}>Business or organization hosting the event</label>
                            <input id="ev-business" name="business" type="text" required autoComplete="organization" className={`${FIELD} mt-2 h-14`} />
                        </div>

                        <h2 className="mt-2 font-serif text-2xl font-bold">The event</h2>
                        <div>
                            <label htmlFor="ev-title" className={LABEL}>Event title</label>
                            <input
                                id="ev-title"
                                name="title"
                                type="text"
                                required
                                placeholder="For example: Open house and lunch at Renaissance Langley"
                                className={`${FIELD} mt-2 h-14`}
                            />
                        </div>
                        <div className="grid gap-5 sm:grid-cols-3">
                            <div>
                                <label htmlFor="ev-date" className={LABEL}>Date</label>
                                <input id="ev-date" name="date" type="date" required className={`${FIELD} mt-2 h-14`} />
                            </div>
                            <div>
                                <label htmlFor="ev-start" className={LABEL}>Start time</label>
                                <input id="ev-start" name="start_time" type="text" required placeholder="10:30 a.m." className={`${FIELD} mt-2 h-14`} />
                            </div>
                            <div>
                                <label htmlFor="ev-end" className={LABEL}>
                                    End time <span className="font-normal text-ink-500">(optional)</span>
                                </label>
                                <input id="ev-end" name="end_time" type="text" placeholder="2:00 p.m." className={`${FIELD} mt-2 h-14`} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ev-location" className={LABEL}>Location</label>
                            <input
                                id="ev-location"
                                name="location"
                                type="text"
                                required
                                placeholder="Venue name and full address, or Online"
                                className={`${FIELD} mt-2 h-14`}
                            />
                        </div>
                        <div>
                            <label htmlFor="ev-summary" className={LABEL}>Short description</label>
                            <p className="mt-1 text-sm text-ink-600">
                                One or two sentences, written for seniors and families: what happens, who it is for, and
                                whether lunch or refreshments are included.
                            </p>
                            <textarea id="ev-summary" name="summary" required rows={4} className={`${FIELD} mt-2 py-4`} />
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="ev-link" className={LABEL}>
                                    Link for details or registration <span className="font-normal text-ink-500">(optional)</span>
                                </label>
                                <input id="ev-link" name="link" type="url" placeholder="https://" className={`${FIELD} mt-2 h-14`} />
                            </div>
                            <div>
                                <label htmlFor="ev-rsvp" className={LABEL}>
                                    How should people RSVP? <span className="font-normal text-ink-500">(optional)</span>
                                </label>
                                <input id="ev-rsvp" name="rsvp" type="text" placeholder="Call, email, or just show up" className={`${FIELD} mt-2 h-14`} />
                            </div>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="ev-audience" className={LABEL}>Who is it open to?</label>
                                <select id="ev-audience" name="audience" required defaultValue="public" className={`${FIELD} mt-2 h-14`}>
                                    <option value="public">Open to the public</option>
                                    <option value="members">SPN members only</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="ev-cost" className={LABEL}>
                                    Is there a charge to attend? <span className="font-normal text-ink-500">(leave blank if free)</span>
                                </label>
                                <input id="ev-cost" name="cost" type="text" className={`${FIELD} mt-2 h-14`} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="ev-notes" className={LABEL}>
                                Anything else Garrett should know? <span className="font-normal text-ink-500">(optional)</span>
                            </label>
                            <textarea id="ev-notes" name="notes" rows={3} className={`${FIELD} mt-2 py-4`} />
                        </div>

                        <label htmlFor="ev-consent" className="flex cursor-pointer items-start gap-3 text-base text-ink-800">
                            <input id="ev-consent" name="consent" type="checkbox" value="Yes" required className="mt-1 h-5 w-5 shrink-0 accent-olive-700" />
                            <span>
                                I confirm the details are accurate and I am authorized to have this event published on
                                the SPN website.
                            </span>
                        </label>

                        {status === 'error' && (
                            <p role="alert" className="rounded-2xl border-2 border-terra-700 bg-terra-100 px-5 py-4 text-base text-terra-800">
                                Sorry, that did not go through. Please try again, or email the details to{' '}
                                <a href="mailto:info@seniorsbc.com" className="font-semibold underline">info@seniorsbc.com</a>.
                            </p>
                        )}

                        <button type="submit" disabled={status === 'sending'} className="btn-accent w-full disabled:opacity-70 sm:w-auto sm:self-start">
                            {status === 'sending' ? (
                                <>
                                    Sending
                                    <LoaderCircle size={18} aria-hidden="true" className="animate-spin" />
                                </>
                            ) : (
                                <>
                                    <CalendarPlus size={18} aria-hidden="true" />
                                    Submit event
                                    <span className="btn-arrow-invert">
                                        <ArrowRight size={18} aria-hidden="true" />
                                    </span>
                                </>
                            )}
                        </button>

                        <p className="text-sm text-ink-600">
                            Questions about an event you have already sent? Email{' '}
                            <a href="mailto:info@seniorsbc.com" className="underline underline-offset-4 hover:text-olive-700">info@seniorsbc.com</a>.
                            See the <Link to="/#events" className="underline underline-offset-4 hover:text-olive-700">current calendar</Link>.
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
