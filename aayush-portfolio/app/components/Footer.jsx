"use client";

import { assets } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AAYUSH412",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aayush-vaghela/",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      href: "https://x.com/Aayu412?t=_e_rCggySmYW-h0IaKpESA&s=08",
      icon: Twitter,
      color: "hover:text-sky-500"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#aboutme" },
    { name: "Services", href: "#service" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <Image
                src={assets.logo || "/placeholder.svg"}
                alt="Aayush Vaghela Logo"
                width={180}
                height={50}
                className="mb-4 rounded-xl shadow-sm"
              />
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences. 
                Specializing in MERN stack development with a focus on scalable, high-performance applications.
              </p>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Mail className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Get in touch</p>
                <a 
                  href="mailto:aayushvaghela12@gmail.com" 
                  className="font-medium hover:text-primary transition-colors"
                >
                  aayushvaghela12@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </Badge>
              </div>
              
              <TooltipProvider>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" asChild>
                          <motion.a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors duration-200 ${social.color}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <social.icon className="h-4 w-4" />
                          </motion.a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Follow me on {social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Aayush Vaghela. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>& ☕ in India</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">All rights reserved</span>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2"
            >
              <ArrowUp className="h-3 w-3" />
              Back to top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
