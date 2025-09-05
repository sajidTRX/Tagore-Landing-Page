'use client';

import { useState } from 'react';

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section id="email-capture" className="py-20 sm:py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl sm:max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
            Be the First to Know
          </h2>
          
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 w-full max-w-md px-5 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200 text-base"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 active:scale-95 transition duration-200 whitespace-nowrap text-base"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;
