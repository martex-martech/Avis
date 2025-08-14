import React from 'react';
import { Button } from "../components/ui/button.jsx";
import {
  Zap,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  CreditCard,
  FileText,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Download,
  Scan,
  Calculator,
  Package,
  DollarSign,
  TrendingUp,
  Globe,
  Settings,
  Lock,
  Phone,
  Target,
  Megaphone,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Navigation from "../components/shared/Navigation";
import Footer from "../components/shared/Footer";
import billingIcon from "../assets/billing-management.jpg";

import loanIcon from "../assets/loan-management.jpg";
import mobileDevIcon from "../assets/mobile-development.jpg";
import digitalMarketingIcon from "../assets/digital-marketing.jpg";
import websiteDevIcon from "../assets/web-development.jpg";

function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      <section className="relative w-full h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1600&q=80"
          alt="Office Desk"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Your Business,
            <span className="text-orange-400 block">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto">
            Avis is the all-in-one billing, and business
            automation platform for modern Indian businesses. Streamline
            operations, boost efficiency, and grow faster.
          </p>
          {/* <Button
            onClick={() => navigate('/coming-soon')}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Free App
          </Button> */}
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your business efficiently in one
              powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* First row: Billing and Loan cards */}
            <div className="bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10 rounded-2xl p-8 border border-[#26495f]/20 hover:shadow-xl transition-shadow h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#26495f] rounded-xl flex items-center justify-center mr-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Avis - Billing Management
                  </h3>
                  <p className="text-[#26495f]">
                    Professional invoicing & inventory control
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src={billingIcon}
                  alt="Billing Management"
                  className="w-full h-64 object-contain rounded-xl"
                  style={{ objectPosition: "center" }}
                />
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Scan className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    High-speed barcode scanning & item recognition
                  </span>
                </div>
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Real-time inventory tracking & stock alerts
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Flexible pricing & customer-specific rates
                  </span>
                </div>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    GST-ready professional invoices
                  </span>
                </div>
              </div>

              <Link to="/billing" className="mt-auto block">
                <Button className="w-full bg-[#26495f] hover:bg-[#26495f]/80 text-white">
                  Explore Billing Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-6">
              <div className="bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10 rounded-2xl p-8 border border-[#26495f]/20 hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full max-w-xl mx-auto">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-[#26495f] rounded-xl flex items-center justify-center mr-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Website Development
                    </h3>
                    <p className="text-[#26495f]">Create stunning websites</p>
                  </div>
                </div>
                <div className="mb-6">
                  <img
                    src={websiteDevIcon}
                    alt="Website Development"
                    className="w-full h-64 object-contain rounded-xl"
                    style={{ objectPosition: "center" }}
                  />
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-[#26495f] mr-3" />
                    <span className="text-gray-700">Create stunning websites</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-[#26495f] mr-3" />
                    <span className="text-gray-700">Responsive & modern design</span>
                  </div>
                  <div className="flex items-center">
                    <Lock className="h-5 w-5 text-[#26495f] mr-3" />
                    <span className="text-gray-700">Secure & SEO-friendly</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[#26495f] mr-3" />
                    <span className="text-gray-700">Cross-device compatibility</span>
                  </div>
                </div>
                <Link to="/website-development" className="mt-auto block">
                  <Button className="w-full bg-[#26495f] hover:bg-[#26495f]/80 text-white">
                    Explore Website Development
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            {/* Loan Management Card */}
            {/* <div className="bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10 rounded-2xl p-8 border border-[#26495f]/20 hover:shadow-xl transition-shadow h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#26495f] rounded-xl flex items-center justify-center mr-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Avis - Loan Management
                  </h3>
                  <p className="text-[#26495f]">
                    Complete loan processing & collection system
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <img
                  src={loanIcon}
                  alt="Loan Management"
                  className="w-full h-64 object-contain rounded-xl"
                  style={{ objectPosition: "center" }}
                />
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Advanced customer database & document management
                  </span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Real-time analytics & portfolio tracking
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Automated collection reminders & tracking
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Bank-grade security & compliance
                  </span>
                </div>
              </div>

              <Link to="/loan" className="mt-auto block">
                <Button className="w-full bg-[#26495f] hover:bg-[#26495f]/80 text-white">
                  Explore Loan Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div> */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Second row: Digital Marketing and Mobile Development cards */}
            <div className="bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10 rounded-2xl p-8 border border-[#26495f]/20 hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#26495f] rounded-xl flex items-center justify-center mr-4">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Digital Marketing
                  </h3>
                  <p className="text-[#26495f]">Amplify your online presence</p>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src={digitalMarketingIcon}
                  alt="Digital Marketing"
                  className="w-full h-64 object-contain rounded-xl"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Megaphone className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Amplify your online presence
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    SEO & social media marketing
                  </span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Increase traffic & conversions
                  </span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Targeted advertising campaigns
                  </span>
                </div>
              </div>
              <Link to="/digital-marketing" className="mt-auto block">
                <Button className="w-full bg-[#26495f] hover:bg-[#26495f]/80 text-white">
                  Explore Digital Marketing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10 rounded-2xl p-8 border border-[#26495f]/20 hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#26495f] rounded-xl flex items-center justify-center mr-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    App Development
                  </h3>
                  <p className="text-[#26495f]">Build powerful mobile apps</p>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src={mobileDevIcon}
                  alt="Mobile Development"
                  className="w-full h-64 object-contain rounded-xl"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Build powerful mobile apps
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    User-friendly interfaces
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    High performance & reliability
                  </span>
                </div>
                <div className="flex items-center">
                  <Settings className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">
                    Customizable features & integrations
                  </span>
                </div>
              </div>
              <Link to="/mobile-development" className="mt-auto block">
                <Button className="w-full bg-[#26495f] hover:bg-[#26495f]/80 text-white">
                  Explore App Development
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Third row: Website Development card */}
          {/* <div className="mt-6">
            <div className="bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10 rounded-2xl p-8 border border-[#26495f]/20 hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full max-w-xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#26495f] rounded-xl flex items-center justify-center mr-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Website Development
                  </h3>
                  <p className="text-[#26495f]">Create stunning websites</p>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src={websiteDevIcon}
                  alt="Website Development"
                  className="w-full h-64 object-contain rounded-xl"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">Create stunning websites</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">Responsive & modern design</span>
                </div>
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">Secure & SEO-friendly</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#26495f] mr-3" />
                  <span className="text-gray-700">Cross-device compatibility</span>
                </div>
              </div>
              <Link to="/website-development" className="mt-auto block">
                <Button className="w-full bg-[#26495f] hover:bg-[#26495f]/80 text-white">
                  Explore Website Development
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div> */}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end advantages across all our business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Billing Benefits */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#26495f] rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Billing</h3>
              <p className="text-gray-600 mb-3">
                Transform your financial operations with our automated billing system.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>GST-compliant invoicing with automatic tax calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time inventory tracking with low stock alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Barcode scanning for instant product lookup</span>
                </li>
              </ul>
            </div>

            {/* Loan Management Benefits */}
            {/* <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#26495f] rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Loan Management</h3>
              <p className="text-gray-600 mb-3">
                Streamline your lending operations with powerful collection tools.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated payment reminders and collection tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customer document management with secure storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Portfolio analytics with risk assessment</span>
                </li>
              </ul>
            </div> */}

            {/* Web Development Benefits */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#26495f] rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 mb-3">
                Professional websites that drive growth and customer engagement.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile-first responsive designs that work on all devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>SEO-optimized architecture for better search rankings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Fast-loading pages with optimized performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure hosting with regular maintenance</span>
                </li>
              </ul>
            </div>
            
            {/* Digital Growth Benefits */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#26495f] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Growth</h3>
              <p className="text-gray-600 mb-3">
                Amplify your online presence and customer reach.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>SEO-optimized website development for better visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Targeted digital marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile app development for customer engagement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;