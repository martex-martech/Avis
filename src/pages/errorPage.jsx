import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';


function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="text-6xl font-extrabold mb-4 text-red-400"
      >
        404
      </motion.h1>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 0.6 }} 
        className="text-2xl font-semibold mb-2"
      >
        Page Not Found
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6, duration: 0.6 }} 
        className="text-gray-300 mb-6 text-center max-w-md"
      >
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-lg text-white text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Go back home
        </Link>
      </motion.div>
    </div>
  );
}

export default ErrorPage;