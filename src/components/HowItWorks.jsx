import { Search, Phone, HeartHandshake } from 'lucide-react';

const STEPS = [
    {
        num: '01',
        icon: Search,
        title: 'Find',
        description:
            'Search the directory, or start from the situation you are facing. No jargon, no forms, no account to create.',
    },
    {
        num: '02',
        icon: Phone,
        title: 'Contact directly',
        description:
            'Every listing shows the member’s own email, phone, and website. You speak to them, not to us — there is no referral fee and no middleman.',
    },
    {
        num: '03',
        icon: HeartHandshake,
        title: 'Get support',
        description:
            'If they are not the right fit, they will usually know who is. That is the point of a network.',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="scroll-mt-24 overflow-hidden bg-olive-800 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terra-300">
                        How it works
                    </p>
                    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                        Three steps, and none of them cost anything
                    </h2>
                </div>

                <ol className="relative mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
                    {/* Connecting rule on desktop */}
                    <div
                        aria-hidden="true"
                        className="absolute left-[16%] right-[16%] top-7 hidden border-t-2 border-dashed border-white/20 md:block"
                    />

                    {STEPS.map((step) => {
                        const Icon = step.icon;
                        const { num, title, description } = step;
                        return (
                        <li key={num} className="relative">
                            <span
                                aria-hidden="true"
                                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-parchment text-olive-700 shadow-lg"
                            >
                                <Icon size={26} strokeWidth={1.75} />
                            </span>
                            <p className="mt-6 font-serif text-sm font-semibold tracking-[0.2em] text-terra-300">
                                {num}
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
                            <p className="mt-3 max-w-sm text-lg leading-relaxed text-olive-100">
                                {description}
                            </p>
                        </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
