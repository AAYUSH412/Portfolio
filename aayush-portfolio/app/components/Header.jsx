"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Download, Mail, ArrowRight } from "lucide-react";

const Header = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const { theme } = useTheme();

  const handleDownload = useCallback(async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadError("");

    const resumeUrl = "https://ik.imagekit.io/xh3awoalr/Portfolio/Aayush_Vaghela_Full-Stack_Developer.pdf";

    try {
      // Create a temporary link element for better download experience
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Aayush_Vaghela_Full-Stack_Developer.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Add CORS headers if needed
      link.crossOrigin = 'anonymous';
      
      // Append to DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Track download attempt for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'download', {
          event_category: 'engagement',
          event_label: 'resume_download',
          value: 1
        });
      }
      
      console.log("Resume download initiated successfully");
      
      // Reset state after short delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error("Download failed:", error);
      setDownloadError("Failed to download resume. Please try again or use the direct link.");
      setIsDownloading(false);
      
      // Fallback: Open in new tab
      try {
        window.open(resumeUrl, '_blank', 'noopener,noreferrer');
      } catch (fallbackError) {
        console.error("Fallback download also failed:", fallbackError);
        setDownloadError("Download unavailable. Please contact me directly for the resume.");
      }
    }
  }, [isDownloading]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-3 sm:gap-4 relative mt-20 sm:mt-24 md:mt-28 mb-5 font-inter text-gray-900 dark:text-white px-4"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="relative"
      >
        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 ring-4 ring-primary/20 dark:ring-primary/30 shadow-2xl dark:shadow-gray-900/50">
          <AvatarImage 
            src="/profile.jpeg"
            alt="Aayush Vaghela profile"
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            AV
          </AvatarFallback>
        </Avatar>
        <Badge 
          variant="secondary" 
          className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 dark:bg-green-600 text-white shadow-lg text-xs sm:text-sm px-2 py-1"
        >
          Available for work
        </Badge>
      </motion.div>

      {/* Hero Content */}
      <motion.h3
        custom={0.2}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="flex items-end gap-2 sm:gap-3 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1 font-poppins font-medium text-gray-700 dark:text-gray-300"
      >
        Hi I'm Aayush Vaghela{" "}
        <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl animate-wave">
          👋🏻
        </span>
      </motion.h3>

      <motion.h1
        custom={0.4}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl pt-1 sm:pt-2 pb-2 sm:pb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-playfair font-bold tracking-tight"
      >
        Full Stack Developer
      </motion.h1>

      <motion.p
        custom={0.6}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-inter leading-relaxed px-2"
      >
        🚀 Expert Full Stack Developer specializing in{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack</span> with{" "}
        <span className="font-semibold">10+ modern applications</span> delivered. 
        💻 Building scalable web solutions with{" "}
        <span className="font-semibold">React.js, Node.js, Express.js, MongoDB, AWS & Docker</span>. 
        ✨ Passionate about crafting exceptional user experiences and empowering businesses with 
        cutting-edge digital solutions.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        custom={0.8}
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="header-buttons flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 w-full"
      >
        <Button 
          asChild
          size="lg"
          className="btn-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 font-poppins font-medium px-8 sm:px-10 text-sm sm:text-base w-full sm:w-auto"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 w-full h-full"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Contact Me
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </Button>

        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          variant="outline"
          size="lg"
          className="btn-lg border-2 border-gray-300 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-poppins font-medium px-8 sm:px-10 text-sm sm:text-base backdrop-blur-sm w-full sm:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 w-full h-full"
          >
            {isDownloading ? (
              <>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span className="hidden sm:inline">Downloading...</span>
                <span className="sm:hidden">Loading...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </>
            )}
          </motion.div>
        </Button>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {downloadError && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 mt-2 text-sm"
          >
            {downloadError}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
