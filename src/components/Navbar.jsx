import { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Directory', href: '#directory' },
        { name: 'About', href: '#about' },
        { name: 'How It Works', href: '#how-it-works' }
    ];

    const scrollTo = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 100; // offset for the sticky navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-300`}>
                <div className="flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 bg-white/90 backdrop-blur-xl shadow-sm border border-sbc-gray-200/80 text-sbc-gray-900">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group" onClick={(e) => scrollTo(e, '#top')}>
                        <div className="p-2 rounded-full transition-colors bg-sbc-blue-light text-sbc-blue">
                            <HeartHandshake className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-lg tracking-tight hidden sm:block">Seniors Business Connect</span>
                        <span className="font-bold text-lg tracking-tight sm:hidden">SBC</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollTo(e, link.href)}
                                className={`text-sm font-medium transition-colors hover:opacity-70`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right Action */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={(e) => scrollTo(e, '#directory')}
                            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-sbc-blue text-white hover:bg-[#1B2D4F]"
                        >
                            Find a Professional
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 -mr-2"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-3/4 max-w-sm bg-white shadow-2xl p-6 md:hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-bold text-lg text-sbc-gray-900">Menu</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 -mr-2 text-sbc-gray-600 hover:text-sbc-gray-900"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollTo(e, link.href)}
                                        className="text-lg font-medium text-sbc-gray-900 border-b border-sbc-gray-100 pb-4"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-auto pt-8">
                                <button
                                    onClick={(e) => scrollTo(e, '#directory')}
                                    className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full bg-sbc-blue text-white transition-all active:scale-95"
                                >
                                    Find a Professional
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
