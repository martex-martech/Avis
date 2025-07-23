import { Link } from 'react-router-dom'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/20 via-transparent to-[#26495f]/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund Policy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our commitment to transparent business practices
            </p>
          </div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy – Avis Billing Software</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">1. Free Trial:</h3>
                <p className="text-gray-700">A 30-day free trial is provided. No payment is required during this period.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">2. Refund After Subscription:</h3>
                <p className="text-gray-700">Once the yearly subscription is purchased, refunds are not provided under normal circumstances.</p>
                <p className="text-gray-700">However, in the rare event of a critical technical issue that cannot be resolved within 7 business days, users may submit a written refund request for review.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">3. Refund Process:</h3>
                <p className="text-gray-700">If approved, the refund will be processed within 7–10 business days to the original payment method.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Return Policy</h3>
                <p className="text-gray-700">Since this is a digital software product, returns are not applicable.</p>
              </div>
            </div>

            <div className="mt-12 border-t pt-8 border-gray-200">
              <p className="text-gray-600 italic">Last updated: ${new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
              <p className="mt-4">
                <Link to="/" className="text-[#26495f] hover:text-[#26495f]/80 font-medium">
                  ← Back to Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default RefundPolicy