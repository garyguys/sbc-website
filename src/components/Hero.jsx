import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { members } from '../data/members';

export default function Hero() {
    const [shuffledMembers, setShuffledMembers] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const visibleCards = shuffledMembers.length > 0
        ? [
            shuffledMembers[activeIndex % shuffledMembers.length],
            shuffledMembers[(activeIndex + 1) % shuffledMembers.length],
            shuffledMembers[(activeIndex + 2) % shuffledMembers.length]
        ].filter(Boolean)
        : [];

    useEffect(() => {
        setShuffledMembers([...members].sort(() => 0.5 - Math.random()));
    }, []);

    useEffect(() => {
        if (shuffledMembers.length === 0) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % shuffledMembers.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [shuffledMembers]);

    const fadeInUp = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };

    return (
        <section id="top" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
            {/* Blue Glow Backgrounds */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-sbc-blue/25 rounded-full blur-[100px] pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-[#4DA8DA]/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Subtle Dot Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{ backgroundImage: 'radial-gradient(#212121 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            ></div>

            {/* Very faint gradient sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/40 to-sbc-off-white/40 pointer-events-none z-0"></div>

            <div className="mx-auto max-w-7xl px-4 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="flex flex-col gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Eyebrow Label */}
                        <motion.div variants={fadeInUp} className="flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sbc-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sbc-accent"></span>
                            </span>
                            <span className="text-sm font-semibold tracking-wider uppercase text-sbc-blue">
                                Metro Vancouver and the Fraser Valley
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.div variants={fadeInUp}>
                            <h1 className="text-5xl sm:text-6xl md:text-[64px] font-extrabold leading-[1.1] text-sbc-gray-900 tracking-tight">
                                Trusted Professionals, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sbc-blue to-sbc-blue-dark">Dedicated to Seniors</span>
                            </h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-sbc-gray-600 max-w-[520px] font-medium leading-relaxed">
                            Seniors Business Connect is a collaborative network of trusted local professionals dedicated to educating, supporting, and empowering older adults in our community.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#directory"
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full bg-sbc-blue text-white shadow-sm hover:bg-sbc-blue-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                            >
                                Browse Directory
                            </a>
                        </motion.div>

                        {/* Stats Bar */}
                        <motion.div variants={fadeInUp} className="flex items-center gap-4 mt-8 pt-6 border-t border-sbc-gray-200/50">
                            <div className="flex items-center gap-3 md:gap-4 flex-wrap text-sm text-sbc-gray-600">
                                <span className="font-medium text-sbc-gray-900">25+ Professionals</span>
                                <div className="w-[1px] h-4 bg-sbc-gray-200"></div>
                                <span className="font-medium text-sbc-gray-900">10+ Service Categories</span>
                                <div className="w-[1px] h-4 bg-sbc-gray-200 hidden sm:block"></div>
                                <span className="font-medium text-sbc-gray-900 w-full sm:w-auto mt-2 sm:mt-0">Metro Vancouver & Fraser Valley</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        className="relative h-[400px] sm:h-[500px] w-full hidden lg:block"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 flex justify-center items-center">
                            <motion.div
                                className="relative w-[320px] h-[180px]"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                            >
                                <AnimatePresence mode="popLayout">
                                    {visibleCards.map((member, i) => (
                                        <motion.div
                                            key={member.name + member.category}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
                                            animate={{
                                                opacity: 1 - i * 0.15,
                                                scale: 1 - i * 0.05,
                                                x: i === 0 ? -15 : i === 1 ? 10 : 35,
                                                y: i === 0 ? -15 : i === 1 ? 5 : 25,
                                                rotate: i === 0 ? -4 : i === 1 ? 2 : 6,
                                                zIndex: 30 - i
                                            }}
                                            exit={{
                                                opacity: 0,
                                                x: -150,
                                                y: 20,
                                                scale: 0.9,
                                                rotate: -15
                                            }}
                                            transition={{ duration: 1.0, type: "spring", bounce: 0.15 }}
                                            className="absolute inset-0 bg-white rounded-2xl border border-sbc-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 flex flex-col justify-center"
                                        >
                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 rounded-full bg-sbc-blue-light/80 text-sbc-blue text-xs font-semibold">
                                                    {member.category}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-lg text-sbc-gray-900 tracking-tight">{member.name}</h3>
                                            <p className="text-sbc-blue text-sm font-medium mt-1 truncate">{member.company}</p>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
