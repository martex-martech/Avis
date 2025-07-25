import React from 'react'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'
import { Button } from '@/components/ui/button.jsx'
import { Code, LayoutDashboard, Target, Award, Handshake, ArrowRight } from 'lucide-react'

function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/20 via-transparent to-[#26495f]/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Create Stunning Websites with
            <span className="text-orange-400 block">Avis Website Development</span>
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-10">
            Build responsive, fast, and user-friendly websites tailored to your business goals
          </p>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Website Development Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Deliver high-quality websites that engage users and drive conversions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Responsive Design */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <LayoutDashboard className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Responsive Design</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create websites that look great and function perfectly on all devices and screen sizes.
              </p>
            </div>

            {/* Custom Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Custom Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Build tailored website solutions with modern technologies to meet your unique requirements.
              </p>
            </div>

            {/* SEO Optimization */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">SEO Optimization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Improve your website’s visibility and ranking on search engines with proven SEO techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Avis */}
      <section className="py-16 bg-gradient-to-br from-[#26495f]/10 to-[#26495f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Avis for Website Development?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Work with a dedicated team focused on delivering exceptional website solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Target className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Tailored Solutions</h3>
              <p className="text-[#26495f] text-sm">
                Customized websites designed to meet your specific business needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Award className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Experienced Team</h3>
              <p className="text-[#26495f] text-sm">
                Skilled developers with expertise in the latest web technologies and trends.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <LayoutDashboard className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">User-Friendly Design</h3>
              <p className="text-[#26495f] text-sm">
                Focused on creating intuitive and engaging user experiences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Handshake className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Client Partnership</h3>
              <p className="text-[#26495f] text-sm">
                Transparent communication and collaboration throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with Avis to create stunning, high-performance websites that drive business success.
          </p>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-[#26495f] border-2 border-[#26495f]/20 hover:bg-[#26495f]/5 hover:text-[#26495f] px-8 py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              
            >
              Start Your Digital Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WebsiteDevelopmentPage

