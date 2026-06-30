import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import rayatKutumbImg from '../assets/rayat-kutumb.png';
import miroImg from '../assets/miro.png';
import cattleBreedImg from '../assets/cattle-breed.png';
import cngImg from '../assets/project-cng.png';

const projects = [
  {
    id: 1,
    name: 'Rayat Kutumb Kalyan Yojana',
    desc: 'Welfare management platform with role-based authentication, claims, payments and PDF generation.',
    image: rayatKutumbImg,
    tags: ['React', 'Node.js', 'MySQL', 'Express.js', 'Cloudinary'],
    github: 'https://github.com/Vk2610/rayat-kutumb-kalyan-frontend.git',
    demo: 'https://rayat-kutumb-kalyan-frontend-git-main-vk2610s-projects.vercel.app/'
  },
  {
    id: 2,
    name: 'Miro Clone',
    desc: 'A real-time collaborative whiteboard platform featuring shapes, drawing tools, sticky notes, and multiplayer synchronization.',
    image: miroImg,
    tags: ['Next.js', 'Liveblocks', 'Convex', 'Clerk'],
    github: 'https://github.com/Vk2610/Miro.git',
    demo: 'https://miro-nine.vercel.app/'
  },
  {
    id: 3,
    name: 'Cattle Breed Detector',
    desc: 'Python-based computer vision application utilizing CNNs and machine learning algorithms to identify and classify indigenous Indian cattle breeds.',
    image: cattleBreedImg,
    tags: ['Python', 'Computer Vision', 'PyTorch', 'Machine Learning'],
    github: 'https://github.com/Vk2610/Cattle-Breed-Detector.git',
    demo: ''
  },
  {
    id: 4,
    name: 'CNG Slot Booking System',
    desc: 'Slot booking system with real-time availability, secure payments and admin dashboard.',
    image: cngImg,
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.',
    demo: 'https://demo.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-12 scroll-mt-20">
      <div className="bg-glass border border-glass rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-2xl overflow-hidden relative">
        
        {/* Header containing Title & Prev/Next & View All */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-accentPurple mb-2 block">
              PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
              Featured Projects
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#all-projects" 
              className="text-xs font-semibold text-grayText hover:text-white flex items-center gap-1.5 transition-colors duration-200 border border-white/10 hover:border-white/20 bg-white/5 px-4 py-2 rounded-full"
            >
              <span>View All Projects</span>
              <HiOutlineExternalLink size={14} />
            </a>

            {/* Custom Navigation Controls */}
            <div className="flex items-center gap-2">
              <button className="project-prev-btn w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-accentPurple/50 hover:bg-accentPurple/20 text-grayText hover:text-white flex items-center justify-center transition-all duration-300">
                <FaChevronLeft size={12} />
              </button>
              <button className="project-next-btn w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-accentPurple/50 hover:bg-accentPurple/20 text-grayText hover:text-white flex items-center justify-center transition-all duration-300">
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider Container */}
        <div className="w-full relative px-1">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.project-prev-btn',
              nextEl: '.project-next-btn',
            }}
            pagination={{ 
              clickable: true, 
              el: '.project-pagination-dots',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="group bg-glass/85 border border-glass rounded-[20px] overflow-hidden flex flex-col h-full hover:border-accentPurple/30 transition-all duration-300 hover:shadow-purple-glow">
                  
                  {/* Image Container with Hover zoom */}
                  <div className="w-full aspect-[2.2/1] overflow-hidden bg-black/40 border-b border-glass relative">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                    />
                    {/* Glow cover overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50 pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <h3 className="text-2xl font-bold text-white mb-2 font-sans group-hover:text-accentPurple transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-base text-grayText leading-relaxed mb-6 flex-grow">
                      {project.desc}
                    </p>

                    {/* Footer Row (Tags + Buttons) */}
                    <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-semibold text-grayText"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Code/Demo Action Links */}
                      <div className="flex items-center gap-2">
                        {project.github && project.github !== 'https://github.' && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-grayText hover:text-white flex items-center justify-center hover:bg-accentPurple/10 hover:border-accentPurple/30 transition-all duration-300"
                            title="View Code on GitHub"
                          >
                            <FaGithub size={15} />
                          </a>
                        )}
                        {project.demo && project.demo !== 'https://demo.' && (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-grayText hover:text-white flex items-center justify-center hover:bg-accentPurple/10 hover:border-accentPurple/30 transition-all duration-300"
                            title="Live Demo"
                          >
                            <HiOutlineExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Indicator Dots (placed under the slider) */}
        <div className="project-pagination-dots flex items-center justify-center gap-1.5 mt-2" />

      </div>
    </section>
  );
}
