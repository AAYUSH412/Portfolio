

import { infoList, toolsData } from '../../assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { useTheme } from 'next-themes';

const Aboutus = () => {
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
      id='aboutme' 
      className='w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-8 sm:py-10 scroll-mt-20 min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h4 className='text-center mb-2 text-sm sm:text-base md:text-lg font-ovo text-gray-600 dark:text-gray-400' variants={itemVariants}>Introduction</motion.h4>
      <motion.h2 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ovo text-gray-900 dark:text-white' variants={itemVariants}>About Me</motion.h2>

      <motion.div className='max-w-4xl mx-auto mt-4 sm:mt-5' variants={containerVariants}> 
        <motion.p className='text-center text-sm sm:text-base md:text-lg mx-auto mt-4 sm:mt-5 text-gray-700 dark:text-gray-300 px-2' variants={itemVariants}>
          🚀 Expert Full Stack Developer with a passion for building{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">scalable, high-performance web applications</span> using the{" "}
          <span className="font-semibold">MERN stack</span>. With{" "}
          <span className="font-semibold">10+ successful projects</span> delivered, I specialize in creating{" "}
          <span className="font-semibold">enterprise-grade solutions, e-commerce platforms, and innovative web experiences</span> that drive business growth. 
          💡 Combining technical expertise with creative problem-solving to transform ideas into digital reality.
        </motion.p>

        <motion.ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10' variants={containerVariants}>
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-border dark:border-gray-700 bg-white dark:bg-gray-800/50 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                    <Image 
                      src={icon || "/placeholder.svg"}
                      alt={title}
                      width={28}
                      height={28}
                      className='w-6 h-6 sm:w-7 sm:h-7' 
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className='text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-foreground'>{title}</h3>
                    <p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>{description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.ul>

        <motion.h4 className='text-center mt-6 sm:mt-8 lg:mt-9 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white' variants={itemVariants}>
          Skills & Technologies
        </motion.h4>
        
        <motion.div className="mt-6 sm:mt-8" variants={itemVariants}>
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 h-10 sm:h-12">
              <TabsTrigger value="skills" className="text-xs sm:text-sm">Core Skills</TabsTrigger>
              <TabsTrigger value="tools" className="text-xs sm:text-sm">Tools & Technologies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="skills" className="mt-4 sm:mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white">Frontend Development</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 pt-0">
                    {[
                      { skill: "React.js", level: 95 },
                      { skill: "Next.js", level: 90 },
                      { skill: "JavaScript/TypeScript", level: 92 },
                      { skill: "Tailwind CSS", level: 88 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-1 sm:space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-muted-foreground">{item.level}%</span>
                        </div>
                        <Progress value={item.level} className="h-1.5 sm:h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-800/50 border-gray-200 dark:border-gray-700">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-base sm:text-lg text-gray-900 dark:text-white">Backend Development</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 pt-0">
                    {[
                      { skill: "Node.js", level: 90 },
                      { skill: "Express.js", level: 88 },
                      { skill: "MongoDB", level: 85 },
                      { skill: "AWS/Docker", level: 82 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-1 sm:space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-muted-foreground">{item.level}%</span>
                        </div>
                        <Progress value={item.level} className="h-1.5 sm:h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-4 sm:mt-6">
              <TooltipProvider>
                <motion.div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4' variants={containerVariants}>
                  {toolsData.map((tool, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className='group'
                        >
                          <Card className="p-2 sm:p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                            <Image 
                              src={tool || "/placeholder.svg"}
                              alt={`Tool ${index + 1}`}
                              width={40}
                              height={40}
                              className='w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain' 
                            />
                          </Card>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Technology Tool {index + 1}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </motion.div>
              </TooltipProvider>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Aboutus;

