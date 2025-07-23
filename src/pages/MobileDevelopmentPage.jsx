import React from 'react'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'
import { Button } from '@/components/ui/button.jsx'
import { Smartphone, Code, LayoutDashboard, Target, Award, Handshake, ArrowRight } from 'lucide-react'

function MobileDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/20 via-transparent to-[#26495f]/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Powerful Mobile Apps with
            <span className="text-orange-400 block">Avis Mobile Development</span>
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-10">
            Deliver engaging, high-performance mobile experiences tailored to your business needs
          </p>

          <div className="flex justify-center space-x-4">
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/about#contact'}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Mobile Development Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Create innovative mobile applications that drive engagement and growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Native Apps */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Smartphone className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Native App Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Build high-performance native apps for iOS and Android platforms with seamless user experience.
              </p>
            </div>

            {/* Cross-Platform */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cross-Platform Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Develop apps that run smoothly on multiple platforms using React Native, Flutter, and more.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <LayoutDashboard className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">UI/UX Design</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Craft intuitive and engaging user interfaces that enhance user satisfaction and retention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Avis */}
      <section className="py-16 bg-gradient-to-br from-[#26495f]/10 to-[#26495f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Avis for Mobile Development?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Partner with experts who deliver innovative mobile solutions tailored to your business goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Target className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Innovative Solutions</h3>
              <p className="text-[#26495f] text-sm">
                Cutting-edge mobile apps designed to keep you ahead of the competition.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Award className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Expert Team</h3>
              <p className="text-[#26495f] text-sm">
                Skilled developers with deep expertise in mobile technologies and frameworks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <LayoutDashboard className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">User-Centered Design</h3>
              <p className="text-[#26495f] text-sm">
                Focused on creating seamless and engaging user experiences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Handshake className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Client Collaboration</h3>
              <p className="text-[#26495f] text-sm">
                Transparent communication and partnership throughout the development process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Partner with Avis to create innovative, high-quality mobile applications that drive business growth.
          </p>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-[#26495f] border-2 border-[#26495f]/20 hover:bg-[#26495f]/5 hover:text-[#26495f] px-8 py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/about#contact'}
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

export default MobileDevelopmentPage
