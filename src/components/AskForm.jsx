import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { FIELD, LABEL } from '../lib/formStyles';

/**
 * The one contact form on the site. Submissions go to Formspree, which emails
 * them to info@seniorsbc.com and keeps a copy in the Formspree inbox.
 *
 * Works two ways:
 *  - With JavaScript (normal): submitted in the background, then the visitor
 *    is taken to /thank-you.
 *  - Without JavaScript: a plain HTML POST to Formspree, which then redirects
 *    to the `_next` address below.
 *
 * The "updates" checkbox doubles as the mailing-list sign-up, so there is no
 * separate newsletter form. Search the Formspree inbox for "Yes" in the
 * updates column to build the list.
 */
const FORM_ENDPOINT = 'https://formspree.io/f/mdeorbay';
const THANK_YOU_URL = 'https://www.seniorsbc.com/thank-you';

const TOPICS = [
    'Choosing a retirement residence or care home',
    'Downsizing, selling and moving',
    'Help and care at home',
    'Wills, powers of attorney and finances',
    'Staying active, connected and safe',
    'An upcoming event',
    'Something else',
];


export default function AskForm({ idPrefix = 'ask' }) {
    const navigate = useNavigate();
    const [status, setStatus] = useState('idle'); // idle | sending | error
    const id = (name) => `${idPrefix}-${name}`;

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
            navigate('/thank-you');
        } catch {
            setStatus('error');
        }
    };

    return (
        <form action={FORM_ENDPOINT} method="POST" onSubmit={onSubmit} className="flex flex-col gap-5" noValidate={false}>
            {/* Formspree settings. `_gotcha` is a honeypot: hidden from people, filled by bots. */}
            <input type="hidden" name="_subject" value="New message from seniorsbc.com" />
            <input type="hidden" name="_next" value={THANK_YOU_URL} />
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor={id('name')} className={LABEL}>Your name</label>
                    <input id={id('name')} name="name" type="text" required autoComplete="name" className={`${FIELD} mt-2 h-14`} />
                </div>
                <div>
                    <label htmlFor={id('phone')} className={LABEL}>
                        Phone <span className="font-normal text-ink-500">(optional)</span>
                    </label>
                    <input id={id('phone')} name="phone" type="tel" autoComplete="tel" className={`${FIELD} mt-2 h-14`} />
                </div>
            </div>

            <div>
                <label htmlFor={id('email')} className={LABEL}>Email address</label>
                <input id={id('email')} name="email" type="email" required autoComplete="email" className={`${FIELD} mt-2 h-14`} />
            </div>

            <div>
                <label htmlFor={id('topic')} className={LABEL}>What do you need help with?</label>
                <select id={id('topic')} name="topic" required defaultValue="" className={`${FIELD} mt-2 h-14`}>
                    <option value="" disabled>Choose one</option>
                    {TOPICS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor={id('message')} className={LABEL}>Tell us a little about your situation</label>
                <textarea
                    id={id('message')}
                    name="message"
                    required
                    rows={5}
                    placeholder="A few sentences is plenty. We will get back to you by email, or by phone if you prefer."
                    className={`${FIELD} mt-2 py-4`}
                />
            </div>

            <label htmlFor={id('updates')} className="flex cursor-pointer items-start gap-3 text-base text-ink-800">
                <input
                    id={id('updates')}
                    name="updates"
                    type="checkbox"
                    value="Yes"
                    className="mt-1 h-5 w-5 shrink-0 accent-olive-700"
                />
                <span>
                    Also send me occasional emails about workshops, community events and safety resources. Nothing
                    else, never your details to anyone, and you can unsubscribe at any time.
                </span>
            </label>

            {status === 'error' && (
                <p role="alert" className="rounded-2xl border-2 border-terra-700 bg-terra-100 px-5 py-4 text-base text-terra-800">
                    Sorry, that did not go through. Please try again, or email us at{' '}
                    <a href="mailto:info@seniorsbc.com" className="font-semibold underline">info@seniorsbc.com</a>.
                </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-accent w-full disabled:opacity-70">
                {status === 'sending' ? (
                    <>
                        Sending
                        <LoaderCircle size={18} aria-hidden="true" className="animate-spin" />
                    </>
                ) : (
                    <>
                        Send message
                        <span className="btn-arrow-invert">
                            <ArrowRight size={18} aria-hidden="true" />
                        </span>
                    </>
                )}
            </button>

            <p className="text-sm text-ink-600">
                Your details are only used to answer you. See our{' '}
                <Link to="/privacy" className="underline underline-offset-4 hover:text-olive-700">privacy policy</Link>.
            </p>
        </form>
    );
}
