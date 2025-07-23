import { Link } from 'react-router-dom'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/20 via-transparent to-[#26495f]/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Please read our terms and conditions carefully
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions – Avis Billing Software</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms:</h3>
                <p className="text-gray-700">By using our billing software, you agree to comply with the terms and conditions mentioned below.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">2. Software Usage:</h3>
                <p className="text-gray-700">We offer a 30-day free trial. After the trial period, continued access requires an active yearly subscription.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">3. License:</h3>
                <p className="text-gray-700">You are granted a non-transferable, non-exclusive license to use the software for your business purposes only. You may not resell, reverse engineer, or distribute the software.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">4. User Responsibilities:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>You are responsible for keeping your login credentials secure.</li>
                  <li>You must ensure all data you enter is accurate and legal.</li>
                  <li>Any illegal or unauthorized usage is strictly prohibited.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">5. Updates and Maintenance:</h3>
                <p className="text-gray-700">We may provide updates and perform scheduled maintenance, which might result in temporary service interruptions. Prior notice will be given wherever possible.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">6. Customer Support:</h3>
                <p className="text-gray-700">Support is available during business hours via email or phone for technical assistance, bug reports, and feature-related queries.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">7. Data Security:</h3>
                <p className="text-gray-700">We use standard industry practices to secure your data. However, we are not liable for any data loss caused by external factors such as hacking, hardware failure, or server outages beyond our control.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">8. Subscription & Payment:</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>After the 30-day free trial, users are required to purchase a yearly subscription to continue using the software.</li>
                  <li>Once subscribed, payments are non-refundable (see Refund Policy below).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">9. Account Termination:</h3>
                <p className="text-gray-700">We reserve the right to suspend or terminate accounts that violate these terms or misuse the platform.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">10. Limitation of Liability:</h3>
                <p className="text-gray-700">We are not liable for any direct or indirect loss, including business interruption, data loss, or damages arising from the use or inability to use the software.</p>
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

export default TermsAndConditions