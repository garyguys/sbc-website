import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const STEPS = [
    {
        title: 'Pick an industry',
        body: 'Housing, health, moving, money, legal and more, in plain words. No account, no form, nothing to sign up for.',
        tone: 'card',
    },
    {
        title: 'Reach them directly',
        body: 'Every listing shows the member’s own number, email and website. You talk to the person, not a call centre.',
        tone: 'card-accent',
    },
    {
        title: 'Ask who else to speak to',
        body: 'If they are not the right fit, they will usually know who is. Members know each other and refer across the network.',
        tone: 'card',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="band scroll-mt-24 bg-parchment">
            <div className="shell">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="eyebrow">How it works</p>
                    <h2 className="marker-head mt-4 font-serif text-4xl font-bold sm:text-5xl">
                        Three steps to <span className="marker">the right help</span>
                    </h2>
                </div>

                <ol className="mt-14 grid gap-6 md:grid-cols-3">
                    {STEPS.map((s, i) => (
                        <li key={s.title} className={`${s.tone} flex flex-col p-7`}>
                            <span className="badge-num !h-11 !w-11 !text-base">{i + 1}</span>
                            <h3 className="mt-6 font-serif text-2xl font-bold leading-snug">{s.title}</h3>
                            <p className="mt-3 flex-1 text-lg leading-relaxed text-ink-700">{s.body}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-12 flex flex-col items-center gap-6">
                    <Link to="/directory" className="btn-primary">
                        Start browsing
                        <span className="btn-arrow">
                            <ArrowRight size={18} aria-hidden="true" />
                        </span>
                    </Link>
                    <p className="text-lg text-ink-700">
                        Not sure where to start?{' '}
                        <a href="#ask" className="font-semibold text-olive-700 underline-offset-4 hover:underline">
                            send us a message
                        </a>{' '}
                        and we will point you in the right direction.
                    </p>
                </div>
            </div>
        </section>
    );
}
