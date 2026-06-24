import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function Github() {
  // Allow the user to type in their username in real-time. Defaults to 'Vk2610'
  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem('github-portfolio-username');
    return saved && saved !== 'octocat' ? saved : 'Vk2610';
  });

  const [inputVal, setInputVal] = useState(username);
  const [selectedYear, setSelectedYear] = useState('last');
  
  // Dynamic stats state
  const [stats, setStats] = useState({
    contributions: '1,250+',
    repos: '25+',
    stars: '350+',
    commits: '1,800+'
  });
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('github-portfolio-username', username);
  }, [username]);

  // Dynamic GitHub stats fetcher
  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      try {
        // 1. Fetch main user profile details (repos, followers)
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error('Failed to fetch profile');
        const userData = await userRes.json();

        // 2. Fetch repos to sum stargazers stars
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        let totalStars = 0;
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        }

        // 3. Fetch total contributions count from a public proxy
        let totalContributions = 0;
        try {
          const contribRes = await fetch(`https://github-contributions-api.deno.dev/${username}`);
          if (contribRes.ok) {
            const contribData = await contribRes.json();
            if (contribData.total) {
              if (typeof contribData.total === 'number') {
                totalContributions = contribData.total;
              } else if (contribData.total.lastYear !== undefined) {
                totalContributions = contribData.total.lastYear;
              } else {
                totalContributions = Object.values(contribData.total).reduce((sum, val) => sum + (Number(val) || 0), 0);
              }
            }
          }
        } catch (e) {
          console.warn('Proxy contributions fetch failed, using fallback estimation.', e);
        }

        // Update stats state dynamically
        setStats({
          contributions: totalContributions > 0 ? `${totalContributions.toLocaleString()}` : '1,250+',
          repos: `${userData.public_repos}`,
          stars: `${totalStars}`,
          commits: totalContributions > 0 
            ? `${Math.round(totalContributions * 0.82).toLocaleString()}` 
            : '1,800+'
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        // Graceful fallback to portfolio template defaults in case of API rate-limiting
        setStats({
          contributions: '1,250+',
          repos: '25+',
          stars: '350+',
          commits: '1,800+'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
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

  const githubStatsList = [
    { label: 'Total Contributions', value: stats.contributions },
    { label: 'Repositories', value: stats.repos },
    { label: 'Stars Earned', value: stats.stars },
    { label: 'Commits (Est.)', value: stats.commits }
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
              disabled={loading}
              className="px-3 py-1.5 rounded-lg bg-accentPurple text-white text-xs font-bold transition-all duration-300 hover:bg-accentViolet disabled:opacity-50"
            >
              {loading ? 'Syncing...' : 'Sync'}
            </button>
          </form>
        </div>

        {/* Year Selector Tabs */}
        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-2 mb-4">
          <span className="text-xs font-semibold text-grayText mr-1">Filter Year:</span>
          <div className="flex flex-wrap items-center gap-1 bg-black/40 border border-glass rounded-xl p-1">
            {['last', 2026, 2025, 2024, 2023].map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all duration-300 shrink-0 ${
                  selectedYear === y 
                    ? 'bg-accentPurple text-white shadow-purple-glow' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {y === 'last' ? 'Last Year' : y}
              </button>
            ))}
          </div>
        </div>

        {/* Real-time GitHub Calendar Grid Wrapper */}
        <div className="bg-black/35 border border-white/5 rounded-2xl p-4 md:p-6 mb-6 overflow-x-auto no-scrollbar flex justify-start md:justify-center items-center">
          <div className="min-w-[600px] text-white flex justify-center text-xs">
            <GitHubCalendar 
              username={username}
              year={selectedYear}
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
          {githubStatsList.map((stat, idx) => (
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
