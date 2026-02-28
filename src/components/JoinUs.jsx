import { Send, ArrowRight } from 'lucide-react';

export default function JoinUs() {
    return (
        <section id="join-us" className="py-24 md:py-32 bg-sbc-off-white relative overflow-hidden">
            <div className="mx-auto max-w-4xl px-4 relative z-10 flex flex-col gap-6">

                {/* Newsletter Card */}
                <div className="bg-[#1B2D4F] rounded-[2rem] p-8 md:p-12 text-center shadow-lg">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                        Stay Connected With Us
                    </h2>
                    <p className="text-white/90 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        Sign up for our newsletter to receive updates on workshops, community events, safety resources, and helpful information for you and your family.
                    </p>

                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 relative" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-3 md:py-3.5 rounded-full text-sm text-sbc-gray-900 bg-white border-2 border-transparent focus:border-white/50 focus:outline-none transition-all shadow-sm placeholder:text-sbc-gray-400"
                            required
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 md:py-3.5 text-sm font-semibold rounded-full bg-[#4DA8DA] text-white hover:bg-[#4DA8DA]/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md sm:w-auto w-full"
                        >
                            Subscribe <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>

                {/* Professional CTA Card */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-sbc-gray-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-sbc-gray-900 mb-2">
                            Are you a professional who serves older adults?
                        </h3>
                        <p className="text-sm text-sbc-gray-500 leading-relaxed md:max-w-xl">
                            Join our network of trusted professionals and connect with the families who need your services.
                        </p>
                    </div>
                    <a
                        href="mailto:info@seniorsbc.com?subject=Membership Application"
                        className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-sbc-blue text-white hover:bg-[#1B2D4F] transition-colors"
                    >
                        Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* General Inquiry Card */}
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-sbc-gray-200/60 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-sbc-gray-900 mb-2">
                            Have a question or need advice?
                        </h3>
                        <p className="text-sm text-sbc-gray-500 leading-relaxed md:max-w-xl">
                            Reach out to our team directly. We are happy to help connect you with the right support.
                        </p>
                    </div>
                    <a
                        href="mailto:info@seniorsbc.com"
                        className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-full bg-sbc-blue text-white hover:bg-[#1B2D4F] transition-colors"
                    >
                        Email Us <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
}
