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
                  By accessing and using FLINETIC's services, you accept and agree to be bound by these Terms of Service. 
                  If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">2. Services</h2>
                <p className="mb-4">FLINETIC provides:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web development and design services</li>
                  <li>Mobile application development</li>
                  <li>E-commerce solutions</li>
                  <li>Custom software development</li>
                  <li>Maintenance and support services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">3. Payment Terms</h2>
                <p className="mb-4">
                  Payment terms are agreed upon before project commencement. Typical terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>50% upfront payment to begin work</li>
                  <li>50% upon project completion</li>
                  <li>Milestone-based payments for larger projects</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">4. Intellectual Property</h2>
                <p>
                  Upon full payment, you own the final deliverables. We retain the right to showcase the work 
                  in our portfolio unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">5. Revisions and Changes</h2>
                <p>
                  Each project includes a specified number of revision rounds. Additional revisions may incur 
                  extra charges as outlined in the project agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">6. Project Timeline</h2>
                <p>
                  We strive to meet agreed timelines. Delays caused by client feedback or content provision 
                  may extend the delivery date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">7. Limitation of Liability</h2>
                <p>
                  FLINETIC is not liable for any indirect, incidental, or consequential damages arising from 
                  the use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">8. Contact</h2>
                <p>
                  For questions about these Terms, contact us at:
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

export default TermsOfService
