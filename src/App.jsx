import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BillingPage from './pages/BillingPage'
import LoanPage from './pages/LoanPage'
import DigitalMarketingPage from './pages/DigitalMarketingPage'
import AboutPage from './pages/AboutPage.jsx'
import MobileDevelopmentPage from './pages/MobileDevelopmentPage'
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage'
import RefundPolicy from './pages/RefundPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import FAQPage from './pages/faqsSection'
import ErrorPage from './pages/errorPage'
import './App.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/billing" element={<BillingPage />} />
      <Route path="/loan" element={<LoanPage />} />
      <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
      <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
      <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path='/faq' element={<FAQPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
