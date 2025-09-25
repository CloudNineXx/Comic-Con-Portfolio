import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollReveal } from "./ScrollReveal";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Tech Stack",
      icon: "⚡",
      color: "from-blue-600 to-purple-700",
      skills: [
        { name: "React JS", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "HTML CSS JS", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "GSAP", icon: "🎬" },
        { name: "MySQL", icon: "🗄️" },
        { name: "Application Programming Interfaces (API) integration", icon: "🔗" }
      ]
    },
    {
      title: "Digital Content Creation",
      icon: "🎬",
      color: "from-red-600 to-pink-700",
      skills: [
        { name: "YouTube Content Strategy", icon: "📺" },
        { name: "Video Production & Editing", icon: "🎥" },
        { name: "CapCut", icon: "✂️" },
        { name: "Shotcut (video editing app)", icon: "🎞️" },
        { name: "YouTube and Google Ads", icon: "📢" },
        { name: "Search Engine Optimization (SEO)", icon: "🔍" }
      ]
    },
    {
      title: "Frameworks and Methodologies",
      icon: "🧠",
      color: "from-emerald-600 to-teal-700",
      skills: [
        { name: "Design Thinking", icon: "💡" },
        { name: "Product Lifecycle", icon: "🔄" },
        { name: "Six Sigma", icon: "📊" },
        { name: "SCAMPER", icon: "🎯" },
        { name: "6 Thinking Hats", icon: "🎩" },
        { name: "TRIZ Level 1 Practitioner", icon: "🔬" },
        { name: "TRIZ Level 2 Practitioner", icon: "🎓" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-8 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Comic Con Hero Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3C!-- Hero mask shapes --%3E%3Cpath d='M80 20 L100 40 L120 20 L140 40 L120 60 L140 80 L120 100 L140 120 L120 140 L100 120 L80 140 L60 120 L40 140 L20 120 L40 100 L20 80 L40 60 L20 40 L40 20 L60 40 L80 20 Z' fill='%23ffffff' opacity='0.15'/%3E%3C!-- Lightning bolts --%3E%3Cpath d='M40 10 L50 30 L45 30 L55 50 L40 40 L45 40 L35 20 Z' fill='%23fbbf24' opacity='0.4'/%3E%3Cpath d='M120 110 L130 130 L125 130 L135 150 L120 140 L125 140 L115 120 Z' fill='%23fbbf24' opacity='0.4'/%3E%3C!-- Comic burst shapes --%3E%3Cpath d='M30 80 L35 70 L40 80 L50 75 L40 85 L50 90 L40 95 L35 85 L25 90 L30 80 Z' fill='%23ffffff' opacity='0.3'/%3E%3Cpath d='M130 40 L135 30 L140 40 L150 35 L140 45 L150 50 L140 55 L135 45 L125 50 L130 40 Z' fill='%23ffffff' opacity='0.3'/%3E%3C!-- Hero emblems --%3E%3Ccircle cx='80' cy='80' r='12' fill='none' stroke='%23ffffff' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M80 72 L85 77 L95 67 L90 82 L105 77 L85 82 L90 97 L80 87 L70 97 L75 82 L55 77 L70 82 L65 67 L75 77 Z' fill='%23fbbf24' opacity='0.5'/%3E%3C!-- Small power symbols --%3E%3Ctext x='25' y='35' font-family='Arial Black' font-size='14' fill='%23ff4444' opacity='0.6'%3EPOW!%3C/text%3E%3Ctext x='110' y='125' font-family='Arial Black' font-size='12' fill='%23ffff00' opacity='0.6'%3EZAP!%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px'
        }}></div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-lg opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-16 h-4 bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-500 transform rotate-45 opacity-30 animate-bounce"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="scale" delay={100}>
          <div className="text-center mb-6">
            {/* New Comic Book Speech Bubble Heading */}
            <div className="relative inline-block mb-8">
              <div className="bg-white border-8 border-black rounded-3xl px-12 py-6 transform rotate-2 shadow-2xl relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-white"></div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-t-[28px] border-l-transparent border-r-transparent border-t-black"></div>
                </div>
                
                {/* Main heading text */}
                <h2 className="typography-heading-xl text-red-600 relative z-10 text-comic-shadow transform -skew-x-2">
                  SKILLS
                </h2>
                
                {/* Comic book action lines */}
                <div className="absolute -top-4 -left-4 w-16 h-1 bg-emerald-400 transform -rotate-45 animate-pulse"></div>
                <div className="absolute -top-2 -left-6 w-12 h-1 bg-indigo-500 transform -rotate-45 animate-pulse delay-150"></div>
                <div className="absolute -bottom-4 -right-4 w-14 h-1 bg-rose-500 transform rotate-45 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid - Enhanced Comic Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 200}>
              <Card className="border-4 border-black shadow-2xl bg-white overflow-hidden rounded-2xl hover:scale-105 hover:rotate-1 transition-all duration-300 h-full relative group">
                
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white py-2 relative overflow-hidden`}>
                  {/* Enhanced background pattern with halftone effect */}
                  <div className="absolute inset-0 opacity-25">
                    <div className="w-full h-full" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M40 10 L50 30 L70 25 L55 45 L75 55 L55 65 L70 85 L50 80 L40 100 L30 80 L10 85 L25 65 L5 55 L25 45 L10 25 L30 30 Z'/%3E%3C/g%3E%3Ccircle cx='20' cy='20' r='2' fill='%23ffffff' opacity='0.6'/%3E%3Ccircle cx='60' cy='20' r='2' fill='%23ffffff' opacity='0.6'/%3E%3Ccircle cx='20' cy='60' r='2' fill='%23ffffff' opacity='0.6'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23ffffff' opacity='0.6'/%3E%3C/svg%3E")`,
                      backgroundSize: '80px 80px'
                    }}></div>
                  </div>

                  {/* Comic-style zigzag border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 opacity-80"></div>

                  <div className="text-center relative z-10">
                    <div className="text-2xl mb-1 filter drop-shadow-lg transform hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <CardTitle className="typography-heading-sm text-comic-shadow transform hover:skew-x-2 transition-transform duration-300">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="p-2 space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group flex items-center gap-2 p-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-2 border-gray-200 hover:border-yellow-400 hover:border-black transition-all duration-300 hover:scale-105 shadow-md opacity-0 hover:shadow-lg"
                      style={{
                        animationDelay: `${400 + (index * 200) + (skillIndex * 100)}ms`,
                        animation: 'fadeInLeft 0.6s ease-out forwards'
                      }}
                    >
                      <div className="text-lg flex-shrink-0 filter drop-shadow-sm">{skill.icon}</div>
                      <p className="typography-body-sm text-gray-800 leading-tight font-medium">{skill.name}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  );
}