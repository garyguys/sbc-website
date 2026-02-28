import { Search, Phone, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            icon: <Search className="w-8 h-8 text-sbc-blue" />,
            title: "Browse",
            description: "Explore our directory of trusted professionals filtered by the service you need."
        },
        {
            num: "02",
            icon: <Phone className="w-8 h-8 text-sbc-blue" />,
            title: "Connect",
            description: "Reach out directly — every listing includes phone, email, and website."
        },
        {
            num: "03",
            icon: <HeartHandshake className="w-8 h-8 text-sbc-blue" />,
            title: "Get Support",
            description: "Work with professionals who are dedicated to seniors' well-being."
        }
    ];

    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-[#1B2D4F] overflow-hidden">
            <div className="mx-auto max-w-7xl px-4">

                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-sbc-blue-light/90 max-w-2xl mx-auto"
                    >
                        Finding the right support for yourself or your loved ones is simple with our network.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Subtle dashed line connecting steps on desktop */}
                    <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-white/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="relative mb-8 flex justify-center">
                                    {/* Icon circle */}
                                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-lg border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                                        <div className="absolute inset-0 bg-gradient-to-br from-sbc-blue-light/50 to-transparent rounded-2xl"></div>
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-sbc-blue-light/90 leading-relaxed max-w-xs">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
