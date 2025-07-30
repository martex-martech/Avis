import { Button } from '@/components/ui/button';
import {
  Smartphone, Users, Calculator, BarChart3, Shield, Clock, CreditCard,
  FileText, Phone, Download, UserPlus, Search, TrendingUp, Camera,
  CheckCircle, Star, Award, Target, Zap, Globe, Lock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import loanIcon from '../assets/loan-management.jpg';

function LoanPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/20 via-transparent to-[#26495f]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Avis Loan
                <span className="text-orange-400 block">Complete Loan Management</span>
              </h1>
              <p className="text-xl text-white mb-8">
                The most powerful mobile loan management platform for modern businesses.
                Streamline collections, track customers, and maximize your loan portfolio performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate('/coming-soon')}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <img
                  src={loanIcon}
                  alt="Loan Management"
                  className="w-80 h-80 mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple setup process designed for immediate productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Download & Install</h3>
              <p className="text-gray-600">
                Available on both iOS and Android platforms with instant installation
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Registration</h3>
              <p className="text-gray-600">
                Secure account creation with email verification and instant access
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Managing</h3>
              <p className="text-gray-600">
                Begin processing loans and collections immediately with guided setup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#26495f]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Loan Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage loans efficiently and grow your business
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Smart Loan Portfolio</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Create and manage multiple loan products with flexible terms and automated calculations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Daily, Weekly, and Monthly loan cycles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Customizable interest rates and terms</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Automated payment calculations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Multi-product portfolio management</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Advanced Customer Hub</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive customer database with secure document management and tracking.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Unique customer identification system</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Secure document storage (Aadhaar, PAN, etc.)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Built-in camera for document capture</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Advanced search and filtering</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Smart Collections</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Streamlined collection process with real-time tracking and automated reminders.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Daily collection tracking</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Partial payment support</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Overdue loan alerts</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <BarChart3 className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Business Intelligence</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive analytics and reporting for data-driven decision making.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 text-[#26495f] mr-2" />
                  <span>Real-time financial overview</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 text-[#26495f] mr-2" />
                  <span>Collection performance metrics</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 text-[#26495f] mr-2" />
                  <span>Portfolio health indicators</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Enterprise Security</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Bank-grade security with encrypted data storage and compliance features.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Lock className="h-4 w-4 text-red-500 mr-2" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Lock className="h-4 w-4 text-red-500 mr-2" />
                  <span>Secure document storage</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Lock className="h-4 w-4 text-red-500 mr-2" />
                  <span>Audit trail compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="py-16 bg-gradient-to-br from-[#26495f]/10 to-[#26495f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Analytics & Reporting
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Make informed decisions with comprehensive business intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <TrendingUp className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Portfolio Performance</h3>
              <p className="text-[#26495f] text-sm">
                Track collection rates, overdue amounts, and portfolio health in real-time
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <BarChart3 className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Financial Dashboard</h3>
              <p className="text-[#26495f] text-sm">
                Complete overview of collections, pending amounts, and profit margins
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Clock className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Efficiency Metrics</h3>
              <p className="text-[#26495f] text-sm">
                Monitor collection efficiency and identify optimization opportunities
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <FileText className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Custom Reports</h3>
              <p className="text-[#26495f] text-sm">
                Generate detailed reports for compliance and business analysis
              </p>
            </div>
          </div>
          <div className="mt-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#26495f]/30">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:w-1/2 text-left">
                  <h3 className="text-2xl font-bold text-[#26495f] mb-4">Real-Time Business Intelligence</h3>
                  <ul className="space-y-2 text-[#26495f]">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Live portfolio valuation and performance tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Automated risk assessment and early warning systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Customer behavior analysis and segmentation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span>Predictive analytics for collection optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-[#26495f] rounded-xl p-6">
                    <div className="text-2xl font-bold text-white mb-1">24/7</div>
                    <div className="text-xs text-white">Real-time Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transform Your Loan Management Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the revolution in loan management technology and maximize your business potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/coming-soon')}
              size="lg"
              className="bg-[#26495f] hover:bg-[#26495f]/80 text-white px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free App
            </Button>

          </div>
          <div className="mt-6 text-gray-600">
            <Phone className="h-5 w-5 inline mr-2" />
            <span>Need assistance? Call +91 97876 78785</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LoanPage;