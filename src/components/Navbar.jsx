import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const LINKS = [
    { label: 'Directory', to: '/directory' },
    { label: 'Resources', to: '/resources' },
    { label: 'About', to: '/#about' },
    { label: 'How it works', to: '/#how-it-works' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-all duration-300 ${
                scrolled
                    ? 'border-ink-200 bg-parchment/95 backdrop-blur-md shadow-sm'
                    : 'border-transparent bg-parchment'
            }`}
        >
            <nav
                aria-label="Main"
                className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8"
            >
                <Link to="/" className="shrink-0" aria-label="Seniors Professional Network — home">
                    <img
                        src="/spn-logo-horizontal.png"
                        alt="Seniors Professional Network"
                        width={1000}
                        height={348}
                        className="h-12 w-auto sm:h-14"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-1 lg:flex">
                    {LINKS.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            className={({ isActive }) =>
                                `rounded-full px-4 py-2.5 text-base font-medium transition-colors ${
                                    isActive && l.to.startsWith('/') && !l.to.includes('#')
                                        ? 'bg-olive-50 text-olive-800'
                                        : 'text-ink-700 hover:bg-olive-50 hover:text-olive-800'
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <Link to="/directory" className="btn-primary ml-3 !px-6 !text-[0.95rem]">
                        <Search size={18} aria-hidden="true" />
                        Find a professional
                    </Link>
                </div>

                {/* Mobile trigger */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="flex h-12 w-12 items-center justify-center rounded-full text-ink-800 hover:bg-olive-50 lg:hidden"
                >
                    <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div
                    id="mobile-menu"
                    className="border-t border-ink-200 bg-parchment lg:hidden"
                >
                    <div className="mx-auto max-w-7xl px-5 py-4">
                        <ul className="flex flex-col">
                            {LINKS.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        onClick={() => setOpen(false)}
                                        className="block border-b border-ink-100 py-4 text-lg font-medium text-ink-800"
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link to="/directory" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">
                            <Search size={18} aria-hidden="true" />
                            Find a professional
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
