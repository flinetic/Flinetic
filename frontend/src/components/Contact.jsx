/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react'
import Footer from './Footer'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Form Data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    project: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sendData = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      project: formData.project,
      message: formData.message,
      formType: "contact"
    };

    try {
      // 1. Send to Google Sheet
      const sheetRes = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData),
      });

      const sheetData = await sheetRes.json();
      console.log("Sheet Response:", sheetData);

      // 2. Send Email via Backend
      const emailRes = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData),
      });

      const emailData = await emailRes.json();
      console.log("Email Response:", emailData);

      alert("Message sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        number: "",
        project: "",
        message: "",
      });

    } catch (err) {
      console.error("Error sending form:", err);
      alert("Failed to send message.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id='contact' ref={ref} className="pt-32 px-4 md:px-6 relative bg-gray-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />
        <div className="absolute -top-32 right-0 w-[36rem] h-[36rem] bg-indigo-500/30 blur-[160px]" />
        <div className="absolute bottom-0 -left-10 w-[28rem] h-[28rem] bg-cyan-500/30 blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>

          <motion.p className="uppercase tracking-[0.3em] text-center text-base md:text-2xl text-indigo-300 mb-4" variants={itemVariants}>
            Let's Build Something Remarkable
          </motion.p>

          <motion.h2
            className="text-lg text-white/70 text-center mb-20 max-w-3xl mx-auto font-light"
            variants={itemVariants}
          >
            Ready to transform your vision into reality? Let's start the conversation.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-transparent border border-zinc-600 rounded-xl text-white placeholder-indigo-200"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-transparent border border-zinc-600 rounded-xl text-white placeholder-indigo-200"
                      required
                    />
                  </motion.div>

                </div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <input
                    type="text"
                    name="number"
                    placeholder="WhatsApp Number (e.g. +91 9423608553)"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-transparent border border-zinc-600 rounded-xl text-white placeholder-indigo-200"
                    required
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className="custom-select w-full px-6 py-4 bg-transparent border border-zinc-600 rounded-xl text-indigo-200"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="website">Website Development</option>
                    <option value="app">Mobile App</option>
                    <option value="ecommerce">E-Commerce Platform</option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="custom-select w-full px-6 py-4 bg-transparent border border-zinc-600 rounded-xl text-indigo-200"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 cursor-pointer bg-gradient-to-r from-indigo-500 to-sky-800 text-white font-semibold rounded-xl flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>

              </form>
            </motion.div>

            {/* Right Side */}
            <motion.div variants={itemVariants} className="space-y-8">

              <div>
                <h3 className="text-2xl font-semibold text-indigo-400 mb-6">Get in Touch</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  Based in the vibrant tech hub of Pune, Maharashtra, we're always excited to discuss new projects.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div className="flex items-center gap-4 p-4 border rounded-xl" whileHover={{ x: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-800 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-indigo-200 font-medium">WhatsApp</p>
                    <p className="text-white/60">+91 94236 08553</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4 p-4 border rounded-xl" whileHover={{ x: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-800 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-indigo-200 font-medium">Email</p>
                    <p className="text-white/60">flinetic.info@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4 p-4 border rounded-xl" whileHover={{ x: 10 }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-sky-800 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-indigo-200 font-medium">Location</p>
                    <p className="text-white/60">Pune, Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>

              <motion.div className="h-64 bg-zinc-800/30 rounded-xl overflow-hidden relative w-full" whileHover={{ scale: 1.02 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0344739699!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1764513418879!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

            </motion.div>
          </div>
        </motion.div>

        <br />
        <br />
        <hr className="w-full text-gray-500" />
        <Footer />
      </div>
    </section>
  )
}

export default Contact
