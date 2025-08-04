"use client";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image from anime-generation */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/687d3c65a05c0acd24ea99b3/687d412d5b273fec7fe5c197_Frame.png')",
        }}
      />
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main content container */}
      <div className="relative z-10 px-8 lg:px-16 py-12 max-w-7xl mx-auto min-h-screen flex flex-col">
        {/* Top description text */}
        <div className="mb-20">
          <p className="text-white text-lg font-mono leading-relaxed max-w-md">
            AI-agent automating anime visuals on
            <br />
            Solana powered by GROK.
          </p>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex items-start justify-between">
          {/* Left side content */}
          <div className="flex-1 max-w-2xl">
            {/* Main title with badges */}
            <div className="mb-32">
              <div className="relative flex flex-col items-start">
                {/* ani-Visuals logo image */}
                <div className="relative flex items-center">
                  <img
                    src="https://cdn.prod.website-files.com/687d3c65a05c0acd24ea99b3/687d455b7655d38a253e8cc4_Container.svg"
                    alt="ani-Visuals"
                    className="w-[600px] lg:w-[800px] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Token card */}
            <div className="bg-blue-900/40 backdrop-blur-xl border border-blue-700/30 rounded-2xl p-8 max-w-lg shadow-2xl -mt-32">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-4 font-mono">
                  $VISUAL TOKEN
                </h3>
                <p className="text-gray-200 text-base leading-relaxed mb-4 font-mono">
                  The GROK-powered token fueling anime visual
                  <br />
                  AI infrastructure.
                </p>
                <p className="text-gray-400 text-sm font-mono">
                  CA: J4A8QhNjdpjmoJZ28GDZw44Sb6rqtKDPuFnEL3Sibonk
                </p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Kai4632/anivisuals" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-3 text-sm font-mono shadow-lg"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  INSTALL BUILD
                </a>
                <a 
                  href="https://x.com/anivisuais" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-3 text-sm font-mono shadow-lg"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  OUR TWITTER
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Anime character */}
          <div className="flex-1 flex justify-end items-start relative -mt-48">
            <div className="relative">
              {/* Character image */}
              <div className="w-[650px] h-[850px] relative">
                <img
                  src="https://cdn.prod.website-files.com/687d3c65a05c0acd24ea99b3/687d410d825688e1b22e4159_image%201%20(1).png"
                  alt="Anime character"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              {/* Create Agent Button positioned over character */}
              <button
                onClick={() => navigate("/anime-generation")}
                className="absolute top-1/2 left-1/3 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-200 flex items-center gap-3 shadow-2xl text-sm font-mono z-10"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                CREATE
                <br />
                VISUAL
              </button>
            </div>
          </div>
        </div>

        {/* Documentation Link - Bottom Center */}
        <div className="flex justify-center mt-auto pb-8">
          <button className="text-white hover:text-cyan-300 transition-colors font-light flex items-center gap-3 text-sm font-mono border border-blue-600/50 px-8 py-4 rounded-full hover:border-cyan-500 bg-blue-900/20 backdrop-blur-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            READ THE DOCUMENTATION
          </button>
        </div>
      </div>

      {/* Mobile responsive layout */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-purple-950/95 flex flex-col items-center justify-center p-6 space-y-8 z-30">
        {/* Mobile description */}
        <p className="text-white text-center max-w-sm text-sm font-mono pt-8">
          AI-agent automating anime visuals on Solana powered by GROK.
        </p>

        {/* Mobile title */}
        <div className="text-center">
          <h1 className="text-4xl font-black font-mono">
            <div className="text-cyan-200 mb-2">ani-</div>
            <div className="text-blue-200">Visuals</div>
          </h1>
        </div>

        {/* Mobile character */}
        <div className="w-48 h-64 relative">
          <img
            src="https://cdn.prod.website-files.com/687d3c65a05c0acd24ea99b3/687d410d825688e1b22e4159_image%201%20(1).png"
            alt="Anime character"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Mobile create button */}
        <button
          onClick={() => navigate("/anime-generation")}
          className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-200 flex items-center gap-2 shadow-xl text-sm font-mono"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          CREATE VISUAL
        </button>

        {/* Mobile token card */}
        <div className="bg-blue-900/40 backdrop-blur-xl border border-blue-700/30 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
          <h3 className="text-xl font-black text-white mb-3 font-mono">
            $VISUAL TOKEN
          </h3>
          <p className="text-gray-200 text-sm mb-2 font-mono">
            The GROK-powered token fueling anime visual AI infrastructure.
          </p>
          <p className="text-gray-400 text-xs font-mono mb-4">
            CA: J4A8QhNjdpjmoJZ28GDZw44Sb6rqtKDPuFnEL3Sibonk
          </p>
          <div className="flex flex-col gap-3">
            <a 
              href="https://github.com/Kai4632/anivisuals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-2 text-sm font-mono shadow-lg"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              INSTALL BUILD
            </a>
            <a 
              href="https://x.com/anivisuais" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-bold transition-all duration-200 flex items-center justify-center gap-2 text-sm font-mono shadow-lg"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              OUR TWITTER
            </a>
          </div>
        </div>

        {/* Mobile documentation button */}
        <button className="text-white hover:text-cyan-300 transition-colors font-light flex items-center gap-2 text-xs font-mono border border-blue-600/50 px-4 py-2 rounded-full hover:border-cyan-500 bg-blue-900/20 backdrop-blur-sm">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          READ THE DOCUMENTATION
        </button>
      </div>
    </div>
  );
}
