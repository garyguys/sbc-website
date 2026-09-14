import { Users, HeartHandshake, ShieldCheck } from 'lucide-react';

const PILLARS = [
    {
        eyebrow: 'Connect',
        title: 'We know each other',
        body: 'Members meet regularly and refer to one another. Reach one of us and you have reached a network, not a dead end.',
        icon: Users,
    },
    {
        eyebrow: 'Collaborate',
        title: 'We work across fields',
        body: 'A move rarely involves one profession. Realtor, lender, mover, care provider and lawyer are used to sitting at the same table here.',
        icon: HeartHandshake,
    },
    {
        eyebrow: 'Support',
        title: 'We answer for the standard',
        body: 'Membership is by invitation, and members hold each other to how older adults should be treated — not just served.',
        icon: ShieldCheck,
    },
];

export default function About() {
    return (
        <section id="about" className="band scroll-mt-24 bg-olive-50/50">
            <div className="shell grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
                <div>
                    <p className="eyebrow">About the network</p>
                    <h2 className="mt-4 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                        Working together to support older adults
                    </h2>
                    <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-700">
                        <p>
                            The Seniors Professional Network is a collaborative network of trusted local professionals
                            dedicated to educating, supporting, and empowering older adults and their families to take
                            informed action on issues that affect their safety, well-being, and quality of life.
                        </p>
                        <p>
                            As part of the BC Community Response Networks, our members work together to safeguard and
                            support older adults across Metro Vancouver and the Fraser Valley.
                        </p>
                    </div>
                </div>

                <ul className="space-y-5">
                    {PILLARS.map(({ eyebrow, title, body, icon }) => {
                        const Icon = icon;
                        return (
                        <li key={title} className="card flex gap-5 p-6">
                            <span
                                aria-hidden="true"
                                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl
                                           border-2 border-ink-900 bg-olive-300 text-ink-900"
                            >
                                <Icon size={26} />
                            </span>
                            <div>
                                <p className="eyebrow">{eyebrow}</p>
                                <h3 className="mt-1.5 font-serif text-xl font-bold">{title}</h3>
                                <p className="mt-2 text-base leading-relaxed text-ink-700">{body}</p>
                            </div>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
