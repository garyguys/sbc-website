import { ArrowRight, Mail, Send } from 'lucide-react';

const CONTACT_EMAIL = 'info@seniorsbc.com';

export default function JoinUs() {
    return (
        <section id="join" className="scroll-mt-24 bg-olive-50/60 py-20 lg:py-28">
            <div className="mx-auto max-w-5xl px-5 lg:px-8">
                {/* ----------------------------------------------------- newsletter */}
                <div className="rounded-3xl bg-olive-800 px-7 py-12 text-center sm:px-12">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Stay connected with us</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-olive-100">
                        Occasional updates on workshops, community events, safety resources, and
                        information worth having before you need it.
                    </p>

                    {/*
                      NOTE FOR GARRETT: this form has no backend yet. It currently opens the
                      visitor's email client. Wire it to Mailchimp / Brevo / Buttondown and
                      replace the handler below when you pick a provider.
                    */}
                    <form
                        className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
                        action={`mailto:${CONTACT_EMAIL}`}
                        method="post"
                        encType="text/plain"
                    >
                        <label htmlFor="newsletter-email" className="sr-only">
                            Your email address
                        </label>
                        <input
                            id="newsletter-email"
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email address"
                            className="h-14 flex-1 rounded-full border-2 border-transparent bg-white px-6 text-base
                                       text-ink-900 placeholder:text-ink-500 focus:border-terra-300 focus:outline-none"
                        />
                        <button type="submit" className="btn-accent !h-14 shrink-0">
                            Subscribe
                            <Send size={18} aria-hidden="true" />
                        </button>
                    </form>
                </div>

                {/* -------------------------------------------------------- two CTAs */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="card flex flex-col p-8">
                        <h3 className="text-xl font-semibold">
                            Are you a professional who serves older adults?
                        </h3>
                        <p className="mt-3 flex-1 text-base text-ink-700">
                            Membership is by application. Members meet regularly, refer to one another,
                            and are expected to hold a high standard in how they work with seniors and
                            their families.
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}?subject=Membership%20Application`}
                            className="btn-primary mt-7 w-full sm:w-auto"
                        >
                            Apply to join
                            <ArrowRight size={18} aria-hidden="true" />
                        </a>
                    </div>

                    <div className="card flex flex-col p-8">
                        <h3 className="text-xl font-semibold">Not sure who you need?</h3>
                        <p className="mt-3 flex-1 text-base text-ink-700">
                            Tell us what you are dealing with and we will point you toward the right
                            member — or toward someone outside the network if that serves you better.
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="btn-outline mt-7 w-full sm:w-auto"
                        >
                            <Mail size={18} aria-hidden="true" />
                            Email us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
