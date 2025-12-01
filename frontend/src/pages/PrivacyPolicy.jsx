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
                  We collect information you provide directly to us when you use our services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Project details and requirements</li>
                  <li>Payment information (processed securely)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about projects</li>
                  <li>Send important updates and notifications</li>
                  <li>Process payments and transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">3. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">4. Third-Party Services</h2>
                <p>
                  We may use third-party services for payment processing, analytics, and communication. 
                  These services have their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">5. Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of your data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
                  <br />
                  <a href="mailto:flinetic.info@gmail.com" className="text-indigo-400 hover:text-indigo-300">
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
