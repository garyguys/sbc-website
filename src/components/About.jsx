import { Shield, Users, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
    const valueProps = [
        {
            icon: <Shield className="w-6 h-6 text-sbc-blue" />,
            title: "Trusted Network",
            description: "Every member is vetted and committed to ethical service for older adults."
        },
        {
            icon: <Users className="w-6 h-6 text-sbc-blue" />,
            title: "Community-Centered",
            description: "Local professionals who understand the unique needs of Metro Vancouver and the Fraser Valley seniors."
        },
        {
            icon: <Heart className="w-6 h-6 text-sbc-blue" />,
            title: "Holistic Support",
            description: "From legal and financial to health and home — we cover every aspect of senior living."
        }
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <section id="about" className="py-24 md:py-32 bg-sbc-off-white">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                        className="flex flex-col gap-6"
                    >
                        <motion.div variants={fadeUp}>
                            <span className="text-sm font-bold tracking-widest uppercase text-sbc-blue">
                                About SBC
                            </span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-sbc-gray-900 leading-tight">
                            Working Together to Support Older Adults
                        </motion.h2>

                        <motion.div variants={fadeUp} className="flex flex-col gap-5 text-lg text-sbc-gray-600 leading-relaxed">
                            <p>
                                Seniors Business Connect is a collaborative network of trusted local professionals dedicated to educating, supporting, and empowering older adults and their families to take informed action on issues that impact their safety, well-being, and quality of life.
                            </p>
                            <p>
                                As part of the BC Community Response Networks (CRNs), our members work together to safeguard and support older adults within Metro Vancouver and the Fraser Valley.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Value Props */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={stagger}
                        className="flex flex-col gap-4"
                    >
                        {valueProps.map((prop, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="bg-white p-6 md:p-8 rounded-2xl border border-sbc-gray-200 shadow-sm flex gap-5 items-start group hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                            >
                                <div className="p-3 bg-sbc-blue-light/50 rounded-xl rounded-tl-sm group-hover:bg-sbc-blue-light transition-colors shrink-0">
                                    {prop.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-sbc-gray-900 mb-2">{prop.title}</h3>
                                    <p className="text-sbc-gray-600 leading-relaxed">{prop.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
