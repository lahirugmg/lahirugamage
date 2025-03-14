"use client";

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaBlog } from 'react-icons/fa'
import { motion } from 'framer-motion'
import AboutSection from '@/components/AboutSection'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding pt-32 flex flex-col items-center justify-center min-h-[90vh] text-center relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300 filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-indigo-300 filter blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <motion.h1 
            className="heading-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lahiru Gamage
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Solution Architect with 13+ years of experience in enterprise software architecture, 
            cloud-native architecture, and technical leadership
          </motion.h2>
          
          <motion.div 
            className="flex gap-6 mb-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href="https://www.linkedin.com/in/lahirugmg" 
              target="_blank"
              className="text-primary hover:text-primary/80 transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <div className="relative p-3 bg-white rounded-full shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                <FaLinkedin className="w-6 h-6" />
              </div>
            </Link>
            <Link 
              href="https://github.com/lahirugmg" 
              target="_blank"
              className="text-primary hover:text-primary/80 transition-colors group"
              aria-label="GitHub Profile"
            >
              <div className="relative p-3 bg-white rounded-full shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                <FaGithub className="w-6 h-6" />
              </div>
            </Link>
            <Link 
              href="/blog" 
              className="text-primary hover:text-primary/80 transition-colors group"
              aria-label="Blog"
            >
              <div className="relative p-3 bg-white rounded-full shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                <FaBlog className="w-6 h-6" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-primary rounded-full p-1 flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-1 bg-primary rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Experience Timeline */}
      <ExperienceTimeline />
    </div>
  )
} 