import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/shared/Navigation';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 last:border-b-0 transition-all duration-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left hover:bg-gray-50 px-4 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-base sm:text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600 transition-transform" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform" />
        )}
      </button>
      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden px-4 bg-gray-50"
        style={{ maxHeight: `${height}px` }}
      >
        <div className="pb-5 pt-2 text-sm sm:text-base text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

function FAQPage() {
  const faqs = [
    {
      question: "What services does Avis provide?",
      answer: "Avis offers comprehensive business solutions including billing management, loan management, digital marketing, and business automation tools specifically designed for Indian businesses."
    },
    {
      question: "How do I get started with Avis billing software?",
      answer: "You can download our app from the Play Store or App Store, or contact our sales team for a demo. We offer a free trial period to help you evaluate our solution."
    },
    {
      question: "Is Avis compliant with Indian tax regulations?",
      answer: "Yes, our billing software is fully GST compliant and updated regularly to reflect the latest tax regulations in India."
    },
    {
      question: "What makes Avis loan management different?",
      answer: "Our Vasool Drive system provides end-to-end loan management with automated reminders, collection tracking, and portfolio analytics designed specifically for the Indian market."
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes, we offer 24/7 customer support via phone (+91 97876 78785), email (support@avis.com), and in-app chat. Our average response time is under 30 minutes for critical issues."
    },
    {
      question: "Can I integrate Avis with my existing systems?",
      answer: "Yes, we provide API access and integration options with most common accounting, ERP, and banking systems used by Indian businesses."
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and traditional bank transfers. All transactions are secured with bank-grade encryption."
    },
    {
      question: "How often do you update your software?",
      answer: "We release updates monthly with new features and security patches. All updates are free for subscribed customers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about Avis products and services
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Can't find what you're looking for?
              </p>
              <Link
                to="/about#contact"
                className="inline-flex items-center px-6 py-3 text-sm sm:text-base border border-transparent font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Our Support Team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FAQPage;
