import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import avisLogo from '../../assets/avis-logo.png'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={avisLogo} 
                alt="Avis" 
                className="h-8 w-auto mr-3 bg-white rounded p-1"
              />
              <span className="text-xl font-semibold">Avis</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Indian businesses with innovative technology solutions for billing, loans, and digital growth.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/billing" className="hover:text-blue-400 transition-colors">Billing Management</Link>
              </li>
              <li>
                <Link to="/loan" className="hover:text-blue-400 transition-colors">Loan Management</Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="hover:text-blue-400 transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>+91 97876 78785</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>avis4u.in@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>379/7, Goundachi Puthur(Po), Dharapuram - 638656</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        {/* Uncomment if needed */}
        {/* <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Avis Enterprises. All rights reserved.
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
