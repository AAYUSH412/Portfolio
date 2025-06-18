'use client';

import { assets, workData } from "../../assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Skeleton } from "./ui/skeleton";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";

const Project = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const loadedImages = {};
        await Promise.all(
          workData.map(project => 
            new Promise((resolve) => {
              const img = document.createElement('img');
              img.src = project.bgImage;
              img.onload = () => {
                loadedImages[project.bgImage] = true;
                resolve();
              };
              img.onerror = () => {
                loadedImages[project.bgImage] = false;
                resolve();
              };
            })
          )
        );
        setImagesLoaded(loadedImages);
        setLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div id="projects" className="w-full px-6 md:px-[12%] py-10 scroll-mt-20">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            My Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Loading my amazing projects...
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-4" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                  <Separator />
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-16" />
                    </div>
                    <Skeleton className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      id="projects"
      className="w-full px-6 md:px-[12%] py-10 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div variants={projectVariants} className="text-center mb-12">
        <Badge variant="outline" className="mb-4 px-4 py-2">
          My Projects
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I have worked on, showcasing my expertise in full-stack development.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {workData.map((project, index) => (
          <motion.div
            key={project.title}
            variants={projectVariants}
            className="group"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        Project {index + 1}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                      </div>
                      
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              View
                            </a>
                          </Button>
                          {project.github && (
                            <Button size="sm" variant="ghost" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                <Github className="h-3 w-3" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              
              <HoverCardContent className="w-80">
                <div className="space-y-3">
                  <h4 className="font-semibold">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Click to view project</span>
                    <span>2024</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;