import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative z-10 bg-transparent">
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-white text-xl font-mono font-semibold">
          <Link to="/" className="hover:text-cyan-300 transition-colors">
            ani Visuals
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm text-white font-mono">
          <Link
            to="/vision"
            className="hover:text-cyan-300 transition-colors"
          >
            OUR VISION
          </Link>
          <Link
            to="/technical"
            className="hover:text-cyan-300 transition-colors"
          >
            TECHNICAL
          </Link>
          <Link
            to="/integration"
            className="hover:text-cyan-300 transition-colors"
          >
            INTEGRATION
          </Link>
          <Link
            to="/poc"
            className="hover:text-cyan-300 transition-colors"
          >
            PROOF OF CONCEPT
          </Link>
        </div>

        <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200">
          OPEN DOCS
        </button>
      </nav>
    </header>
  );
}
