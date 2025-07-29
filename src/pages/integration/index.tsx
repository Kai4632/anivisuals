export default function Integration() {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-8 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Integration particles */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-orange-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Integration Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 mb-6 font-mono">
            INTEGRATION
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Integration Content */}
        <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 backdrop-blur-xl border border-orange-700/30 rounded-3xl p-12 shadow-2xl">
          <p className="text-2xl md:text-3xl text-white font-mono leading-relaxed font-medium">
            Ani Visuais integrates natively with Twitter for automated posting and engagement — see the GitHub and GitBook for technical integration details.
          </p>
        </div>
      </div>
    </div>
  );
}
  
  
