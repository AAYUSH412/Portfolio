

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

const Aboutus = () => {
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
      className='w-full px-6 md:px-[12%] py-10 scroll-mt-20 min-h-screen flex flex-col justify-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h4 className='text-center mb-2 text-base md:text-lg font-ovo' variants={itemVariants}>Introduction</motion.h4>
      <motion.h2 className='text-center text-4xl md:text-5xl font-ovo' variants={itemVariants}>About Me</motion.h2>

      <motion.div className='max-w-4xl mx-auto mt-5' variants={containerVariants}> 
        <motion.p className='text-center text-base md:text-lg mx-auto mt-5' variants={itemVariants}>
          🚀 Expert Full Stack Developer with a passion for building{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">scalable, high-performance web applications</span> using the{" "}
          <span className="font-semibold">MERN stack</span>. With{" "}
          <span className="font-semibold">10+ successful projects</span> delivered, I specialize in creating{" "}
          <span className="font-semibold">enterprise-grade solutions, e-commerce platforms, and innovative web experiences</span> that drive business growth. 
          💡 Combining technical expertise with creative problem-solving to transform ideas into digital reality.
        </motion.p>

        <motion.ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10' variants={containerVariants}>
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Image 
                      src={icon || "/placeholder.svg"}
                      alt={title}
                      width={28}
                      height={28}
                      className='w-7 h-7' 
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className='text-lg font-semibold mb-2 text-foreground'>{title}</h3>
                    <p className='text-sm text-muted-foreground leading-relaxed'>{description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.ul>

        <motion.h4 className='text-center mt-9 text-xl sm:text-2xl font-semibold' variants={itemVariants}>
          Skills & Technologies
        </motion.h4>
        
        <motion.div className="mt-8" variants={itemVariants}>
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="skills">Core Skills</TabsTrigger>
              <TabsTrigger value="tools">Tools & Technologies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="skills" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Frontend Development</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { skill: "React.js", level: 95 },
                      { skill: "Next.js", level: 90 },
                      { skill: "JavaScript/TypeScript", level: 92 },
                      { skill: "Tailwind CSS", level: 88 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-muted-foreground">{item.level}%</span>
                        </div>
                        <Progress value={item.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Backend Development</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { skill: "Node.js", level: 90 },
                      { skill: "Express.js", level: 88 },
                      { skill: "MongoDB", level: 85 },
                      { skill: "AWS/Docker", level: 82 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{item.skill}</span>
                          <span className="text-muted-foreground">{item.level}%</span>
                        </div>
                        <Progress value={item.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-6">
              <TooltipProvider>
                <motion.div className='flex flex-wrap items-center justify-center gap-4' variants={containerVariants}>
                  {toolsData.map((tool, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <motion.div
                          variants={itemVariants}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className='group'
                        >
                          <Card className="p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                            <Image 
                              src={tool || "/placeholder.svg"}
                              alt={`Tool ${index + 1}`}
                              width={40}
                              height={40}
                              className='w-8 sm:w-10 h-8 sm:h-10 object-contain' 
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

