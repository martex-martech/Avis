import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 animate-pulse opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-indigo-500 z-0" />

      {/* Main Content */}
      <div className="z-10 text-center max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-bounce tracking-wide">
          🚀 <span className="text-purple-400">Coming Soon</span>
        </h1>

        <p className="text-gray-300 text-lg flicker">
          We’re building something amazing for you. Stay excited!
        </p>

        {/* Sparkle Icons */}
        <div className="flex justify-center gap-4 mt-8 text-3xl animate-pulse">
          <span role="img" aria-label="sparkles">✨</span>
          <span role="img" aria-label="rocket">🚀</span>
          <span role="img" aria-label="fire">🔥</span>
          <span role="img" aria-label="stars">🌟</span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mt-10 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition duration-300 text-white font-semibold shadow-md"
        >
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoonPage;
