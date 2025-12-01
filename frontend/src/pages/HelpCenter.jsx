import { motion } from 'framer-motion'
import { HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const HelpCenter = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Usually 2–6 weeks, depending on complexity: Simple websites take 2–3 weeks, while e-commerce or custom web apps may take 4–6 weeks (estimated). Timeline depends on project complexity."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer three packages: Starter — ₹5,999+, Professional — ₹19,999+, and Enterprise — ₹39,999+. All packages include domain, hosting, and SSL for 1–3 years depending on the plan."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! Maintenance starts at ₹1,000/month and includes updates, backups, and technical support. Every package includes 1 month of free support."
    },
    {
      question: "Can I update the website myself?",
      answer: "Yes. Enterprise plans include CMS access, so you can edit content easily without needing a developer."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, bank transfer, credit/debit cards, and payment gateways. Standard payment terms: 40% upfront + 60% on completion."
    },
    {
      question: "Do you offer refunds?",
      answer: "Refunds may be provided only before major development work begins. Once project execution starts, refunds are not available — but we aim to ensure full client satisfaction."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <HelpCircle className="w-12 h-12 text-indigo-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Help Center
              </h1>
            </div>
            
            <p className="text-white/60 mb-12">Find answers to common questions</p>

            {/* FAQs */}
            <div className="space-y-6 mb-16">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-indigo-300 mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border border-indigo-500/20 rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Still need help?</h2>
              <p className="text-white/70 mb-6">Our team is here to assist you.</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <a href="mailto:flinetic.info@gmail.com" className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="text-white">Send us a message</p>
                  </div>
                </a>
                
                <a href="https://wa.me/919423608553" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <MessageCircle className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="text-sm text-white/60">WhatsApp</p>
                    <p className="text-white">Chat with us</p>
                  </div>
                </a>
                
                <a href="tel:+919423608553" className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <div>
                    <p className="text-sm text-white/60">Phone</p>
                    <p className="text-white">Call us</p>
                  </div>
                </a>
              </div>

              <Link to="/contact" className="mt-6 inline-block">
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-sky-600 text-white rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
                  Contact Support
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HelpCenter
