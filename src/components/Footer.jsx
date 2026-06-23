import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-8 border-t border-glass bg-glass/20 rounded-[20px] px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left logo brand */}
      <div className="text-lg font-bold text-white font-sans">
        Vedant<span className="text-accentPurple">.</span>
      </div>

      {/* Center Copyright */}
      <div className="text-xs text-grayText">
        &copy; {new Date().getFullYear()} Vedant. All Rights Reserved.
      </div>

      {/* Right Credits */}
      <div className="text-xs text-grayText">
        Designed &amp; Built with <span className="text-red-500">❤️</span> using <span className="text-accentPurple font-semibold">MERN Stack</span>
      </div>
    </footer>
  );
}
