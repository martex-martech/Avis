import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import avisLogo from '../../assets/avis-logo.png'

function Navigation() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimeout) clearTimeout(closeTimeout)
    }
  }, [closeTimeout])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }, [location.pathname])

  const toggleMobileServices = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMobileServicesOpen(!isMobileServicesOpen)
  }

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm border-b'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={avisLogo} alt="Avis" className="h-8 w-auto transition-transform hover:scale-105" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50 focus:outline-none transition"
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-blue-800 font-medium transition-colors ${location.pathname === '/' ? 'text-blue-800' : ''}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeout) clearTimeout(closeTimeout)
                setIsProductsOpen(true)
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setIsProductsOpen(false), 200)
                setCloseTimeout(timeout)
              }}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-800 font-medium transition-colors">
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div className={`absolute top-full left-0 mt-2 w-52 rounded-md shadow-lg border bg-white z-50 transition-all duration-300 transform ${isProductsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                <div className="py-2">
                  {['/billing', '/loan', '/digital-marketing','/mobile-development','/website-development'].map((path, idx) => (
                    <Link
                      key={idx}
                      to={path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-800 transition-all"
                    >
                      {path === '/billing' ? 'Billing Management' : path === '/loan' ? 'Loan Management' : path === '/digital-marketing' ? 'Digital Marketing' : path === '/mobile-development' ? 'App Development' : 'Website Development' }
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`text-gray-700 hover:text-blue-800 font-medium transition-colors ${location.pathname === '/about' ? 'text-blue-800' : ''}`}
            >
              About Us
            </Link>

            <Link
              to="/about#contact"
              className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-inner transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-2 animate-fade-in">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                location.pathname === '/' ? 'bg-blue-50 text-blue-800' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-800'
              }`}
            >
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={toggleMobileServices}
                className="flex w-full justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-800 transition"
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="ml-4 border-l border-gray-200 pl-3 space-y-1 transition-all">
                  <Link to="/billing" className="block py-1 text-gray-700 hover:text-blue-800 text-base">
                    Billing Management
                  </Link>
                  <Link to="/loan" className="block py-1 text-gray-700 hover:text-blue-800 text-base">
                    Loan Management
                  </Link>
                  <Link to="/digital-marketing" className="block py-1 text-gray-700 hover:text-blue-800 text-base">
                    Digital Marketing
                  </Link>
                  <Link to="/mobile-development" className="block py-1 text-gray-700 hover:text-blue-800 text-base">
                    App Development
                  </Link>
                  <Link to="/website-development" className="block py-1 text-gray-700 hover:text-blue-800 text-base">
                    Website Development
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                location.pathname === '/about' ? 'bg-blue-50 text-blue-800' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-800'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/about#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
