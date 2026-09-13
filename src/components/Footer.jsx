import { Link } from 'react-router-dom';
import { MapPin, Facebook } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-ink-900 pb-8 pt-16 text-ink-300">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link to="/" aria-label="Seniors Professional Network — home">
                            <img
                                src="/spn-logo-stacked.png"
                                alt="Seniors Professional Network"
                                width={700}
                                height={888}
                                className="w-40 brightness-0 invert"
                            />
                        </Link>
                        <p className="mt-5 max-w-xs text-base text-ink-400">
                            A community of caring professionals dedicated to seniors.
                        </p>
                        <p className="mt-4 flex items-start gap-2 text-base text-olive-300">
                            <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0" />
                            Metro Vancouver &amp; the Fraser Valley, BC
                        </p>
                    </div>

                    {/* Links */}
                    <nav aria-label="Footer">
                        <h2 className="font-serif text-lg font-semibold text-white">Explore</h2>
                        <ul className="mt-5 space-y-3 text-base">
                            <li><Link to="/directory" className="text-ink-400 hover:text-white">Member directory</Link></li>
                            <li><Link to="/resources" className="text-ink-400 hover:text-white">Resources</Link></li>
                            <li><Link to="/#about" className="text-ink-400 hover:text-white">About us</Link></li>
                            <li><Link to="/#how-it-works" className="text-ink-400 hover:text-white">How it works</Link></li>
                            <li><Link to="/#join" className="text-ink-400 hover:text-white">Join the network</Link></li>
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <h2 className="font-serif text-lg font-semibold text-white">Contact</h2>
                        <ul className="mt-5 space-y-3 text-base">
                            <li>
                                <a href="https://www.seniorsbc.com" className="break-words text-ink-400 hover:text-white">
                                    www.seniorsbc.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@seniorsbc.com" className="break-words text-ink-400 hover:text-white">
                                    info@seniorsbc.com
                                </a>
                            </li>
                        </ul>
                        <a
                            href="https://www.facebook.com/groups/550849279098858"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink-800 px-5 py-3
                                       text-base font-medium text-ink-300 transition-colors hover:bg-olive-700 hover:text-white"
                        >
                            <Facebook size={18} aria-hidden="true" />
                            Facebook Group
                        </a>
                    </div>

                    {/* Affiliations */}
                    <div>
                        <h2 className="font-serif text-lg font-semibold text-white">Affiliations</h2>
                        <a
                            href="https://bccrns.ca"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 block text-base text-ink-400 hover:text-white"
                        >
                            BC Association of Community Response Networks
                        </a>
                        <div aria-hidden="true" className="my-5 h-px w-10 bg-ink-700" />
                        <p className="font-serif text-base italic text-ink-500">
                            &ldquo;Educating, supporting &amp; empowering older adults&rdquo;
                        </p>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-sm text-ink-500 md:flex-row">
                    <p>
                        © {year} Seniors Professional Network. All rights reserved.
                        <span className="ml-2 text-ink-600">Formerly Seniors Business Connect.</span>
                    </p>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-700" />
                        <Link to="/terms" className="hover:text-white">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
