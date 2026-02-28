import { useState, useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Shield, BookOpen, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════
   FEATURE CARD 1 — "Shuffling Directory"
   Trusted Professional Network
   ═══════════════════════════════════════════════ */
function ProfessionalShuffler() {
    const [cards, setCards] = useState([
        { id: 1, label: 'Financial Planning', icon: '📊', desc: 'Retirement & estate guidance' },
        { id: 2, label: 'Senior Living', icon: '🏘️', desc: 'Independent & assisted living residences' },
        { id: 3, label: 'Health & Wellness', icon: '💙', desc: 'Care & rehabilitation support' },
        { id: 4, label: 'Home Services', icon: '🏠', desc: 'Safety & comfort at home' },
        { id: 5, label: 'Legal Services', icon: '⚖️', desc: 'Wills, estates & power of attorney' },
        { id: 6, label: 'Real Estate', icon: '🔑', desc: 'Seniors Real Estate Specialists' },
        { id: 7, label: 'Community Support', icon: '🤝', desc: 'Advocacy & social organizations' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const next = [...prev];
                next.unshift(next.pop());
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white rounded-[2rem] border border-sbc-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow h-full">
            <div className="flex items-center gap-2 mb-3">
                <Users className="text-sbc-blue" size={22} />
                <h3 className="font-bold text-sbc-gray-900 text-xl">
                    Trusted Professionals
                </h3>
            </div>
            <p className="text-sbc-gray-600 text-base mb-6 leading-relaxed">
                Connect with vetted local experts in health, finance, legal services, and home care.
            </p>
            <div className="relative h-44">
                {cards.map((card, i) => (
                    <div
                        key={card.id}
                        className="absolute left-0 right-0 px-5 py-4 rounded-xl border border-sbc-gray-200 bg-sbc-gray-50 flex items-center gap-4"
                        style={{
                            top: `${i * 20}px`,
                            zIndex: cards.length - i,
                            transform: `scale(${1 - i * 0.04})`,
                            opacity: 1 - i * 0.25,
                            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        <span className="text-3xl">{card.icon}</span>
                        <div>
                            <p className="font-semibold text-sbc-gray-900 text-base">
                                {card.label}
                            </p>
                            <p className="text-sbc-gray-600 text-sm">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   FEATURE CARD 2 — "Community Updates"
   Education & Empowerment
   ═══════════════════════════════════════════════ */
function CommunityUpdates() {
    const messages = [
        'Workshop: Financial Safety for Seniors — Mar 15',
        'New Resource: Home Safety Checklist Published',
        'Alert: Scam Prevention Tips Now Available',
        'Event: Community Networking Breakfast — Apr 2',
        'Update: 25+ professionals serving Metro Vancouver & the Fraser Valley',
        'Guide: Understanding Power of Attorney Rights',
    ];
    const [currentMsg, setCurrentMsg] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < messages[currentMsg].length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + messages[currentMsg][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 35);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentMsg((prev) => (prev + 1) % messages.length);
                setDisplayText('');
                setCharIndex(0);
            }, 2500);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, currentMsg]);

    return (
        <div className="bg-white rounded-[2rem] border border-sbc-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow h-full">
            <div className="flex items-center gap-2 mb-3">
                <BookOpen className="text-sbc-blue" size={22} />
                <h3 className="font-bold text-sbc-gray-900 text-xl">
                    Education & Resources
                </h3>
            </div>
            <p className="text-sbc-gray-600 text-base mb-6 leading-relaxed">
                Stay informed with workshops, guides, and updates on what matters most.
            </p>
            <div className="bg-[#1B2D4F] rounded-xl p-5 min-h-[9rem]">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4DA8DA] pulse-dot" />
                    <span className="text-xs text-[#4DA8DA]/80 uppercase tracking-wider font-semibold">
                        Community Updates
                    </span>
                </div>
                <p className="text-base text-white/90 leading-relaxed font-body">
                    {displayText}
                    <span className="blink-cursor text-[#4DA8DA]">|</span>
                </p>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   FEATURE CARD 3 — "Safety Checklist"
   Community Safeguarding (CRN)
   ═══════════════════════════════════════════════ */
function SafetyChecklist() {
    const items = [
        'Home safety assessment completed',
        'Emergency contacts up to date',
        'Scam prevention guide reviewed',
        'Trusted professional identified',
    ];
    const [checkedItems, setCheckedItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const animating = useRef(false);

    const runSequence = useCallback(() => {
        if (animating.current) return;
        animating.current = true;
        setCheckedItems([]);
        setCurrentIndex(0);

        items.forEach((_, i) => {
            setTimeout(() => {
                setCheckedItems((prev) => [...prev, i]);
                setCurrentIndex(i + 1);
            }, (i + 1) * 1200);
        });

        setTimeout(() => {
            setCheckedItems([]);
            setCurrentIndex(0);
            animating.current = false;
        }, items.length * 1200 + 2500);
    }, []);

    useEffect(() => {
        runSequence();
        const loop = setInterval(runSequence, items.length * 1200 + 3500);
        return () => clearInterval(loop);
    }, [runSequence]);

    return (
        <div className="bg-white rounded-[2rem] border border-sbc-gray-200/60 p-8 shadow-sm hover:shadow-md transition-shadow h-full">
            <div className="flex items-center gap-2 mb-3">
                <Shield className="text-sbc-blue" size={22} />
                <h3 className="font-bold text-sbc-gray-900 text-xl">
                    Community Safety
                </h3>
            </div>
            <p className="text-sbc-gray-600 text-base mb-6 leading-relaxed">
                The Surrey CRN helps safeguard and support older adults in our area.
            </p>
            <div className="bg-sbc-gray-50 rounded-xl p-5 space-y-3">
                {items.map((item, i) => {
                    const isChecked = checkedItems.includes(i);
                    return (
                        <div
                            key={i}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-500 ${isChecked
                                ? 'bg-sbc-blue-light/50 border border-sbc-blue/20'
                                : 'bg-white border border-transparent'
                                }`}
                        >
                            <div
                                className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isChecked
                                    ? 'bg-sbc-blue text-white'
                                    : 'border-2 border-sbc-gray-200'
                                    }`}
                            >
                                {isChecked && <Check size={14} strokeWidth={3} />}
                            </div>
                            <span
                                className={`text-sm transition-colors duration-500 ${isChecked ? 'text-sbc-gray-900 font-medium' : 'text-sbc-gray-500'
                                    }`}
                            >
                                {item}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════
   FEATURES — "What We Offer"
   ═══════════════════════════════════════════════ */
export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-sbc-off-white"
        >
            <div className="text-center mb-16">
                <p className="text-sm tracking-wide uppercase text-sbc-blue mb-3 font-semibold">
                    What We Offer
                </p>
                <h2 className="font-bold text-3xl md:text-5xl text-sbc-gray-900">
                    Here to Support{' '}
                    <span className="italic text-sbc-blue">You</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="feature-card">
                    <ProfessionalShuffler />
                </div>
                <div className="feature-card">
                    <CommunityUpdates />
                </div>
                <div className="feature-card">
                    <SafetyChecklist />
                </div>
            </div>
        </section>
    );
}
