import { ShieldCheck, Users, HeartHandshake } from 'lucide-react';

const PILLARS = [
    {
        icon: Users,
        word: 'Connect',
        title: 'We know each other',
        description:
            'Members meet regularly and refer work to one another. When you reach one of us, you reach a network — not a dead end.',
    },
    {
        icon: HeartHandshake,
        word: 'Collaborate',
        title: 'We work across fields',
        description:
            'A move rarely involves one profession. Realtor, lender, mover, care provider and lawyer are used to sitting at the same table here.',
    },
    {
        icon: ShieldCheck,
        word: 'Support',
        title: 'We answer for the standard',
        description:
            'Membership is by application, and members hold each other to how older adults should be treated — not just served.',
    },
];

export default function About() {
    return (
        <section id="about" className="scroll-mt-24 bg-parchment py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="eyebrow">About the network</p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                            Working together to support older adults
                        </h2>

                        <div className="mt-7 max-w-prose-comfortable space-y-5 text-lg text-ink-700">
                            <p>
                                The Seniors Professional Network is a collaborative network of trusted local
                                professionals dedicated to educating, supporting, and empowering older adults
                                and their families to take informed action on issues that affect their
                                safety, well-being, and quality of life.
                            </p>
                            <p>
                                As part of the BC Community Response Networks, our members work together to
                                safeguard and support older adults across Metro Vancouver and the Fraser
                                Valley.
                            </p>
                            <p className="font-medium text-ink-800">
                                We were formerly known as Seniors Business Connect. The name changed; the
                                people and the purpose did not.
                            </p>
                        </div>
                    </div>

                    <ul className="space-y-5">
                        {PILLARS.map((pillar) => {
                            const Icon = pillar.icon;
                            const { word, title, description } = pillar;
                            return (
                            <li key={word} className="card flex gap-5 p-7">
                                <span
                                    aria-hidden="true"
                                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-olive-100 text-olive-700"
                                >
                                    <Icon size={26} strokeWidth={1.75} />
                                </span>
                                <div>
                                    <p className="eyebrow">{word}</p>
                                    <h3 className="mt-1.5 text-xl font-semibold">{title}</h3>
                                    <p className="mt-2 text-base text-ink-700">{description}</p>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
