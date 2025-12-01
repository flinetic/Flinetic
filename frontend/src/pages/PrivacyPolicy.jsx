import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
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
              <Shield className="w-12 h-12 text-indigo-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
            
            <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  We may collect the following information when you use our services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email, and contact details</li>
                  <li>Project requirements and communication history</li>
                  <li>Payment information (processed through secure third-party services)</li>
                  <li>Files or content shared for project completion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">Your information is used to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Deliver and improve our services</li>
                  <li>Communicate regarding project updates</li>
                  <li>Send invoices, notifications, or proposals</li>
                  <li>Process payments</li>
                  <li>Maintain service records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">3. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your data. However, no online platform can guarantee 100% security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">4. Third-Party Services</h2>
                <p className="mb-4">
                  We may use trusted third-party tools for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment processing</li>
                  <li>Analytics</li>
                  <li>Communication</li>
                  <li>Hosting and deployment</li>
                </ul>
                <p className="mt-4">These services have independent privacy policies.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">5. Your Rights</h2>
                <p className="mb-4">You may request:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your data (if not legally required to retain)</li>
                  <li>To opt out of marketing or promotional emails</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy:
                  <br />
                  📩 <a href="mailto:flinetic.info@gmail.com" className="text-indigo-400 hover:text-indigo-300">
                    flinetic.info@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
