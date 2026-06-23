import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiX } from 'react-icons/fi';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Close modal after showing success state briefly
      setTimeout(() => {
        setSuccess(false);
        setIsModalOpen(false);
      }, 3000);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    { icon: <FiMail className="text-accentPurple" size={18} />, label: 'Email', value: 'vedantkumbhar82@gmail.com', href: 'mailto:vedantkumbhar82@gmail.com' },
    { icon: <FiPhone className="text-accentPurple" size={18} />, label: 'Phone', value: '+91 9067723468', href: 'tel:+919067723468' },
    { icon: <FiMapPin className="text-accentPurple" size={18} />, label: 'Location', value: 'Satara, Maharashtra, India', href: 'https://maps.google.com/?q=Satara,Maharashtra,India' }
  ];

  return (
    <section id="contact" className="relative w-full py-6 scroll-mt-20">
      <div className="bg-glass border border-glass rounded-[24px] p-6 md:p-8 shadow-2xl overflow-hidden text-left h-full flex flex-col justify-between">
        
        {/* Title details */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accentPurple mb-1.5 block">
            LET'S CONNECT
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans">
            Get In Touch
          </h2>
          <p className="text-sm text-grayText leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas or opportunities.
          </p>
        </div>

        {/* Contact details list */}
        <div className="space-y-4 mb-6">
          {contactDetails.map((item, idx) => (
            <a 
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-black/25 border border-glass rounded-xl p-3.5 hover:border-accentPurple/25 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-accentPurple/10 border border-accentPurple/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                {item.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-grayText mb-0.5">{item.label}</span>
                <span className="text-sm text-white font-medium group-hover:text-accentPurple transition-colors duration-200">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Send message button trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-accentPurple to-accentViolet text-white font-medium text-sm transition-all duration-300 hover:shadow-purple-glow hover:scale-102"
        >
          <span>Send Message</span>
          <FiSend size={13} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
        </button>

      </div>

      {/* Floating Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!loading) {
                  setIsModalOpen(false);
                  setError(null);
                }
              }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal content box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#0c0c0e] border border-glass rounded-[24px] max-w-md w-full p-6 md:p-8 shadow-2xl relative z-10 text-left"
            >
              {/* Close Button */}
              <button 
                onClick={() => {
                  if (!loading) {
                    setIsModalOpen(false);
                    setError(null);
                  }
                }}
                disabled={loading}
                className="absolute top-4 right-4 text-grayText hover:text-white transition-colors duration-200 disabled:opacity-30"
              >
                <FiX size={20} />
              </button>

              <h3 className="text-xl font-bold text-white mb-1 font-sans">Send a Message</h3>
              <p className="text-xs text-grayText mb-6">Drop your details below and I'll get back to you shortly.</p>

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs mb-4">
                  {error}
                </div>
              )}

              {success ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 mb-4 animate-bounce">
                    <FiSend size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-xs text-grayText">Thank you, your message has been delivered.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-grayText uppercase">Name</label>
                    <input 
                      type="text" 
                      required
                      disabled={loading}
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/30 border border-glass rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accentPurple/50 focus:bg-black/50 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-grayText uppercase">Email</label>
                    <input 
                      type="email" 
                      required
                      disabled={loading}
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/30 border border-glass rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accentPurple/50 focus:bg-black/50 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-grayText uppercase">Message</label>
                    <textarea 
                      required
                      disabled={loading}
                      rows="4"
                      placeholder="Hi Vedant, I'd love to connect..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/30 border border-glass rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accentPurple/50 focus:bg-black/50 resize-none transition-all duration-300 disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-accentPurple to-accentViolet text-white font-medium text-sm flex items-center justify-center gap-2 hover:shadow-purple-glow transition-all duration-300 mt-2 disabled:opacity-50 cursor-pointer"
                  >
                    <span>{loading ? 'Sending...' : 'Submit Message'}</span>
                    {!loading && <FiSend size={12} />}
                  </button>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
