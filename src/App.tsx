


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./pages/home/index"
import About from "./pages/about/index"
import Contact from "./pages/contact/index"
import AnimeGeneration from "./pages/anime-generation/index"
import Vision from "./pages/vision/index"

// App component
function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950">
        {/* Global Starry Background */}
        <div className="absolute inset-0">
          {/* Stars */}
          <div className="absolute inset-0">
            {[...Array(250)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>
        </div>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/technical" element={<About />} />
          <Route path="/integration" element={<About />} />
          <Route path="/poc" element={<About />} />
          <Route path="/anime-generation" element={<AnimeGeneration />} />
        </Routes>

        {/* Tiny Footer */}
        <footer className="relative z-10 py-2 px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px" 
              width="16" 
              height="16" 
              viewBox="0 0 48 48"
              className="text-gray-400"
            >
              <path 
                fill="currentColor"
                d="M18.542 30.532l15.956-11.776c.783-.576 1.902-.354 2.274.545 1.962 4.728 1.084 10.411-2.819 14.315-3.903 3.901-9.333 4.756-14.299 2.808l-5.423 2.511c7.778 5.315 17.224 4 23.125-1.903 4.682-4.679 6.131-11.058 4.775-16.812l.011.011c-1.966-8.452.482-11.829 5.501-18.735C47.759 1.332 47.88 1.166 48 1l-6.602 6.599V7.577l-22.86 22.958M15.248 33.392c-5.582-5.329-4.619-13.579.142-18.339 3.521-3.522 9.294-4.958 14.331-2.847l5.412-2.497c-.974-.704-2.224-1.46-3.659-1.994-6.478-2.666-14.238-1.34-19.505 3.922C6.904 16.701 5.31 24.488 8.045 31.133c2.044 4.965-1.307 8.48-4.682 12.023C2.164 44.411.967 45.67 0 47l15.241-13.608"
              />
            </svg>
            <p className="text-gray-400 text-xs font-mono">
              powered by GROK
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
