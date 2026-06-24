import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiPython, SiFirebase, SiPostman, SiVercel } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = {
  Frontend: [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={28} />, color: 'rgba(97, 218, 251, 0.15)' },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" size={26} />, color: 'rgba(247, 223, 30, 0.15)' },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={26} />, color: 'rgba(49, 120, 198, 0.15)' },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" size={28} />, color: 'rgba(227, 79, 38, 0.15)' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" size={28} />, color: 'rgba(21, 114, 182, 0.15)' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={28} />, color: 'rgba(6, 182, 212, 0.15)' },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" size={28} />, color: 'rgba(121, 82, 179, 0.15)' },
    { name: 'Shadcn UI', icon: <div className="text-white font-semibold text-lg">///</div>, color: 'rgba(255, 255, 255, 0.15)' },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" size={28} />, color: 'rgba(51, 153, 51, 0.15)' },
    { name: 'Express.js', icon: <SiExpress className="text-white" size={26} />, color: 'rgba(255, 255, 255, 0.1)' },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" size={26} />, color: 'rgba(55, 118, 171, 0.15)' },
    { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" size={26} />, color: 'rgba(255, 202, 40, 0.15)' },
  ],
  Database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={28} />, color: 'rgba(71, 162, 72, 0.15)' },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" size={28} />, color: 'rgba(68, 121, 161, 0.15)' },
  ],
  'Tools & Others': [
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" size={28} />, color: 'rgba(240, 80, 50, 0.15)' },
    { name: 'GitHub', icon: <FaGithub className="text-white" size={28} />, color: 'rgba(255, 255, 255, 0.1)' },
    { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" size={26} />, color: 'rgba(0, 122, 204, 0.15)' },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" size={26} />, color: 'rgba(255, 108, 55, 0.15)' },
    { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" size={26} />, color: 'rgba(242, 78, 30, 0.15)' },
    { name: 'Vercel', icon: <SiVercel className="text-white" size={24} />, color: 'rgba(255, 255, 255, 0.1)' },
  ],
};

const categories = ['Frontend', 'Backend', 'Database', 'Tools & Others'];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    }
  };

  return (
    <section id="skills" className="relative w-full py-12 scroll-mt-20">
      <div className="bg-glass border border-glass rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-2xl overflow-hidden relative">
        {/* Title */}
        <div className="flex flex-col text-left mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-accentPurple mb-2 block">
            SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            Tech Stack & Tools
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-black/30 border border-white/5 p-1.5 rounded-2xl overflow-x-auto no-scrollbar flex-nowrap md:flex-wrap max-w-full w-fit">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shrink-0 ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-accentPurple border border-accentPurple/50 rounded-xl shadow-purple-glow"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.03,
                    boxShadow: `0 12px 25px -8px ${skill.color.replace('0.15', '0.35').replace('0.1', '0.2')}`,
                    borderColor: skill.color.replace('0.15', '0.4').replace('0.1', '0.25')
                  }}
                  style={{
                    borderColor: skill.color.replace('0.15', '0.12').replace('0.1', '0.08'),
                    boxShadow: `0 4px 15px -10px ${skill.color.replace('0.15', '0.2').replace('0.1', '0.12')}`
                  }}
                  className="bg-glass/85 border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-pointer"
                >
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5"
                    style={{ 
                      backgroundColor: skill.color,
                      filter: `drop-shadow(0 0 4px ${skill.color.replace('0.15', '0.55').replace('0.1', '0.4')})`
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-white tracking-wide">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Indicator Dots below */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-accentPurple w-6 shadow-[0_0_8px_#8B5CF6]' 
                  : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
              aria-label={`Go to ${cat} stack`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
