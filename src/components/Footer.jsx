import { HeartHandshake, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollTo = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-sbc-gray-900 text-sbc-gray-200 rounded-t-[3rem] pt-20 pb-8 mt-[-3rem] relative z-20">
            <div className="mx-auto max-w-7xl px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-4">
                        <a href="#top" onClick={(e) => scrollTo(e, '#top')} className="flex items-center gap-2 group mb-2 text-white transition-opacity hover:opacity-80 w-fit">
                            <div className="p-1.5 rounded-full bg-sbc-blue text-white">
                                <HeartHandshake className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">Seniors Business Connect</span>
                        </a>
                        <p className="text-sm text-sbc-gray-400 font-medium leading-relaxed max-w-xs">
                            A Community of Caring Professionals Dedicated to Seniors
                        </p>
                        <p className="text-sm font-medium tracking-wide text-sbc-blue-light/80 mt-2 flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            Metro Vancouver & the Fraser Valley, BC
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-4 lg:pl-8">
                        <h4 className="text-white font-bold tracking-tight mb-2">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-sm text-sbc-gray-400">
                            <li><a href="#directory" onClick={(e) => scrollTo(e, '#directory')} className="hover:text-white transition-colors">Directory</a></li>
                            <li><a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#how-it-works" onClick={(e) => scrollTo(e, '#how-it-works')} className="hover:text-white transition-colors">How It Works</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Social */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold tracking-tight mb-2">Contact</h4>
                        <ul className="flex flex-col gap-3 text-sm text-sbc-gray-400 mb-2">
                            <li><a href="https://www.seniorsbc.com" className="hover:text-sbc-blue-light transition-colors">www.seniorsbc.com</a></li>
                            <li><a href="mailto:info@seniorsbc.com" className="hover:text-sbc-blue-light transition-colors">info@seniorsbc.com</a></li>
                        </ul>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.facebook.com/groups/550849279098858"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sbc-gray-800 text-sbc-gray-400 hover:bg-sbc-blue hover:text-white transition-all hover:-translate-y-1 text-sm font-medium w-fit -ml-4"
                            >
                                <Facebook className="w-4 h-4" />
                                <span>Facebook Group</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 4: Affiliations */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold tracking-tight mb-2">Affiliations</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://bccrns.ca"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-sbc-gray-400 font-medium leading-relaxed hover:text-white transition-colors"
                            >
                                BC Association of Community Response Networks
                            </a>
                            <div className="h-px w-8 bg-sbc-gray-700 my-1"></div>
                            <p className="text-[13px] text-sbc-gray-500 italic">
                                "Educating, Supporting & Empowering Older Adults"
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-sbc-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sbc-gray-500">
                    <p>© {currentYear} Seniors Business Connect. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="w-1 h-1 rounded-full bg-sbc-gray-700"></span>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
