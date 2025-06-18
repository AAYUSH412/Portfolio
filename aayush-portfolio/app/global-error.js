'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
    
    // Track errors for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-8xl font-bold text-red-300 dark:text-red-600 mb-4"
            >
              ⚠️
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4"
            >
              Something went wrong!
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-red-600 dark:text-red-300 mb-8"
            >
              We apologize for the inconvenience. Please try again or contact support.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <button
                onClick={reset}
                className="inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 mr-4"
              >
                🔄 Try Again
              </button>
              
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                🏠 Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </body>
    </html>
  )
}
