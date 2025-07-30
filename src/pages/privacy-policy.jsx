import { Link } from 'react-router-dom'
import Navigation from '../components/shared/Navigation'
import Footer from '../components/shared/Footer'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-[#26495f]/10">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#26495f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#26495f]/20 via-transparent to-[#26495f]/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Learn how we collect, use, and safeguard your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy – Avis Billing Platform</h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">1. Introduction:</h3>
                <p>
                  This Privacy Policy describes how AVIS ENTERPRISES and its affiliates (referred to as "we", "our", "us") collect, use, share, and safeguard your personal information through our platform <a href="https://avis4u.in/billing" className="text-[#26495f] underline">https://avis4u.in/billing</a>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">2. Data Collection:</h3>
                <p>We collect information when you register, interact with the platform, or make transactions. This includes your name, contact details, identity proof, payment details, and other relevant information. Some sensitive data is collected with your consent, such as facial recognition or biometrics, as per applicable laws.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">3. Usage of Data:</h3>
                <p>We use your data to provide services, enhance experience, send offers, detect fraud, enforce policies, and support customer care. You may opt out of marketing communications at any time.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">4. Data Sharing:</h3>
                <p>We may share your data with internal teams, affiliates, logistics/payment partners, and legal agencies if required by law. We are not responsible for third-party privacy practices. Always verify communication sources claiming to be from AVIS.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">5. Security Precautions:</h3>
                <p>We follow reasonable industry standards to protect your data but cannot guarantee complete security over internet transmissions. Users must protect their credentials and are responsible for their own security.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">6. Retention and Deletion:</h3>
                <p>Users may delete their account via platform settings. We retain data only as long as necessary or required by law. In certain cases (pending services, fraud prevention), we may deny deletion requests. Anonymized data may be used for research or analysis.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">7. User Rights:</h3>
                <p>You can access, correct, or update your personal data using platform features.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">8. Consent:</h3>
                <p>By using our platform, you consent to the collection and use of your data as described. You may withdraw consent by contacting us, though this may restrict service access. Withdrawal is not retroactive and subject to verification and legal compliance.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">9. Updates to Policy:</h3>
                <p>This policy may be updated to reflect changes. Major changes will be notified as required by law. Please check this page regularly for updates.</p>
              </div>
            </div>

            <div className="mt-12 border-t pt-8 border-gray-200">
              <p className="text-gray-600 italic">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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

export default PrivacyPolicy
