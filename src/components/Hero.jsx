import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaChevronRight, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiMongodb, SiMysql, SiExpress } from 'react-icons/si';
import heroAvatar from '../assets/hero-avatar.png';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] md:min-h-screen pt-2 pb-8 flex items-center">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-accentPurple/25 blur-[80px] pointer-events-none aurora-bg" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-accentViolet/20 blur-[80px] pointer-events-none aurora-bg-delay" />

      {/* Main hero card */}
      <div className="w-full bg-glass border border-glass rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Hi Badge */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-6 backdrop-blur-sm">
              Hi, I'm Vedant <span className="animate-bounce">👋</span>
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-sans">
              Building Scalable <br />
              <span className="bg-gradient-to-r from-accentPurple via-[#A855F7] to-[#C084FC] bg-clip-text text-transparent text-glow-purple">
                Digital Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-grayText mb-8 max-w-xl leading-relaxed">
              Full Stack MERN Developer passionate about building modern web applications and solving real-world problems.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accentPurple to-accentViolet text-white font-medium text-xs transition-all duration-300 hover:shadow-purple-glow hover:scale-105"
              >
                <span>View Projects</span>
                <FaChevronRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <a
                href="#resume"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium text-xs transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
              >
                <span>Download Resume</span>
                <FaDownload size={12} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: <FaGithub size={20} />, url: 'https://github.', label: 'GitHub' },
                { icon: <FaLinkedin size={20} />, url: 'https://linkedin.', label: 'LinkedIn' },
                { icon: <SiLeetcode size={20} />, url: 'https://leetcode.', label: 'LeetCode' },
                { icon: <FaEnvelope size={20} />, url: 'mailto:vedant@example.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-grayText transition-all duration-300 hover:bg-accentPurple/20 hover:border-accentPurple/40 hover:text-white hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Avatar and Tech */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full h-full min-h-[350px] lg:min-h-auto">
            {/* Avatar Orbit Graphics */}
            <div className="relative w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] flex items-center justify-center">
              
              {/* Purple glowing orbit ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accentPurple/30 flex items-center justify-center"
              >
                <div className="w-[12px] h-[12px] rounded-full bg-accentViolet absolute -top-1.5 shadow-[0_0_10px_#A855F7]" />
                <div className="w-[8px] h-[8px] rounded-full bg-accentPurple absolute -bottom-1 shadow-[0_0_8px_#8B5CF6]" />
              </motion.div>
              
              {/* Outer purple blur energy circle */}
              <div className="absolute w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] rounded-full bg-gradient-to-tr from-accentPurple/20 to-accentViolet/20 blur-md border border-accentPurple/30" />
              
              {/* 3D Avatar Image */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative z-10 w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] flex items-center justify-center overflow-hidden"
              >
                <img
                  src={heroAvatar}
                  alt="Vedant Portrait Avatar"
                  className="w-full h-full object-contain pointer-events-none select-none filter drop-shadow-[0_10px_20px_rgba(139,92,246,0.3)]"
                />
              </motion.div>
            </div>

            {/* Floating Tech Stack Card (centered below the avatar) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 w-full max-w-[340px] sm:max-w-[400px] bg-glass/90 border border-glass rounded-2xl p-4 shadow-xl backdrop-blur-md flex items-center justify-around gap-2"
            >
              {[
                { icon: <FaReact className="text-[#61DAFB]" size={22} />, label: 'React' },
                { icon: <FaNodeJs className="text-[#339933]" size={22} />, label: 'Node.js' },
                { icon: <div className="text-white text-[10px] font-bold w-6 h-6 rounded-full bg-gray-700/60 border border-gray-500/30 flex items-center justify-center">ex</div>, label: 'Express.js' },
                { icon: <SiMongodb className="text-[#47A248]" size={22} />, label: 'MongoDB' },
                { icon: <SiMysql className="text-[#4479A1]" size={22} />, label: 'MySQL' }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center gap-1 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accentPurple/10 group-hover:border-accentPurple/30 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="text-[9px] text-grayText font-medium transition-colors duration-300 group-hover:text-white">
                    {tech.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
