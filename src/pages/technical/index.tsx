import { useNavigate } from "react-router-dom";

export default function Technical() {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-8 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit-like particles */}
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-green-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Technical Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-6 font-mono">
            TECHNICAL
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Technical Content */}
        <div className="space-y-12">
          {/* Main Technical Statement */}
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl border border-blue-700/30 rounded-3xl p-12 shadow-2xl">
            <p className="text-2xl md:text-3xl text-white font-mono leading-relaxed font-medium">
              Ani Visuais is powered by Grok and built to work seamlessly with Twitter — enabling fully autonomous agents to generate, post, and optimize anime-style content at scale.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-700/30 rounded-3xl p-12 shadow-2xl">
            <p className="text-2xl md:text-3xl text-white font-mono leading-relaxed font-medium">
              Our vision is a self-sustaining system where AI handles engagement, growth, and funneling — turning every tweet into a cinematic viral loop, without human intervention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  
