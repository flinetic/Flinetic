import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Footer from '../components/Footer'

const TermsOfService = () => {
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
              <FileText className="w-12 h-12 text-indigo-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
            </div>
            
            <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using any services provided by FLINETIC, you agree to be bound by these Terms of Service. 
                  If you do not agree, please discontinue use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">2. Services</h2>
                <p className="mb-4">FLINETIC provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web development & design</li>
                  <li>Mobile application development</li>
                  <li>SaaS and custom software development</li>
                  <li>E-commerce solutions</li>
                  <li>UI/UX design</li>
                  <li>Maintenance & ongoing support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">3. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms are discussed and agreed upon before the project begins. Standard terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>40% upfront to initiate the project</li>
                  <li>60% upon final delivery</li>
                  <li>For large projects, milestone-based payments may apply</li>
                </ul>
                <p className="mt-4">
                  All payments must be completed before final delivery of files or deployment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  After full payment is received, all final deliverables become the client's property. FLINETIC retains the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Display completed work in our portfolio</li>
                  <li>Use project screenshots for marketing</li>
                </ul>
                <p className="mt-4">unless otherwise agreed in writing.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">5. Revisions & Changes</h2>
                <p>
                  Each project includes a predefined number of revision rounds. Additional revisions or major scope changes 
                  may incur extra charges based on the updated requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">6. Project Timeline</h2>
                <p>
                  We aim to follow agreed timelines. However, delays caused by late client responses, incomplete requirements, 
                  or resource delays may extend the final delivery date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">7. Limitation of Liability</h2>
                <p>
                  FLINETIC is not liable for any indirect, incidental, or consequential damages arising from the use of our services, 
                  including website downtime, third-party service issues, or content inaccuracies provided by the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">8. Contact</h2>
                <p>
                  For questions about these Terms, contact:
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

export default TermsOfService
