import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    {
        id: "senior-living",
        label: "Senior Living",
        title: "Senior Living & Care Communities",
        description: "Finding the right living arrangement is one of the most important decisions for aging adults. Our network includes retirement residences, assisted living facilities, and care communities across Metro Vancouver and the Fraser Valley.",
        featured: [
            { name: "Terrie Orthner", company: "Aspira Peninsula", category: "Senior Living & Care" },
            { name: "Natasha Stott", company: "Pacific Carlton / Sunnyside Manor", category: "Senior Living & Care" }
        ]
    },
    {
        id: "health-wellness",
        label: "Health & Wellness",
        title: "Specialized Health Services",
        description: "From dementia care specialists to rehabilitation services, our health professionals understand the unique medical and wellness needs of older adults.",
        featured: [
            { name: "Karen Tyrell", company: "Personalized Dementia Solutions Inc.", category: "Health & Wellness" },
            { name: "Diane Hill Doell", company: "Advanced Foot Care by Nurses Inc.", category: "Health & Wellness" }
        ]
    },
    {
        id: "financial-legal",
        label: "Financial & Legal",
        title: "Protecting Your Future",
        description: "Navigate estate planning, reverse mortgages, wealth management, and legal matters with professionals who specialize in serving seniors.",
        featured: [
            { name: "Tanya Lyn Werk", company: "IG Wealth Management Inc.", category: "Financial Services" },
            { name: "Eryn Jackson", company: "Richards Buell Sutton LLP", category: "Legal Services" }
        ]
    },
    {
        id: "home-lifestyle",
        label: "Home & Lifestyle",
        title: "Aging Comfortably at Home",
        description: "From downsizing and moving services to home modifications and medical equipment, our members help seniors live comfortably and safely.",
        featured: [
            { name: "Garrett Robertson", company: "Get Started Home Services", category: "Home Services" },
            { name: "Sunny Upadhyay", company: "Save On Scooters & Medical Equipment Inc.", category: "Specialty Services" }
        ]
    }
];

export default function TabbedShowcase() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const activeContent = tabs.find(t => t.id === activeTab);

    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-sbc-gray-900 mb-4">
                        Featured Categories
                    </h2>
                    <p className="text-lg text-sbc-gray-600 max-w-2xl mx-auto">
                        Discover the comprehensive range of services provided by our network members.
                    </p>
                </div>

                {/* Tabs Bar */}
                <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar border-b border-sbc-gray-200 mb-10 pb-[1px]">
                    <div className="flex gap-8 px-2">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative pb-4 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors
                    ${isActive ? 'text-sbc-blue' : 'text-sbc-gray-600 hover:text-sbc-gray-900'}
                  `}
                                >
                                    {tab.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="tab-indicator"
                                            className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-sbc-blue"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tab Content area */}
                <div className="bg-sbc-gray-50 rounded-3xl p-8 md:p-12 overflow-hidden border border-sbc-gray-200/60 shadow-sm relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full"
                        >
                            {/* Left Side: Description */}
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight text-sbc-gray-900 mb-4">
                                    {activeContent.title}
                                </h3>
                                <p className="text-lg text-sbc-gray-600 leading-relaxed max-w-lg mb-8">
                                    {activeContent.description}
                                </p>
                                <a
                                    href="#directory"
                                    className="inline-flex items-center gap-2 text-sbc-blue font-semibold hover:text-sbc-blue-dark transition-colors group"
                                >
                                    Browse these categories
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </div>

                            {/* Right Side: Preview Cards */}
                            <div className="relative flex flex-col gap-4 perspective-1000">
                                {activeContent.featured.map((person, idx) => (
                                    <motion.div
                                        key={person.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.1, duration: 0.4 }}
                                        className={`bg-white p-5 rounded-2xl shadow-sm border border-sbc-gray-200 relative z-${10 - idx} ${idx > 0 ? 'ml-6 -mt-8' : ''}`}
                                    >
                                        <div className="mb-3">
                                            <span className="inline-block px-3 py-1 rounded-full bg-sbc-blue-light text-sbc-blue text-xs font-medium">
                                                {person.category}
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-lg text-sbc-gray-900">{person.name}</h4>
                                        <p className="text-sbc-blue text-sm italic font-medium">{person.company}</p>
                                    </motion.div>
                                ))}

                                {/* Decorative background element */}
                                <div className="absolute top-1/2 right-10 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-sbc-blue-light/40 to-sbc-accent/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
