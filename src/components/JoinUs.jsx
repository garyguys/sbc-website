import { ArrowRight, Check, Mail } from 'lucide-react';

const CONTACT_EMAIL = 'info@seniorsbc.com';

const BENEFITS = [
    'A listing in the public directory',
    'Referrals from members in other industries',
    'Regular network meetings',
    'A voice in how the network is run',
];

export default function JoinUs() {
    return (
        <section id="join" className="band scroll-mt-24 bg-parchment">
            <div className="shell">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="eyebrow">Membership &amp; contact</p>
                    <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Join us, or just ask us</h2>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {/* Professionals */}
                    <div className="card-dark flex flex-col p-8 lg:row-span-2">
                        <p className="inline-flex w-fit rounded-full border-2 border-ink-900 bg-olive-300 px-4 py-1 text-sm font-bold text-ink-900">
                            For professionals
                        </p>
                        <h3 className="mt-6 font-serif text-3xl font-bold text-parchment">Apply to join</h3>
                        <p className="mt-4 text-lg leading-relaxed text-olive-100">
                            Membership is by application. Members meet regularly, refer to one another, and are
                            expected to hold a high standard in how they work with seniors and their families.
                        </p>
                        <ul className="mt-8 space-y-3.5">
                            {BENEFITS.map((b) => (
                                <li key={b} className="flex items-start gap-3 text-base text-parchment">
                                    <span
                                        aria-hidden="true"
                                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olive-300 text-ink-900"
                                    >
                                        <Check size={14} strokeWidth={3} />
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <div className="flex-1" />
                        <a href={`mailto:${CONTACT_EMAIL}?subject=Membership%20Application`} className="btn-accent mt-9 w-full">
                            Apply now
                            <span className="btn-arrow-invert">
                                <ArrowRight size={18} aria-hidden="true" />
                            </span>
                        </a>
                    </div>

                    {/* Families */}
                    <div className="card flex flex-col p-8 lg:col-span-2">
                        <h3 className="font-serif text-2xl font-bold">Not sure who you need?</h3>
                        <p className="mt-3 flex-1 text-lg leading-relaxed text-ink-700">
                            Tell us what you are dealing with and we will point you toward the right member — or
                            toward someone outside the network if that serves you better.
                        </p>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-plain mt-7 w-full sm:w-auto">
                            <Mail size={18} aria-hidden="true" />
                            Email us
                        </a>
                    </div>

                    {/* Newsletter.
                        NOTE: there is no mailing-list backend yet. The form opens the visitor's
                        email client addressed to SPN with their address in the body, which is
                        honest and works everywhere. Swap `action` for a real list provider when
                        one is chosen. */}
                    <div className="card-cream flex flex-col p-8 lg:col-span-2">
                        <h3 className="font-serif text-2xl font-bold">Stay in touch</h3>
                        <p className="mt-3 text-lg leading-relaxed text-ink-700">
                            Occasional notes on workshops, community events and safety resources. Nothing else, and
                            never your details to anyone.
                        </p>
                        <form
                            className="mt-7 flex flex-col gap-3 sm:flex-row"
                            action={`mailto:${CONTACT_EMAIL}?subject=Please%20add%20me%20to%20the%20SPN%20mailing%20list`}
                            method="post"
                            encType="text/plain"
                        >
                            <label htmlFor="newsletter-email" className="sr-only">
                                Your email address
                            </label>
                            <input
                                id="newsletter-email"
                                type="email"
                                name="email"
                                required
                                placeholder="your@email.com"
                                className="h-14 flex-1 rounded-full border-2 border-ink-900 bg-white px-6 text-base
                                           text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-olive-700"
                            />
                            <button type="submit" className="btn-primary shrink-0">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
