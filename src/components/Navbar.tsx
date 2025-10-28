import { Link } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-primary-100 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-primary-900 to-teal-600 p-2 rounded-lg group-hover:shadow-glow transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-900 to-teal-600 bg-clip-text text-transparent">
              CloudChain Pay
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/features"
              className="text-gray-700 hover:text-primary-900 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-primary-900 transition-colors font-medium"
            >
              Pricing
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsConnectOpen(true)}
              onMouseLeave={() => setIsConnectOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-primary-900 transition-colors font-medium">
                Connect
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isConnectOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-glow border border-primary-100 py-2">
                  <Link
                    to="/docs/api"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                  >
                    <div className="font-medium">API Documentation</div>
                    <div className="text-xs text-gray-500">Technical integration guides</div>
                  </Link>
                  <Link
                    to="/integrations"
                    className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
                  >
                    <div className="font-medium">Integration Solution</div>
                    <div className="text-xs text-gray-500">Platform plugins & tools</div>
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/docs"
              className="text-gray-700 hover:text-primary-900 transition-colors font-medium"
            >
              Docs
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary-900 transition-colors font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/app/signin"
              className="text-primary-900 hover:text-primary-700 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              to="/app/signup"
              className="bg-gradient-to-r from-primary-900 to-teal-700 text-white px-6 py-2 rounded-lg font-medium hover:shadow-glow transition-all duration-300"
            >
              Signup
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-primary-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/features"
              className="block text-gray-700 hover:text-primary-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block text-gray-700 hover:text-primary-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/docs/api"
              className="block text-gray-700 hover:text-primary-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              API Documentation
            </Link>
            <Link
              to="/integrations"
              className="block text-gray-700 hover:text-primary-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Integration Solution
            </Link>
            <Link
              to="/docs"
              className="block text-gray-700 hover:text-primary-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-primary-900 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/app/signin"
              className="block text-primary-900 hover:text-primary-700 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/app/signup"
              className="block bg-gradient-to-r from-primary-900 to-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-glow transition-all duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
