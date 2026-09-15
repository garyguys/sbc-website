import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

const LINKS = [
    { label: 'Directory', to: '/directory' },
    { label: 'Events', to: '/#events' },
    { label: 'Resources', to: '/resources' },
    { label: 'About', to: '/#about' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Prevent background scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    // A hash link (/#about) is never "active" in the nav sense; only real pages are.
    const isPage = (to) => !to.includes('#') && (pathname === to || pathname.startsWith(`${to}/`));

    return (
        <header
            className={`sticky top-0 z-50 border-b-2 bg-parchment transition-all duration-200 ${
                scrolled ? 'border-ink-900' : 'border-transparent'
            }`}
        >
            <nav aria-label="Main" className="shell flex items-center justify-between gap-5 py-3">
                <Link to="/" className="shrink-0" aria-label="Seniors Professional Network — home">
                    <img
                        src="/spn-logo-horizontal.png"
                        alt="Seniors Professional Network"
                        width={1000}
                        height={348}
                        className="h-12 w-auto sm:h-14 lg:h-12 xl:h-14"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-1 lg:flex">
                    {LINKS.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            className={`whitespace-nowrap rounded-full px-3 py-2.5 text-base font-semibold transition-colors xl:px-4 ${
                                isPage(l.to)
                                    ? 'bg-olive-300 text-ink-900'
                                    : 'text-ink-800 hover:bg-olive-100'
                            }`}
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/#ask"
                        className="ml-2 inline-flex min-h-[3rem] items-center gap-2 whitespace-nowrap rounded-full border-2 border-ink-900
                                   bg-white px-4 text-base font-bold text-ink-900 shadow-hard-sm xl:ml-3 xl:px-5
                                   transition-[transform,box-shadow] duration-150
                                   hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                        <MessageCircle size={18} aria-hidden="true" />
                        Get in touch
                    </Link>
                    <Link
                        to="/directory"
                        className="ml-2 inline-flex min-h-[3rem] items-center gap-2.5 whitespace-nowrap rounded-full border-2 border-ink-900
                                   bg-olive-700 px-4 text-base font-bold text-white shadow-hard-sm xl:ml-3 xl:px-6
                                   transition-[transform,box-shadow] duration-150
                                   hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                    >
                        Find a professional
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>

                {/* Mobile trigger */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-900 lg:hidden"
                >
                    <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div id="mobile-menu" className="border-t-2 border-ink-900 bg-parchment lg:hidden">
                    <div className="shell py-4">
                        <ul className="flex flex-col">
                            {LINKS.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        onClick={() => setOpen(false)}
                                        className="block border-b-2 border-dashed border-ink-200 py-4 text-lg font-semibold text-ink-900"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link to="/directory" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">
                            Find a professional
                            <span className="btn-arrow">
                                <ArrowRight size={18} aria-hidden="true" />
                            </span>
                        </Link>
                        <Link to="/#ask" onClick={() => setOpen(false)} className="btn-plain mt-3 w-full">
                            <MessageCircle size={18} aria-hidden="true" />
                            Get in touch
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
