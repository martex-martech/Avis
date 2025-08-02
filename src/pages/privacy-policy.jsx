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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy – AVIS4U</h2>

            <div className="space-y-6 text-gray-700">
              <p>
                At AVIS4U (<a href="https://avis4u.in/" className="text-[#26495f] underline">https://avis4u.in/</a>), your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. By accessing or using our website, you agree to the terms of this policy.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">1. Information We Collect</h3>
                <p>
                  We may collect personal and non-personal information when you interact with our website, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you voluntarily submit via forms or inquiries.</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, device information, access times, and pages viewed.</li>
                  <li><strong>Cookies & Tracking Technologies:</strong> We may use cookies to enhance user experience, analyze trends, and track user activities on the website.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h3>
                <p>We use the information collected to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Improve our website and services.</li>
                  <li>Send promotional emails (if you opt-in).</li>
                  <li>Monitor and analyze trends and usage.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">3. Sharing of Information</h3>
                <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted third-party service providers who help us operate the website or serve our users, as long as they agree to keep the information confidential.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">4. Data Security</h3>
                <p>We adopt industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">5. Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Opt-out of marketing communications.</li>
                  <li>Withdraw your consent at any time.</li>
                </ul>
                <p className="mt-2">To exercise these rights, contact us at <a href="mailto:avis4u.in@gmail.com" className="text-[#26495f] underline">avis4u.in@gmail.com</a>.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">6. Third-Party Links</h3>
                <p>Our website may contain links to external websites. We are not responsible for the privacy practices or content of such sites.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">7. Changes to This Policy</h3>
                <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">8. Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <p className="mt-2">
                  Email: <a href="mailto:avis4u.in@gmail.com" className="text-[#26495f] underline">avis4u.in@gmail.com</a>
                </p>
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