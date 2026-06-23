import React, { useMemo } from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

export default function Github() {
  // Generate pseudo-random realistic looking contribution levels (0 to 4) for 7 rows and 36 columns
  const gridData = useMemo(() => {
    const data = [];
    for (let r = 0; r < 7; r++) {
      const row = [];
      for (let c = 0; c < 38; c++) {
        // Create realistic patterns (high in mid-week, lower on weekends, occasional streaks)
        let level = 0;
        const rand = Math.random();
        
        if (r === 0 || r === 6) { // Weekends
          if (rand > 0.85) level = 2;
          else if (rand > 0.7) level = 1;
        } else { // Weekdays
          if (rand > 0.9) level = 4;
          else if (rand > 0.7) level = 3;
          else if (rand > 0.45) level = 2;
          else if (rand > 0.2) level = 1;
        }
        
        // Add some "streak/holiday" gaps
        if (c > 14 && c < 17 && r > 2) level = 0;
        if (c > 26 && c < 29) level = Math.max(0, level - 2);

        row.push(level);
      }
      data.push(row);
    }
    return data;
  }, []);

  const getCellColor = (level) => {
    switch (level) {
      case 0: return 'bg-white/[0.03] border border-white/[0.01]';
      case 1: return 'bg-accentPurple/20 border border-accentPurple/10';
      case 2: return 'bg-accentPurple/45 border border-accentPurple/20';
      case 3: return 'bg-accentPurple/70 border border-accentPurple/30';
      case 4: return 'bg-accentViolet border border-accentViolet/50 shadow-[0_0_8px_rgba(168,85,247,0.4)]';
      default: return 'bg-white/[0.03]';
    }
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
        
        {/* Header */}
        <div className="flex flex-col text-left mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-accentPurple mb-1.5 block">
            GITHUB ACTIVITY
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
            Contribution Graph
          </h2>
        </div>

        {/* Heatmap Grid Wrapper */}
        <div className="bg-black/35 border border-white/5 rounded-2xl p-5 mb-6 overflow-x-auto no-scrollbar">
          <div className="min-w-[560px]">
            
            {/* Months Header */}
            <div className="flex pl-8 mb-2 justify-between pr-4">
              {months.map((month) => (
                <span key={month} className="text-[10px] font-semibold text-grayText w-6 text-center select-none">
                  {month}
                </span>
              ))}
            </div>

            {/* Grid Layout (7 Rows) */}
            <div className="flex gap-2">
              {/* Left Day labels */}
              <div className="flex flex-col justify-between text-[10px] font-semibold text-grayText py-0.5 w-6 select-none">
                {days.map((day, idx) => (
                  <span key={idx} className="h-[10px] leading-[10px]">
                    {day}
                  </span>
                ))}
              </div>

              {/* Squares Heatmap */}
              <div className="grid grid-rows-7 grid-flow-col gap-[4px] flex-grow">
                {gridData.map((row, rIdx) => 
                  row.map((level, cIdx) => (
                    <div
                      key={`${rIdx}-${cIdx}`}
                      className={`w-[10px] h-[10px] rounded-[2px] transition-all duration-300 hover:scale-125 ${getCellColor(level)}`}
                      title={`${level > 0 ? level * 3 + ' contributions' : 'No contributions'}`}
                    />
                  ))
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {githubStats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-black/20 border border-glass rounded-xl p-4 flex flex-col items-start hover:border-accentPurple/20 transition-all duration-350"
            >
              <span className="text-[11px] font-bold text-grayText uppercase tracking-wider mb-2">
                {stat.label}
              </span>
              <span className="text-xl md:text-2xl font-black text-white leading-none">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
