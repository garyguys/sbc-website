import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
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
                            <Shield className="w-6 h-6 text-[#4DA8DA]" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
                    </div>
                    <p className="text-sbc-gray-200/70 text-sm">Last updated: February 27, 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-4xl px-8 py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-sbc-gray-200 p-8 md:p-12 space-y-8 text-sbc-gray-900 leading-relaxed">

                    <section>
                        <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
                        <p>
                            Seniors Business Connect ("SBC", "we", "our", or "us") operates the website{' '}
                            <a href="https://www.seniorsbc.com" className="text-sbc-blue hover:underline">www.seniorsbc.com</a>{' '}
                            (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard
                            your information when you visit our Site. By using the Site, you agree to the practices
                            described in this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
                        <h3 className="font-semibold mb-2">Personal Information</h3>
                        <p className="mb-4">
                            We may collect personal information that you voluntarily provide when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Subscribe to our newsletter (email address)</li>
                            <li>Contact us via email (name, email address, message content)</li>
                            <li>Apply for professional membership (name, business details, contact information)</li>
                        </ul>

                        <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                        <p>
                            When you visit the Site, we may automatically collect certain information about your
                            device, including your IP address, browser type, operating system, referring URLs,
                            and pages viewed. This information is collected through standard web technologies
                            and analytics services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Operate and maintain the Site</li>
                            <li>Send newsletters and updates you have opted into</li>
                            <li>Respond to your inquiries and provide support</li>
                            <li>Process membership applications</li>
                            <li>Improve the Site and user experience</li>
                            <li>Monitor Site usage and analytics</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">4. Member Directory</h2>
                        <p>
                            The Site features a directory of professionals who serve older adults in Metro Vancouver
                            and the Fraser Valley, BC. Directory members have consented to the display of their
                            professional contact information (name, business name, email, phone number, and website)
                            on the Site. If you are a listed professional and wish to update or remove your
                            information, please contact us at{' '}
                            <a href="mailto:info@seniorsbc.com" className="text-sbc-blue hover:underline">info@seniorsbc.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">5. Cookies and Tracking Technologies</h2>
                        <p>
                            The Site may use cookies and similar tracking technologies to enhance your browsing
                            experience and collect analytics data. You can control cookies through your browser
                            settings. Disabling cookies may affect the functionality of certain features on the Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">6. Third-Party Services</h2>
                        <p>
                            We may use third-party services (such as analytics providers and hosting platforms)
                            that collect, monitor, and analyze information to help us improve the Site. These
                            third parties have their own privacy policies governing how they use your information.
                            We are not responsible for the privacy practices of third-party services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">7. Data Sharing and Disclosure</h2>
                        <p className="mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>With your consent:</strong> When you have given us explicit permission.</li>
                            <li><strong>Service providers:</strong> With trusted partners who assist in operating the Site, subject to confidentiality obligations.</li>
                            <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process.</li>
                            <li><strong>Safety:</strong> To protect the rights, safety, or property of SBC, our users, or the public.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">8. Data Security</h2>
                        <p>
                            We implement reasonable administrative, technical, and physical safeguards to protect
                            your personal information. However, no method of transmission over the internet or
                            electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">9. Your Rights</h2>
                        <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt out of receiving marketing communications</li>
                        </ul>
                        <p className="mt-4">
                            To exercise any of these rights, please contact us at{' '}
                            <a href="mailto:info@seniorsbc.com" className="text-sbc-blue hover:underline">info@seniorsbc.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">10. Children's Privacy</h2>
                        <p>
                            The Site is not directed at individuals under the age of 18. We do not knowingly
                            collect personal information from children. If you believe we have inadvertently
                            collected information from a child, please contact us so we can promptly remove it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">11. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on
                            this page with an updated "Last updated" date. We encourage you to review this policy
                            periodically to stay informed about how we protect your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">12. Contact Us</h2>
                        <p>
                            If you have questions or concerns about this Privacy Policy, please contact us:
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
