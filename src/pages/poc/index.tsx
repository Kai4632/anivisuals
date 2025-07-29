export default function ProofOfConcept() {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-8 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* POC particles */}
        {[...Array(70)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-yellow-400/40 rounded-full animate-pulse"
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
        {/* POC Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mb-6 font-mono">
            PROOF OF CONCEPT
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* POC Content */}
        <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 backdrop-blur-xl border border-yellow-700/30 rounded-3xl p-12 shadow-2xl">
          <p className="text-2xl md:text-3xl text-white font-mono leading-relaxed font-medium">
            For the past 6 months, Ani Visuais has been posting AI-generated anime content on Twitter as a live proof of concept — and the results speak for themselves: rapid, organic growth, consistent engagement, and a thriving community forming around every post.
          </p>
        </div>
      </div>
    </div>
  );
}
  
  
