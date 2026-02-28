import { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Globe, Search, ChevronRight } from 'lucide-react';
import { members } from '../data/members';

const categories = [
    "All",
    "Senior Living & Care",
    "Health & Wellness",
    "Home Services",
    "Financial Services",
    "Real Estate",
    "Legal Services",
    "Community Organizations"
];

export default function MemberDirectory() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [canScrollRight, setCanScrollRight] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const scrollRef = useRef(null);

    const checkScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const canRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 4;
        setCanScrollRight(canRight);
        if (el.scrollLeft > 10) setHasScrolled(true);
    }, []);

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [checkScroll]);

    const filteredMembers = useMemo(() => {
        if (activeCategory === "All") return members;
        return members.filter(m => m.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="directory" className="py-24 md:py-32 bg-sbc-off-white relative">
            <div className="mx-auto max-w-7xl px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sbc-gray-900 mb-4">
                        Our Professional Members
                    </h2>
                    <p className="text-lg text-sbc-gray-600 max-w-2xl mx-auto">
                        Browse our trusted network by service category to find the right professional for your needs.
                    </p>
                </div>

                {/* Category Filter Bar - Sticky */}
                <div className="sticky top-[72px] z-30 bg-sbc-off-white/95 backdrop-blur pt-4 pb-6 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-sbc-gray-200">
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            onScroll={checkScroll}
                            className="flex overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-2 snap-x"
                        >
                            {categories.map((cat) => {
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`
                                            relative shrink-0 snap-start px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                                            ${isActive
                                                ? 'bg-sbc-blue text-white shadow-sm'
                                                : 'bg-white text-sbc-gray-600 border border-sbc-gray-200 hover:border-sbc-blue/50 hover:bg-sbc-blue-light/30'}
                                        `}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Right fade + scroll hint (mobile only) */}
                        <AnimatePresence>
                            {canScrollRight && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute top-0 bottom-2 right-0 flex items-center pointer-events-none sm:hidden"
                                >
                                    <div className="w-16 h-full bg-gradient-to-l from-sbc-off-white via-sbc-off-white/90 to-transparent" />
                                    <motion.div
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                        className="absolute right-1 bg-white border border-sbc-gray-200 rounded-full p-1.5 shadow-md"
                                    >
                                        <ChevronRight className="w-4 h-4 text-sbc-blue" />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Left fade when scrolled */}
                        <AnimatePresence>
                            {hasScrolled && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute top-0 bottom-2 left-0 w-8 bg-gradient-to-r from-sbc-off-white to-transparent pointer-events-none sm:hidden"
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* "Swipe for more" hint - visible until first scroll */}
                    <AnimatePresence>
                        {!hasScrolled && canScrollRight && (
                            <motion.p
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                className="text-xs text-sbc-gray-600 mt-1 text-center sm:hidden font-medium"
                            >
                                Swipe for more categories &rarr;
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredMembers.length > 0 ? (
                            filteredMembers.map((member, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                                    key={member.email + member.name}
                                    className="group relative bg-white rounded-2xl border border-sbc-gray-200 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col h-full overflow-hidden"
                                >
                                    {/* Subtle left border expansion on hover */}
                                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-sbc-blue -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>

                                    <div className="mb-5 flex-shrink-0">
                                        <span className="inline-block px-3 py-1 rounded-full bg-sbc-blue-light text-sbc-blue text-xs font-medium border border-sbc-blue/10">
                                            {member.category}
                                        </span>
                                    </div>

                                    <div className="mb-6 flex-grow">
                                        <h3 className="font-bold text-xl text-sbc-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-sm italic font-medium text-sbc-blue">{member.company}</p>
                                    </div>

                                    <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-sbc-gray-100">
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-sm text-sbc-gray-600 hover:text-sbc-blue transition-colors group/link w-fit">
                                                <div className="p-2 rounded-full bg-sbc-gray-50 group-hover/link:bg-sbc-blue-light transition-colors">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <span className="truncate">{member.email}</span>
                                            </a>
                                        )}

                                        {member.phone && (
                                            <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-sm text-sbc-gray-600 hover:text-sbc-blue transition-colors group/link w-fit">
                                                <div className="p-2 rounded-full bg-sbc-gray-50 group-hover/link:bg-sbc-blue-light transition-colors">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <span>{member.phone}</span>
                                            </a>
                                        )}

                                        {member.website && (
                                            <a href={member.website.startsWith('http') ? member.website : `https://${member.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-sbc-gray-600 hover:text-sbc-blue transition-colors group/link w-fit">
                                                <div className="p-2 rounded-full bg-sbc-gray-50 group-hover/link:bg-sbc-blue-light transition-colors">
                                                    <Globe className="w-4 h-4" />
                                                </div>
                                                <span className="truncate">{member.website.replace(/^https?:\/\/(www\.)?/, '')}</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="col-span-full py-12 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sbc-blue-light mb-4">
                                    <Search className="w-8 h-8 text-sbc-blue" />
                                </div>
                                <h3 className="text-xl font-bold text-sbc-gray-900 mb-2">No professionals listed in this category yet.</h3>
                                <p className="text-sbc-gray-600">Know someone? Invite them to join our growing network.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
