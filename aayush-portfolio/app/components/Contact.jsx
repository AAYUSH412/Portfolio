'use client'

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

const Contact = () => {
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setResult("")
    
    const formData = new FormData(event.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_API_KEY || "")

    // Add additional form data for better tracking
    formData.append("subject", "New Contact Form Submission from Portfolio")
    formData.append("from_name", "Aayush Vaghela Portfolio")
    formData.append("reply_to", formData.get("email"))

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
          'Origin': 'https://aayush-vaghela.vercel.app',
          'Referer': 'https://aayush-vaghela.vercel.app',
        },
        mode: 'cors',
        credentials: 'omit',
        cache: 'no-cache',
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setResult("success")
        event.target.reset()
        
        // Track successful form submission
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'engagement',
            event_label: 'contact_form',
            value: 1
          });
        }
        
        // Auto-clear success message after 5 seconds
        setTimeout(() => {
          setResult("")
        }, 5000)
      } else {
        throw new Error(data.message || "Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setResult("error")
      
      // Auto-clear error message after 8 seconds
      setTimeout(() => {
        setResult("")
      }, 8000)
    } finally {
      setIsLoading(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "aayushvaghela12@gmail.com",
      href: "mailto:aayushvaghela12@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Vadodara, Gujarat, India",
      href: "https://maps.google.com"
    }
  ]

  return (
    <div
      id="contact"
      className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-12 sm:py-16 lg:py-20 scroll-mt-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <Badge variant="outline" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
          Connect with me
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Get in Touch</h2>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          🚀 Ready to bring your ideas to life? I'm always excited to discuss new projects, 
          innovative solutions, or collaboration opportunities.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Let's start a conversation</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                Whether you need a full-stack web application, e-commerce platform, 
                or custom software solution, let's create something amazing together! ✨
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Card className="p-3 sm:p-4 hover:shadow-md transition-all duration-300 cursor-pointer group">
                        <a href={info.href} className="flex items-center gap-3 sm:gap-4">
                          <div className="p-2 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-xs sm:text-sm text-muted-foreground">{info.title}</h4>
                            <p className="font-semibold text-sm sm:text-base truncate">{info.details}</p>
                          </div>
                        </a>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Click to {info.title === 'Location' ? 'view location' : `contact via ${info.title.toLowerCase()}`}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-primary/20">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Why choose me?</h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>• 10+ successful projects delivered</li>
                <li>• Expert in MERN stack development</li>
                <li>• 24/7 support and maintenance</li>
                <li>• Agile development methodology</li>
              </ul>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-4 sm:p-6 lg:p-8 shadow-lg">
              <CardHeader className="px-0 pt-0 pb-4 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Send me a message</CardTitle>
                <Separator />
              </CardHeader>
              
              <CardContent className="px-0 pb-0">
                <motion.form
                  onSubmit={onSubmit}
                  variants={formVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <motion.div variants={itemVariants}>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        required
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                        className="h-10 sm:h-12 text-sm sm:text-base"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={itemVariants}>
                    <Input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      required
                      rows={5}
                      className="resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[150px]"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-10 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                          <span className="hidden sm:inline">Sending...</span>
                          <span className="sm:hidden">Sending</span>
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Send Message</span>
                          <span className="sm:hidden">Send</span>
                        </>
                      )}
                    </Button>
                  </motion.div>

                  {/* Result Messages */}
                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 sm:p-4 rounded-lg flex items-start gap-2 text-sm sm:text-base ${
                        result === "success" 
                          ? "bg-green-50 text-green-800 border border-green-200" 
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {result === "success" ? (
                        <>
                          <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Message sent successfully! I'll get back to you soon.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Failed to send message. Please try again or contact me directly.</span>
                        </>
                      )}
                    </motion.div>
                  )}
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact