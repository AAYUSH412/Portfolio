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

const Service = () => {
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
      className='w-full px-6 md:px-[12%] py-10 scroll-mt-20 min-h-screen flex flex-col justify-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className='text-center mb-16' variants={itemVariants}>
        <Badge variant="outline" className="mb-4 px-4 py-2">
          What I offer
        </Badge>
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>My Services</h2>
        <p className='max-w-3xl mx-auto text-lg text-muted-foreground'>
          🚀 Delivering comprehensive web development solutions that drive business success. From{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">enterprise applications to e-commerce platforms</span>, 
          I provide end-to-end development services using cutting-edge technologies and industry best practices. 
          Let's build something extraordinary together! ✨
        </p>
      </motion.div>

      <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' variants={containerVariants}>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div key={index} variants={itemVariants} className="h-full">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src={icon || "/placeholder.svg"} 
                        alt={title} 
                        width={32} 
                        height={32} 
                        className='w-8 h-8'
                      />
                    </div>
                    <CardTitle className='text-lg font-semibold group-hover:text-primary transition-colors'>
                      {title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-6 text-center">
                    <p className='text-sm text-muted-foreground leading-relaxed mb-4'>
                      {description}
                    </p>
                    
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Professional Quality
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Fast Delivery
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button 
                      asChild 
                      variant="ghost" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    >
                      <motion.a 
                        href={link}
                        className="flex items-center justify-center gap-2"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                      </motion.a>
                    </Button>
                  </CardFooter>
                </Card>
              </HoverCardTrigger>
              
              <HoverCardContent className="w-80" side="top">
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