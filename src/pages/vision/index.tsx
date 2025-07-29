import { useNavigate } from "react-router-dom";

export default function Vision() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative flex items-center justify-center px-8 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Vision Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6 font-mono">
            OUR VISION
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Vision Statement */}
        <div className="space-y-12">
          {/* Main Vision */}
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl border border-blue-700/30 rounded-3xl p-12 shadow-2xl">
            <p className="text-2xl md:text-3xl text-white font-mono leading-relaxed font-medium">
              Ani Visuais exists to blur the line between automation and art — combining autonomous AI with cinematic anime visuals to build viral ecosystems, onboard the next wave of users, and make memecoins unforgettable.
            </p>
          </div>

          {/* Core Belief */}
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-700/30 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 font-mono">
              OUR BELIEF
            </h2>
            <p className="text-xl md:text-2xl text-white font-mono leading-relaxed">
              We believe media should feel alive, emotional, and self-sustaining — not managed.
            </p>
          </div>

          {/* Goal */}
          <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-xl border border-cyan-700/30 rounded-3xl p-10 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-purple-400 mb-4 font-mono">
              OUR GOAL
            </h2>
            <p className="text-3xl md:text-4xl font-black text-white font-mono">
              zero human input, infinite reach
            </p>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {/* Automation */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl border border-blue-700/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-3 font-mono">AUTOMATION</h3>
            <p className="text-gray-300 font-mono">Blurring the line between human creativity and AI autonomy</p>
          </div>

          {/* Art */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border border-purple-700/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-purple-400 mb-3 font-mono">ART</h3>
            <p className="text-gray-300 font-mono">Cinematic anime visuals that evoke emotion and connection</p>
          </div>

          {/* Ecosystem */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl border border-cyan-700/20 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-400 mb-3 font-mono">ECOSYSTEM</h3>
            <p className="text-gray-300 font-mono">Building viral ecosystems that onboard the next wave of users</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl border border-blue-700/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-300 mb-6 font-mono">
              Join us in creating the next generation of autonomous, emotional media
            </p>
            <button 
              onClick={() => navigate('/anime-generation')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 font-mono"
            >
              START TRANSFORMING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  
