import { Button } from '@/components/ui/button.jsx'
import { 
  ShoppingCart, Scan, Calculator, BarChart3, Lock, CreditCard, Settings, 
  Zap, Shield, FileText, Phone, Monitor, Package, DollarSign, 
  Clock, Users, CheckCircle, TrendingUp, Star, Award
} from 'lucide-react'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'
import billingIcon from '../assets/billing-management.jpg'

function BillingPage() {
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
                Avis Billing
                <span className="text-orange-400 block">Management System</span>
              </h1>
              
              <p className="text-xl text-white mb-8">
                Transform your business operations with our intelligent billing platform. 
                From barcode scanning to automated collections, streamline every aspect of your billing process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                >
                  Start Free Trial
                </Button>
                
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <img 
                  src={billingIcon} 
                  alt="Billing Management" 
                  className="w-80 h-80 mx-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Billing System?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern businesses that demand efficiency, accuracy, and scalability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#26495f]/5 to-[#26495f]/10 rounded-xl">
              <div className="w-16 h-16 bg-[#26495f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Process transactions in seconds with our optimized interface and smart automation</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50  to-[#26495f]/10 rounded-xl">
              <div className="w-16 h-16  bg-[#26495f] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security with real-time data backup and fraud protection</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-[#26495f]/10 rounded-xl">
              <div className="w-16 h-16  bg-[#26495f] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Analytics</h3>
              <p className="text-gray-600">Get actionable insights with comprehensive reporting and business intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-[#26495f]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Billing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your billing operations efficiently and professionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Smart Item Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Monitor className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Smart Item Display</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Flexible display options tailored for different business types - from retail stores to restaurants.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Multiple layout styles (List, Grid, Restaurant)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Customizable columns and categories</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Image support for visual catalogs</span>
                </div>
              </div>
            </div>

            {/* Advanced Scanning */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Scan className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Barcode Scanning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                High-speed barcode scanning with intelligent item recognition and auto-completion.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Adjustable scanning speed settings</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Alpha-numeric barcode support</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Auto-fill item details and pricing</span>
                </div>
              </div>
            </div>

            {/* Quick Billing */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Calculator className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Lightning-Fast Billing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Streamlined billing interface designed for high-volume retail environments.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Calculator-style quick entry</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Smart defaults and auto-calculations</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>One-click save and next bill</span>
                </div>
              </div>
            </div>

            {/* Inventory Control */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Real-Time Inventory</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Live inventory tracking with automatic stock alerts and intelligent filtering.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Negative stock prevention</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Real-time stock level display</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Auto-hide out-of-stock items</span>
                </div>
              </div>
            </div>

            {/* Price Management */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Flexible Pricing Control</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced pricing controls with customer-specific rates and security locks.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Price lock security features</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Multiple pricing tiers (MRP, Wholesale)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Customer-specific pricing rules</span>
                </div>
              </div>
            </div>

            {/* Payment Processing */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <CreditCard className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Smart Payment Processing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive payment handling with multiple methods and automatic calculations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Multiple payment methods (Cash, UPI, Card)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Automatic service charge calculation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Outstanding balance tracking</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 bg-gradient-to-br from-[#26495f]/10 to-[#26495f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Business Intelligence
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Powerful features that give you the competitive edge
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Zap className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Instant Search</h3>
              <p className="text-[#26495f] text-sm">
                Lightning-fast product search with smart abbreviation matching
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Settings className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Custom Interface</h3>
              <p className="text-[#26495f] text-sm">
                Adapt the interface to match your specific business workflow
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Security Controls</h3>
              <p className="text-[#26495f] text-sm">
                Role-based access controls and audit trails for compliance
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <BarChart3 className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Smart Analytics</h3>
              <p className="text-[#26495f] text-sm">
                Real-time business insights and performance metrics
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Revolutionize Your Billing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free trial today and experience the difference intelligent billing can make
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#26495f] hover:bg-[#26495f]/80 text-white px-8 py-3 text-lg"
            >
              <Star className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
          
          </div>

          <div className="mt-8 flex items-center justify-center text-gray-600">
            <Phone className="h-5 w-5 mr-2" />
            <span>Questions? Call our experts at +91 97876 78785</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BillingPage

