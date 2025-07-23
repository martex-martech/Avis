import {
  Lightbulb, Handshake, Award,
  CheckCircle, ArrowRight, Phone, Mail, MapPin
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'
import { Button } from '@/components/ui/button.jsx'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/30 via-transparent to-[#26495f]/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            About <span className="text-orange-400">Avis</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Empowering Indian Businesses with Innovative Technology Solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#26495f] mb-8">
                Our Story: Building a Better Tech
              </h2>
              <p className="text-lg text-[#26495f] mb-4">
                Founded with a vision to revolutionize how Indian businesses operate, Avis began its journey by identifying critical gaps in traditional billing and loan management systems. We saw a need for robust, user-friendly, and scalable solutions that could empower businesses of all sizes to thrive in a competitive landscape.
              </p>
              <p className="text-lg text-[#26495f] mb-4">
                From our humble beginnings, we have grown into a trusted technology partner for thousands of businesses across India. Our commitment to innovation, customer-centricity, and continuous improvement drives us to deliver solutions that not only meet but exceed expectations.
              </p>
              <p className="text-lg text-[#26495f]">
                We believe that technology should simplify, not complicate. That's why every Avis product is designed with a focus on intuitive interfaces, powerful features, and seamless integration, ensuring that our clients can focus on what they do best: growing their business.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
                  alt="Modern tech office workspace"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gradient-to-br from-[#26495f]/10 to-[#26495f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#26495f]/20 text-center">
              <Lightbulb className="h-16 w-16 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#26495f] mb-4">Our Mission</h3>
              <p className="text-[#26495f]">
                To empower Indian businesses with cutting-edge, intuitive, and reliable technology solutions that drive efficiency, foster growth, and simplify complex operations.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#26495f]/20 text-center">
              <Award className="h-16 w-16 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#26495f] mb-4">Our Vision</h3>
              <p className="text-[#26495f]">
                To be the leading technology partner for businesses across India, recognized for our innovation, integrity, and unwavering commitment to client success.
              </p>
            </div>
            {/* Values */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#26495f]/20 text-center">
              <Handshake className="h-16 w-16 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#26495f] mb-4">Our Values</h3>
              <ul className="text-[#26495f] text-left space-y-2 inline-block">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-[#26495f] mr-2" />Innovation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-[#26495f] mr-2" />Integrity</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-[#26495f] mr-2" />Customer Success</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-[#26495f] mr-2" />Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#26495f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Avis?
          </h2>
          <p className="text-xl text-white mb-8">
            We are always looking for new opportunities to help businesses grow. Contact us today to learn more.
          </p>
          <a href="#contact">
            <Button
              size="lg"
              className="bg-[#26495f] hover:bg-[#26495f]/80 text-white px-8 py-4 text-lg border-2 border-[#26495f]/90"
            >
              Contact Our Team

            </Button>
          </a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#26495f] mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-[#26495f] max-w-3xl mx-auto">
              We're here to help. Contact us with any questions or to get started with Avis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#26495f]/5 rounded-xl p-8 shadow-lg border-2 border-[#26495f]/20 text-center">
              <Phone className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#26495f] mb-2">Phone</h3>
              <p className="text-[#26495f] mb-2">Speak with our team directly.</p>
              <a href="tel:+919787678785" className="text-lg font-semibold text-[#26495f] hover:text-orange-500">+91 97876 78785</a>
            </div>
            <div className="bg-[#26495f]/5 rounded-xl p-8 shadow-lg border-2 border-[#26495f]/20 text-center">
              <Mail className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#26495f] mb-2">Email</h3>
              <p className="text-[#26495f] mb-2">Send us your questions.</p>
              <a href="mailto:avis4u.in@gmail.com" className="text-lg font-semibold text-[#26495f] hover:text-orange-500">avis4u.in@gmail.com</a>
            </div>
            <div className="bg-[#26495f]/5 rounded-xl p-8 shadow-lg border-2 border-[#26495f]/20 text-center">
              <MapPin className="h-12 w-12 text-[#26495f] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#26495f] mb-2">Office Address</h3>
              <p className="text-[#26495f]">
                Avis Enterprises<br />
                379/7, First Floor<br />
                Goundachi Puthur(Po),<br />
                Dharapuram - 638656
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage