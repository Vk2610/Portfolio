import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function Github() {
  // Allow the user to type in their username in real-time. Defaults to a placeholder 'octocat'
  const [username, setUsername] = useState(() => {
    return localStorage.getItem('github-portfolio-username') || 'Vk2610';
  });

  const [inputVal, setInputVal] = useState(username);

  useEffect(() => {
    localStorage.setItem('github-portfolio-username', username);
  }, [username]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setUsername(inputVal.trim());
    }
  };

  const purpleTheme = {
    light: [
      'rgba(255, 255, 255, 0.03)',
      'rgba(139, 92, 246, 0.25)',
      'rgba(139, 92, 246, 0.55)',
      'rgba(168, 85, 247, 0.8)',
      '#A855F7'
    ],
    dark: [
      'rgba(255, 255, 255, 0.03)',
      'rgba(139, 92, 246, 0.25)',
      'rgba(139, 92, 246, 0.55)',
      'rgba(168, 85, 247, 0.8)',
      '#A855F7'
    ]
  };

  const githubStats = [
    { label: 'Total Contributions', value: '1,250+' },
    { label: 'Repositories', value: '25+' },
    { label: 'Stars Earned', value: '350+' },
    { label: 'Commits', value: '1,800+' }
  ];

  return (
    <section id="github" className="relative w-full py-6 scroll-mt-20">
      <div className="bg-glass border border-glass rounded-[24px] p-6 md:p-8 shadow-2xl overflow-hidden text-left">
        
        {/* Header containing title and interactive input */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold uppercase tracking-wider text-accentPurple mb-1.5 block">
              GITHUB ACTIVITY
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
              Contribution Graph
            </h2>
          </div>

          {/* Interactive Username Form */}
          <form onSubmit={handleUpdate} className="flex items-center gap-2 bg-black/40 border border-glass rounded-xl p-1.5 max-w-xs w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="bg-transparent border-0 px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-0 w-full sm:w-40 font-medium"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-accentPurple text-white text-xs font-bold transition-all duration-300 hover:bg-accentViolet"
            >
              Sync
            </button>
          </form>
        </div>

        {/* Real-time GitHub Calendar Grid Wrapper */}
        <div className="bg-black/35 border border-white/5 rounded-2xl p-6 mb-6 overflow-x-auto no-scrollbar flex justify-center items-center">
          <div className="min-w-[600px] text-white flex justify-center text-xs">
            <GitHubCalendar 
              username={username}
              theme={purpleTheme}
              colorScheme="dark"
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {githubStats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-black/20 border border-glass rounded-xl p-4 flex flex-col items-start hover:border-accentPurple/20 transition-all duration-350"
            >
              <span className="text-xs font-bold text-grayText uppercase tracking-wider mb-2">
                {stat.label}
              </span>
              <span className="text-2xl md:text-3xl font-black text-white leading-none">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
