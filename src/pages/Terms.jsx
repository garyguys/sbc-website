import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-sbc-off-white">
            {/* Header */}
            <div className="bg-[#1B2D4F] text-white py-16 px-8">
                <div className="mx-auto max-w-4xl">
                    <Link to="/" className="inline-flex items-center gap-2 text-sbc-blue-light hover:text-white transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-[#4DA8DA]/20">
                            <FileText className="w-6 h-6 text-[#4DA8DA]" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms of Service</h1>
                    </div>
                    <p className="text-sbc-gray-200/70 text-sm">Last updated: February 27, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-sbc-gray-200 p-8 md:p-12 space-y-8 text-sbc-gray-900 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Seniors Business Connect website at{' '}
                            <a href="https://www.seniorsbc.com" className="text-sbc-blue hover:underline">www.seniorsbc.com</a>{' '}
                            (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do
                            not agree to these Terms, please do not use the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">2. Description of Service</h2>
                        <p>
                            Seniors Business Connect ("SBC") provides an online directory and informational
                            platform connecting older adults, their families, and caregivers with professionals
                            who serve seniors in Metro Vancouver and the Fraser Valley, British Columbia. The
                            Site is a community resource and does not provide professional advice, endorsements,
                            or guarantees regarding the listed professionals.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">3. Use of the Site</h2>
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
                        <h2 className="text-xl font-bold mb-3">4. Directory Listings</h2>
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
                        <h2 className="text-xl font-bold mb-3">5. Intellectual Property</h2>
                        <p>
                            All content on the Site, including text, graphics, logos, icons, and software, is the
                            property of Seniors Business Connect or its content suppliers and is protected by
                            Canadian and international intellectual property laws. You may not reproduce, distribute,
                            modify, or create derivative works from the Site's content without our prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">6. Newsletter and Communications</h2>
                        <p>
                            By subscribing to our newsletter, you consent to receiving periodic emails about SBC
                            updates, community news, and relevant resources. You can unsubscribe at any time by
                            following the unsubscribe link in any email or by contacting us at{' '}
                            <a href="mailto:info@seniorsbc.com" className="text-sbc-blue hover:underline">info@seniorsbc.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">7. Disclaimer of Warranties</h2>
                        <p>
                            The Site is provided on an "as is" and "as available" basis without warranties of any
                            kind, whether express or implied. SBC does not warrant that the Site will be uninterrupted,
                            error-free, or free of viruses or other harmful components. We make no warranties about
                            the accuracy, reliability, completeness, or timeliness of the content on the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">8. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, Seniors Business Connect and its volunteers,
                            members, and affiliates shall not be liable for any direct, indirect, incidental,
                            consequential, or punitive damages arising from your use of or inability to use the
                            Site, or from any interactions with professionals listed in the directory.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">9. External Links</h2>
                        <p>
                            The Site may contain links to third-party websites (including member websites and
                            affiliate organizations). These links are provided for convenience only and do not
                            signify endorsement. SBC is not responsible for the content or privacy practices of
                            any linked sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">10. Governing Law</h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of the Province
                            of British Columbia, Canada, without regard to conflict of law principles. Any disputes
                            arising from these Terms or your use of the Site shall be subject to the exclusive
                            jurisdiction of the courts of British Columbia.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">11. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Changes will be posted on this
                            page with an updated "Last updated" date. Your continued use of the Site after changes
                            are posted constitutes acceptance of the revised Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">12. Contact Us</h2>
                        <p>
                            If you have questions about these Terms of Service, please contact us:
                        </p>
                        <div className="mt-4 p-4 bg-sbc-off-white rounded-xl text-sm space-y-1">
                            <p className="font-semibold">Seniors Business Connect</p>
                            <p>Metro Vancouver & the Fraser Valley, BC</p>
                            <p>Email: <a href="mailto:info@seniorsbc.com" className="text-sbc-blue hover:underline">info@seniorsbc.com</a></p>
                            <p>Website: <a href="https://www.seniorsbc.com" className="text-sbc-blue hover:underline">www.seniorsbc.com</a></p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
