import { ArrowRight, Check, Facebook, Mail } from 'lucide-react';
import AskForm from './AskForm';

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594122220776';

const CONTACT_EMAIL = 'info@seniorsbc.com';

const HELP_WITH = [
    'Choosing a retirement residence or care home',
    'Downsizing, selling and moving',
    'Help and care at home',
    'Wills, powers of attorney and finances',
    'Staying active, connected and safe',
];

/**
 * "Just ask us": the one place on the site to reach SPN itself. The form on
 * the right goes to Formspree (see AskForm); the checkbox in it is also the
 * mailing-list sign-up, so there is no separate newsletter box.
 */
export default function JoinUs() {
    return (
        <section id="ask" className="band scroll-mt-24 bg-parchment">
            <div className="shell">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="eyebrow">Get in touch</p>
                    <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Just ask us</h2>
                    <p className="mt-5 text-xl text-ink-700">
                        Not sure who you need? Tell us what you are dealing with and we will point you toward the
                        right member, or toward someone outside the network if that serves you better.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-5">
                    {/* The form: first on phones, right-hand column on wide screens */}
                    <div className="card-cream p-8 lg:order-last lg:col-span-3 lg:p-10">
                        <h3 className="font-serif text-2xl font-bold">Send us a message</h3>
                        <p className="mt-2 text-base text-ink-700">
                            A real person reads it, and we reply within a couple of business days.
                        </p>
                        <div className="mt-7">
                            <AskForm />
                        </div>
                    </div>
                    {/* What we can help with, email, Facebook */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        <div className="card-dark flex flex-col p-8">
                            <p className="inline-flex w-fit rounded-full border-2 border-ink-900 bg-olive-300 px-4 py-1 text-sm font-bold text-ink-900">
                                For seniors and families
                            </p>
                            <h3 className="mt-6 font-serif text-3xl font-bold text-parchment">We can help with</h3>
                            <ul className="mt-6 space-y-3.5">
                                {HELP_WITH.map((b) => (
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
                            <p className="mt-8 border-t-2 border-dashed border-olive-600 pt-6 text-base text-olive-100">
                                Prefer to write to us directly?
                            </p>
                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="mt-2 inline-flex items-center gap-2 font-serif text-xl font-bold text-parchment hover:text-olive-300"
                            >
                                <Mail size={20} aria-hidden="true" />
                                {CONTACT_EMAIL}
                            </a>
                        </div>

                        {/* Facebook */}
                        <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card card-press flex items-center gap-5 p-6"
                        >
                            <span
                                aria-hidden="true"
                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-ink-900 bg-olive-300 text-ink-900"
                            >
                                <Facebook size={26} />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block font-serif text-xl font-bold">Follow us on Facebook</span>
                                <span className="mt-1 block text-base text-ink-700">
                                    Event news, photos and updates from the network.
                                    <span className="sr-only">Opens in a new tab.</span>
                                </span>
                            </span>
                            <ArrowRight size={22} aria-hidden="true" className="shrink-0 text-olive-700" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
