import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
    return (
        <>
        <Navbar />
        <main id="main" className="bg-parchment">
            {/* Header */}
            <section className="border-b-2 border-ink-900 bg-olive-50/50">
                <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
                    <Link to="/" className="inline-flex items-center gap-2 text-base font-medium text-ink-600 hover:text-olive-700">
                        <ArrowLeft size={18} aria-hidden="true" />
                        Back to home
                    </Link>
                    <p className="eyebrow mt-8">Legal</p>
                    <h1 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Terms of Service</h1>
                    <p className="mt-4 text-base font-medium text-ink-500">Last updated: August 12, 2026</p>
                </div>
            </section>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
                <div className="card space-y-8 p-8 text-lg leading-relaxed text-ink-800 md:p-12">

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Seniors Professional Network website at{' '}
                            <a href="https://www.seniorsbc.com" className="text-olive-700 hover:underline">www.seniorsbc.com</a>{' '}
                            (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do
                            not agree to these Terms, please do not use the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">2. Description of Service</h2>
                        <p>
                            Seniors Professional Network ("SPN") provides an online directory and informational
                            platform connecting older adults, their families, and caregivers with professionals
                            who serve seniors in Metro Vancouver and the Fraser Valley, British Columbia. The
                            Site is a community resource and does not provide professional advice, endorsements,
                            or guarantees regarding the listed professionals.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">3. Use of the Site</h2>
                        <p className="mb-4">You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the Site in any way that violates any applicable law or regulation</li>
                            <li>Attempt to gain unauthorized access to any part of the Site</li>
                            <li>Use the Site to transmit unsolicited communications or spam</li>
                            <li>Scrape, copy, or redistribute the directory content without written permission</li>
                            <li>Impersonate any person or entity in your use of the Site</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">4. Directory Listings</h2>
                        <p className="mb-4">
                            The professionals listed in our directory have voluntarily provided their information
                            for inclusion. SBC does not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Endorse, recommend, or guarantee any listed professional or their services</li>
                            <li>Verify the credentials, licensing, or qualifications of listed professionals</li>
                            <li>Assume responsibility for the quality of services provided by listed professionals</li>
                        </ul>
                        <p className="mt-4">
                            Users are encouraged to conduct their own due diligence when engaging with any
                            professional found through the Site. SBC serves as a connecting resource only.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">5. Intellectual Property</h2>
                        <p>
                            All content on the Site, including text, graphics, logos, icons, and software, is the
                            property of Seniors Professional Network or its content suppliers and is protected by
                            Canadian and international intellectual property laws. You may not reproduce, distribute,
                            modify, or create derivative works from the Site's content without our prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">6. Newsletter and Communications</h2>
                        <p>
                            By subscribing to our newsletter, you consent to receiving periodic emails about SBC
                            updates, community news, and relevant resources. You can unsubscribe at any time by
                            following the unsubscribe link in any email or by contacting us at{' '}
                            <a href="mailto:info@seniorsbc.com" className="text-olive-700 hover:underline">info@seniorsbc.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">7. Disclaimer of Warranties</h2>
                        <p>
                            The Site is provided on an "as is" and "as available" basis without warranties of any
                            kind, whether express or implied. SBC does not warrant that the Site will be uninterrupted,
                            error-free, or free of viruses or other harmful components. We make no warranties about
                            the accuracy, reliability, completeness, or timeliness of the content on the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">8. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Seniors Professional Network and its volunteers,
                            members, and affiliates shall not be liable for any direct, indirect, incidental,
                            consequential, or punitive damages arising from your use of or inability to use the
                            Site, or from any interactions with professionals listed in the directory.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">9. External Links</h2>
                        <p>
                            The Site may contain links to third-party websites (including member websites and
                            affiliate organizations). These links are provided for convenience only and do not
                            signify endorsement. SBC is not responsible for the content or privacy practices of
                            any linked sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">10. Governing Law</h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of the Province
                            of British Columbia, Canada, without regard to conflict of law principles. Any disputes
                            arising from these Terms or your use of the Site shall be subject to the exclusive
                            jurisdiction of the courts of British Columbia.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">11. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Changes will be posted on this
                            page with an updated "Last updated" date. Your continued use of the Site after changes
                            are posted constitutes acceptance of the revised Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 font-serif text-2xl font-bold text-ink-900">12. Contact Us</h2>
                        <p>
                            If you have questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 p-4 bg-olive-50/60 rounded-xl text-sm space-y-1">
                            <p className="font-semibold">Seniors Professional Network</p>
                            <p>Metro Vancouver & the Fraser Valley, BC</p>
                            <p>Email: <a href="mailto:info@seniorsbc.com" className="text-olive-700 hover:underline">info@seniorsbc.com</a></p>
                            <p>Website: <a href="https://www.seniorsbc.com" className="text-olive-700 hover:underline">www.seniorsbc.com</a></p>
                        </div>
                    </section>

                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}
