/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const steps = [
    {
        title: 'Discover & Plan',
        desc: 'Share your vision and goals. We analyze requirements and create a roadmap tailored for your project.',
    },
    {
        title: 'Design & Prototype',
        desc: 'We craft UI/UX designs and interactive prototypes to ensure your ideas are visually and functionally perfect.',
    },
    {
        title: 'Development & Testing',
        desc: 'Our team builds responsive websites, apps, or SaaS solutions with clean code, rigorous testing, and attention to detail.',
    },
    {
        title: 'Launch & Optimize',
        desc: 'Deploy your project, monitor performance, and optimize for maximum impact and efficiency.',
    },
    {
        title: 'Support & Grow',
        desc: 'Ongoing support, updates, and enhancements to help your digital experience evolve as your business grows.',
    },
]

export default function HowItWorks() {
    return (
        <section id='howitworks' className="relative py-24 bg-gray-950 text-white">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
                <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
                <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
                <motion.div className="text-center max-w-3xl mx-auto mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="uppercase tracking-[0.3em] text-2xl text-indigo-300 mb-4">How It Works</p>
                    <h2 className="text-lg  text-white/70 font-semibold mb-6">From Concept to Launch – Simple & Transparent</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.title}
                            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 mb-6"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <span className="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-800 flex items-center justify-center text-xl font-semibold">{idx + 1}</span>
                                <h3 className="text-lg font-semibold text-indigo-300">{step.title}</h3>
                            </div>
                            <p className="text-white/80">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
