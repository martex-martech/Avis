import React from 'react'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'
import { Button } from '@/components/ui/button.jsx'
import {
  Search, LineChart, Megaphone, Users, Code, LayoutDashboard,
  Target, Rocket, Mail, ArrowRight, Handshake, Globe,
  TrendingUp, Shield, Award
} from 'lucide-react'

function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/20 via-transparent to-[#26495f]/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Amplify Your Digital Presence with
            <span className="text-orange-400 block">Avis Digital Marketing</span>
          </h1>

          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-10">
            Drive Growth, Attract Customers, and Dominate Your Market Online with Data-Driven Strategies
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
            Comprehensive Digital Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your online presence with our full-spectrum digital marketing services designed for modern businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#26495f]/10 rounded-lg flex items-center justify-center mr-4">
                  <Search className="h-6 w-6 text-[#26495f]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Search Engine Optimization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Boost your organic visibility and drive qualified traffic with advanced SEO strategies tailored for your industry.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Keyword research & optimization</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Technical SEO audits</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Content optimization</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Local SEO for businesses</span>
                </div>
              </div>
            </div>

            {/* PPC */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <Megaphone className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Pay-Per-Click Advertising</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Maximize ROI with targeted campaigns across Google Ads, social media, and display networks.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Google Ads management</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Social media advertising</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Display & remarketing</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Campaign optimization</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Social Media Marketing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Build brand awareness and engage your audience across all major social media platforms.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Content strategy & creation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Community management</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Influencer partnerships</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Social media analytics</span>
                </div>
              </div>
            </div>

            {/* Content Marketing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Content Marketing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create compelling content that attracts, engages, and converts your target audience effectively.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Blog writing & optimization</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Video content creation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Infographic design</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Content distribution</span>
                </div>
              </div>
            </div>

            {/* Email Marketing */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Email Marketing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nurture leads and retain customers with personalized email campaigns that drive conversions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Automated email sequences</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Newsletter campaigns</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>A/B testing & optimization</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Performance tracking</span>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#26495f]/20 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <LineChart className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Analytics & Reporting</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Make data-driven decisions with comprehensive analytics and transparent performance reporting.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Google Analytics setup</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Custom dashboard creation</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>Monthly performance reports</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 text-orange-600 mr-2" />
                  <span>ROI tracking & analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Avis */}
      <section className="py-16 bg-gradient-to-br from-[#26495f]/10 to-[#26495f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Avis for Digital Marketing?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Partner with experts who understand the Indian market and deliver measurable results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Target className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Results-Driven</h3>
              <p className="text-[#26495f] text-sm">
                Data-backed strategies designed to deliver measurable ROI and business growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Award className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Expert Team</h3>
              <p className="text-[#26495f] text-sm">
                Certified professionals with deep expertise in digital marketing trends and best practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <LayoutDashboard className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Transparent Reporting</h3>
              <p className="text-[#26495f] text-sm">
                Regular detailed reports so you always know your campaign performance and investment returns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#26495f]/30 transform hover:scale-105 transition-transform duration-300">
              <Handshake className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#26495f] mb-3">Client-Focused</h3>
              <p className="text-[#26495f] text-sm">
                Customized strategies tailored to your unique business goals and market requirements.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let Avis be your trusted partner in achieving exceptional online marketing results. Start your digital transformation today.
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

export default DigitalMarketingPage
