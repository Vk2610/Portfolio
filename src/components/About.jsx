import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiBriefcase, FiCpu } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';
import aboutAvatar from '../assets/about-avatar.png';

export default function About() {
  const stats = [
    { icon: <FiCode className="text-accentPurple" size={20} />, value: '10+', label: 'Projects Completed' },
    { icon: <FiBriefcase className="text-accentPurple" size={20} />, value: '1', label: 'Internship Experience' },
    { icon: <FiCpu className="text-accentPurple" size={20} />, value: '15+', label: 'Technologies Used' },
  ];

  return (
    <section id="about" className="relative w-full py-12 scroll-mt-20">
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accentViolet/10 blur-[90px] pointer-events-none aurora-bg" />
      
      <div className="bg-glass border border-glass rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Biography and Stats */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-accentPurple mb-2 block">
              ABOUT ME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans">
              Get to know me
            </h2>
            
            <div className="space-y-4 text-grayText text-sm sm:text-base leading-relaxed mb-8">
              <p>
                I'm a Final Year Computer Science Engineering student who loves building full stack web applications. 
                I enjoy turning ideas into real-world products that provide value to users.
              </p>
              <p>
                I have completed a Full Stack Development Internship at Vieh Group where I gained hands-on experience in 
                developing responsive applications and working with databases.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-glass/80 border border-glass rounded-2xl p-5 flex flex-col items-start hover-lift transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accentPurple/10 border border-accentPurple/25 flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-bold text-white tracking-tight mb-1">{stat.value}</span>
                  <span className="text-xs text-grayText leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Avatar with Floating Nodes & Connections */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center min-h-[380px] lg:min-h-[420px] relative w-full overflow-hidden">
            
            {/* SVG Connecting lines (visible on larger screens where layout matches coordinates) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <style>{`
                  .laser-line {
                    stroke: #8B5CF6;
                    stroke-width: 1.5;
                    stroke-opacity: 0.55;
                    stroke-dasharray: 6 6;
                    animation: laser-flow 4s linear infinite;
                    filter: url(#neon-glow);
                  }
                  @keyframes laser-flow {
                    to {
                      stroke-dashoffset: -40;
                    }
                  }
                `}</style>
              </defs>
              {/* Connecting lines from center avatar area to floating icons */}
              <line x1="50%" y1="50%" x2="20%" y2="20%" className="laser-line" />
              <line x1="50%" y1="50%" x2="82%" y2="22%" className="laser-line" />
              <line x1="50%" y1="50%" x2="16%" y2="52%" className="laser-line" />
              <line x1="50%" y1="50%" x2="84%" y2="52%" className="laser-line" />
              <line x1="50%" y1="50%" x2="80%" y2="82%" className="laser-line" />
            </svg>

            {/* Central Avatar */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-accentPurple/10 to-accentViolet/10 border border-accentPurple/25 p-2 flex items-center justify-center z-10 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-glass/90 flex items-center justify-center border border-white/5">
                <img 
                  src={aboutAvatar} 
                  alt="Vedant Avatar with Laptop"
                  className="w-[90%] h-[90%] object-contain pointer-events-none select-none filter drop-shadow-[0_8px_16px_rgba(168,85,247,0.25)]"
                />
              </div>
            </motion.div>

            {/* Floating Icon 1: React (Top Left) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.1 }}
              className="absolute left-[3%] sm:left-[10%] top-[10%] sm:top-[12%] z-20 flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0a0f1d] border border-glass-active flex items-center justify-center text-[#61DAFB] shadow-purple-glow hover:scale-110 transition-transform duration-300">
                <FaReact size={24} className="animate-[spin_10s_linear_infinite]" />
              </div>
              <span className="text-[10px] text-grayText font-semibold bg-glass/90 px-2 py-0.5 rounded-full border border-glass">React</span>
            </motion.div>

            {/* Floating Icon 2: Node (Top Right) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.5 }}
              className="absolute right-[3%] sm:right-[12%] top-[12%] sm:top-[14%] z-20 flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0d1c15] border border-glass-active flex items-center justify-center text-[#339933] shadow-purple-glow hover:scale-110 transition-transform duration-300">
                <FaNodeJs size={24} />
              </div>
              <span className="text-[10px] text-grayText font-semibold bg-glass/90 px-2 py-0.5 rounded-full border border-glass">Node</span>
            </motion.div>

            {/* Floating Icon 3: Express (Mid Left) */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.6, ease: 'easeInOut', delay: 0.9 }}
              className="absolute left-[0%] sm:left-[6%] top-[45%] z-20 flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#111] border border-glass-active flex items-center justify-center text-white font-bold text-sm shadow-purple-glow hover:scale-110 transition-transform duration-300">
                ex
              </div>
              <span className="text-[10px] text-grayText font-semibold bg-glass/90 px-2 py-0.5 rounded-full border border-glass">Express</span>
            </motion.div>

            {/* Floating Icon 4: MongoDB (Mid Right) */}
            <motion.div 
              animate={{ y: [0, -9, 0] }}
              transition={{ repeat: Infinity, duration: 4.0, ease: 'easeInOut', delay: 1.3 }}
              className="absolute right-[0%] sm:right-[8%] top-[45%] z-20 flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0d1a10] border border-glass-active flex items-center justify-center text-[#47A248] shadow-purple-glow hover:scale-110 transition-transform duration-300">
                <SiMongodb size={24} />
              </div>
              <span className="text-[10px] text-grayText font-semibold bg-glass/90 px-2 py-0.5 rounded-full border border-glass">MongoDB</span>
            </motion.div>

            {/* Floating Icon 5: MySQL (Bottom Right) */}
            <motion.div 
              animate={{ y: [0, -11, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.8 }}
              className="absolute right-[5%] sm:right-[15%] bottom-[12%] z-20 flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0d1624] border border-glass-active flex items-center justify-center text-[#4479A1] shadow-purple-glow hover:scale-110 transition-transform duration-300">
                <SiMysql size={24} />
              </div>
              <span className="text-[10px] text-grayText font-semibold bg-glass/90 px-2 py-0.5 rounded-full border border-glass">MySQL</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
