import { assets, serviceData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import { useTheme } from 'next-themes'

const Service = () => {
  const { theme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      id='service' 
      className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-10 scroll-mt-20 min-h-screen flex flex-col justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className='text-center mb-8 sm:mb-12 lg:mb-16' variants={itemVariants}>
        <Badge variant="outline" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
          What I offer
        </Badge>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white'>My Services</h2>
        <p className='max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-muted-foreground px-4'>
          🚀 Delivering comprehensive web development solutions that drive business success. From{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">enterprise applications to e-commerce platforms</span>, 
          I provide end-to-end development services using cutting-edge technologies and industry best practices. 
          Let's build something extraordinary together! ✨
        </p>
      </motion.div>

      <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6' variants={containerVariants}>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="h-full group hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src={icon || "/placeholder.svg"} 
                        alt={title} 
                        width={32} 
                        height={32} 
                        className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'
                      />
                    </div>
                    <CardTitle className='text-base sm:text-lg font-semibold group-hover:text-primary transition-colors text-gray-900 dark:text-gray-100 leading-tight'>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-4 sm:pb-6 text-center px-4 sm:px-6">
                    <p className='text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4'>
                      {description}
                    </p>
                    
                    <div className="flex justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <Separator className="my-3 sm:my-4" />
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 flex-shrink-0" />
                        <span>Professional Quality</span>
                      </div>
                      <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 flex-shrink-0" />
                        <span>Fast Delivery</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
                    <Button 
                      asChild 
                      variant="ghost" 
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-xs sm:text-sm"
                    >
                      <motion.a 
                        href={link}
                        className="flex items-center justify-center gap-1.5 sm:gap-2"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className='w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform' />
                      </motion.a>
                    </Button>
                  </CardFooter>
                </Card>
              </HoverCardTrigger>
              
              <HoverCardContent className="w-72 sm:w-80 hidden sm:block" side="top">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Image src={icon || "/placeholder.svg"} alt={title} width={20} height={20} />
                    {title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">React</Badge>
                    <Badge variant="secondary" className="text-xs">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Professional Service</span>
                    <span>⭐ 5.0 Rating</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Service