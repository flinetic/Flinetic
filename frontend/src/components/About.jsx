/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'


const stats = [
  { label: 'Years Crafting Digital', value: '5+' },
  { label: 'Products Launched', value: '34' },
  { label: 'Client Retention', value: '92%' },
  { label: 'Avg. NPS Score', value: '68' },
]



const values = [
  {
    title: 'Human-Centered',
    description:
      'We treat every interaction as a conversation. Real people use what we build, so empathy sits at the heart of every flow, interface, and automation.',
  },
  {
    title: 'Future-Ready',
    description:
      'From AI-backed assistants to IoT ecosystems, we prototype tomorrow’s experiences today so our partners stay two steps ahead.',
  },
  {
    title: 'Precision Delivery',
    description:
      'Opinionated design systems, automated QA, and obsessive documentation keep releases predictable without squeezing out creativity.',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'Studio Concept',
    copy:
      'Started as a weekend experiment in Pune to blend design thinking with engineering craft for boutique brands.',
  },
  {
    year: '2021',
    title: 'Scale With Systems',
    copy:
      'Introduced proprietary component libraries and DevOps accelerators that cut hand-off time by 40%.',
  },
  {
    year: '2023',
    title: 'Intelligent Experiences',
    copy:
      'Broke into AI-assisted journeys, launching multi-modal assistants for fitness, retail, and hospitality partners.',
  },
  {
    year: 'Today',
    title: 'FLINETIC Collective',
    copy:
      'Remote-first team collaborating with founders worldwide to ship resilient, measurable product ecosystems.',
  },
]

const About = () => {
  return (
    <main className=" bg-gray-50 text-gray-900">
      {/* Hero */}
      <section id='about' className="relative overflow-hidden " >
        <div className="relative mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-16 items-center py-12 px-2 md:px-10 max-w-7xl mx-auto">
            <div className="flex-1 flex flex-col justify-center h-full">
              <motion.p
                className=" uppercase tracking-[0.3em] text-2xl text-indigo-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Us
              </motion.p>
              <motion.h1
                className="mt-6 text-lg md:text-xl text-justify text-slate-700 max-w-3xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                At <span className='tracking-widest font-semibold bg-gradient-to-r from-indigo-500  to-indigo-950 bg-clip-text text-transparent'>FLINETIC</span>, we are passionate about turning ideas into impactful digital experiences.
              </motion.h1>
              <motion.p
                className="mt-8 text-lg md:text-xl text-slate-600  max-w-3xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                We combine creativity, technology, and innovation to help businesses grow and thrive in the digital world.<br /><br />
                Our mission is to simplify technology for our clients, delivering solutions that are not only functional but also intuitive and user-friendly. With a focus on quality, reliability, and innovation, we strive to empower businesses and individuals to achieve more through smarter digital solutions.<br /><br />
                At <span className='tracking-widest font-semibold bg-gradient-to-r from-indigo-500  to-indigo-950 bg-clip-text text-transparent'>FLINETIC</span>, your vision drives our work. We are committed to bringing your ideas to life with precision, efficiency, and excellence.
              </motion.p>
            </div>
            <div className="flex-1 flex justify-center items-center h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D"
                alt="Creative digital team at work"
                className="rounded-2xl shadow-lg w-full h-full min-h-[320px] object-cover bg-gray-100"
                style={{ objectPosition: 'center', aspectRatio: '1/1' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats with image */}
      {/* <section className="max-w-6xl mx-auto px-6 pb-24 -mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10 items-center">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-indigo-100 bg-white px-6 py-8 text-center shadow-sm"
                >
                  <p className="text-3xl md:text-4xl font-semibold text-indigo-600">{stat.value}</p>
                  <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/src/assets/about/about-team.jpg"
              alt="About FLINETIC Team"
              className="rounded-2xl shadow-lg w-64 h-64 object-cover bg-gray-100"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
      </section> */}

      {/* Narrative */}
      {/* <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 mb-4">Why We Exist</p>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              We design with founders, not just for them.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Enterprise agencies move slow. Solo freelancers can’t always scale. We bridge the gap—building compact,
              high-output teams around each product so strategy, UI, engineering, QA, and growth move in lockstep.
            </p>
          </div>
          <div className="space-y-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-gray-50/70">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Milestones */}
      {/* <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300 mb-4">Milestones</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-12">The journey so far</h2>
          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-32">
                  <p className="text-indigo-300 text-lg font-semibold">{milestone.year}</p>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-semibold mb-2">{milestone.title}</p>
                  <p className="text-white/70">{milestone.copy}</p>
                </div>
                {index !== milestones.length - 1 && (
                  <div className="hidden md:block w-16 h-px bg-white/10 md:self-center" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Founders */}
      {/* <Founders
        sectionId="about-founders"
        title="The duo powering FLINETIC"
        subtitle="Complementary crafts, shared obsession for meaningful digital products."
      /> */}

      {/* CTA */}
      {/* <section className="py-24 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase text-sm tracking-[0.3em] text-white/60 mb-3">Next Chapter</p>
            <h2 className="text-4xl font-serif mb-4">Let’s co-create your next flagship experience.</h2>
            <p className="text-white/80 text-lg">
              We plug into your roadmap, ship pilots in weeks, and scale what resonates. Strategy sprint or long-term
              build—we’re ready.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                Product strategy intensives
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                Web, app, and IoT ecosystems
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white" />
                Growth-ready design systems
              </li>
            </ul>
            <a
              href="/contact"
              className="inline-flex mt-8 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default About

