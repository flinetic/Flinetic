/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

export default function WhyChoose() {
    return (
        <section id='whychooseus' className="relative py-24 bg-gray-950 text-white">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
                <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
                <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
                <motion.div className="text-center max-w-3xl mx-auto mb-14" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="uppercase tracking-[0.3em] text-2xl text-indigo-300 mb-4">Why Choose Us</p>
                    <h2 className="text-lg text-white/70 font-semibold mb-6">Empowering Your Ideas, Simplifying Your Workflow</h2>
                    <p className="text-lg text-white/80 mb-8">At <span className='tracking-widest font-semibold bg-gradient-to-r from-white/70  to-indigo-600 bg-clip-text text-transparent'>FLINETIC</span>, we don’t just deliver solutions – we transform your vision into actionable digital experiences. Here’s why businesses choose us:</p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 mb-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-xl font-semibold text-indigo-300 mb-2">Expertise Across Domains</h3>
                        <p className="text-white/80">From responsive web experiences to intuitive apps and smart systems, we craft solutions for every digital need.</p>
                    </motion.div>
                    <motion.div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 mb-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-xl font-semibold text-indigo-300 mb-2">Tailored Solutions</h3>
                        <p className="text-white/80">Every project is customized to align with your business goals, audience, and brand identity.</p>
                    </motion.div>
                    <motion.div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 mb-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-xl font-semibold text-indigo-300 mb-2">User-Centric Design</h3>
                        <p className="text-white/80">We focus on intuitive interfaces and seamless experiences that keep your users engaged.</p>
                    </motion.div>
                    <motion.div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 mb-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-xl font-semibold text-indigo-300 mb-2">Innovation & Technology</h3>
                        <p className="text-white/80">Leveraging the latest technologies to deliver scalable, robust, and future-ready solutions.</p>
                    </motion.div>
                    <motion.div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 mb-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h3 className="text-xl font-semibold text-indigo-300 mb-2">Reliable Support</h3>
                        <p className="text-white/80">Dedicated assistance throughout your journey, from initial concept to post-launch maintenance.</p>
                    </motion.div>
                </div>
                <motion.div className="text-center max-w-2xl mx-auto mt-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <p className="text-lg text-white/80">Transform your ideas into digital reality with precision, creativity, and efficiency.</p>
                </motion.div>
            </div>
        </section>
    )
}
