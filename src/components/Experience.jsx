import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

const journey = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Vieh Group',
    duration: 'Jan 2025 - May 2025',
    bullets: [
      'Developed responsive frontend components using React and Tailwind CSS.',
      'Integrated REST APIs and third-party services.',
      'Worked with MySQL and MongoDB databases.',
      'Collaborated with the team to deliver scalable web applications.',
      'Fixed bugs and optimized application performance.'
    ]
  },
  {
    role: 'Freelance Projects',
    company: 'Self Employed',
    duration: '2023 - Present',
    bullets: [
      'Built multiple full stack web applications for clients.',
      'Implemented authentication, payment gateways and dashboards.',
      'Delivered clean, scalable and user-friendly solutions.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-12 scroll-mt-20">
      <div className="bg-glass border border-glass rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-2xl overflow-hidden relative">
        {/* Title */}
        <div className="flex flex-col text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-accentPurple mb-2 block">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
            My Journey
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/5 pl-8 md:pl-10 ml-4 md:ml-6 space-y-10 text-left">
          
          {/* Vertical Glowing Line overlay */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-accentPurple via-accentViolet/50 to-transparent timeline-line" />

          {journey.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Icon Badge */}
              <div className="absolute -left-[53px] md:-left-[57px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-accentPurple to-accentViolet border-4 border-darkBg flex items-center justify-center text-white shadow-purple-glow z-10">
                <FiBriefcase size={14} />
              </div>

              {/* Glassmorphic timeline Card */}
              <div className="bg-glass/80 border border-glass rounded-2xl p-6 md:p-8 hover-lift duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left Column: Role Details */}
                  <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-white/5 pb-4 md:pb-0 md:pr-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 font-sans">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-accentPurple mb-1">
                      {item.company}
                    </p>
                    <span className="inline-block text-xs font-semibold text-grayText bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  {/* Right Column: Achievements Bullets */}
                  <div className="md:col-span-7 md:pl-2">
                    <ul className="space-y-3">
                      {item.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-sm md:text-base text-grayText leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accentPurple shrink-0 shadow-[0_0_6px_#8B5CF6]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
