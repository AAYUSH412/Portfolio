"use client";

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { assets } from '../../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Menu, X, Sun, Moon, Home, User, Briefcase, FolderOpen, Mail, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before rendering theme-dependent content
    useEffect(() => {
        setMounted(true);
    }, []);

    const menuItems = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'About me', href: '#aboutme', icon: User },
        { name: 'Service', href: '#service', icon: Briefcase },
        { name: 'Projects', href: '#projects', icon: FolderOpen },
        { name: 'Contact', href: '#contact', icon: Mail }
    ];

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Handle scroll and active section
    useEffect(() => {
        const handleScroll = () => {
            // Update navbar background
            setIsScroll(window.scrollY > 50);

            // Update active section
            const sections = menuItems.map(item => item.href.slice(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuItems]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navbarVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
            }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className={`
                fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-5 lg:px-8 xl:px-[8%] py-2 sm:py-3 md:py-4
                transition-all duration-300 backdrop-blur-md
                ${isScroll ? "bg-white/95 dark:bg-gray-900/95 shadow-lg border-b border-gray-200/50 dark:border-gray-700/50" : "bg-transparent"}
            `}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-50"
                >
                    <Image
                        src={assets.logo}
                        alt="logo"
                        width={144}
                        height={40}
                        priority
                        className="w-24 h-8 sm:w-28 sm:h-10 md:w-32 md:h-12 lg:w-36 lg:h-14 rounded-xl sm:rounded-2xl border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-300"
                    />
                </motion.a>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="gap-4 xl:gap-6">
                        {menuItems.map((item, index) => (
                            <NavigationMenuItem key={item.name}>
                                <NavigationMenuLink asChild>
                                    <motion.a
                                        href={item.href}
                                        custom={index}
                                        variants={menuItemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`
                                            relative py-2 px-3 xl:px-4 rounded-md transition-all duration-200 text-sm xl:text-base
                                            ${activeSection === item.href.slice(1) 
                                                ? "bg-primary text-primary-foreground shadow-sm" 
                                                : "hover:bg-accent hover:text-accent-foreground"
                                            }
                                        `}
                                    >
                                        {item.name}
                                    </motion.a>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Contact Button & Theme Toggle & Mobile Menu Button */}
                <div className="flex items-center gap-1 sm:gap-2">
                    {/* Theme Toggle */}
                    <div className="hidden sm:flex">
                        <ThemeToggle />
                    </div>

                    <Button 
                        asChild
                        variant="outline"
                        size="sm"
                        className="hidden xl:flex"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-sm"
                        >
                            Contact
                            <Image
                                src={assets.arrow_icon}
                                alt="contact"
                                width={16}
                                height={16}
                                className="w-3 h-3"
                            />
                        </motion.a>
                    </Button>

                    {/* Theme Toggle Button for Mobile */}
                    <div className="sm:hidden">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden relative z-50 h-8 w-8 sm:h-10 sm:w-10"
                                aria-label="Toggle menu"
                            >
                                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] sm:w-[300px] md:w-[400px] max-w-[85vw]">
                            <SheetHeader>
                                <SheetTitle className="text-left">Navigation</SheetTitle>
                                <Separator />
                            </SheetHeader>
                            <ScrollArea className="h-full py-4 sm:py-6">
                                <nav className="flex flex-col gap-1 sm:gap-2">
                                    {menuItems.map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <motion.a
                                                key={item.name}
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                custom={index}
                                                variants={menuItemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className={`
                                                    flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 text-sm sm:text-base
                                                    ${activeSection === item.href.slice(1) 
                                                        ? "bg-primary text-primary-foreground" 
                                                        : "hover:bg-accent hover:text-accent-foreground"
                                                    }
                                                `}
                                            >
                                                <IconComponent className="h-4 w-4 flex-shrink-0" />
                                                <span className="flex-1">{item.name}</span>
                                                {activeSection === item.href.slice(1) && (
                                                    <Badge variant="secondary" className="text-xs">
                                                        Active
                                                    </Badge>
                                                )}
                                            </motion.a>
                                        );
                                    })}
                                    <Separator className="my-3 sm:my-4" />
                                    <Button asChild className="w-full text-sm">
                                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                                            <Mail className="h-4 w-4" />
                                            Contact Me
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full mt-2 text-sm">
                                        <a href="/Aayush_Vaghela.pdf" download className="flex items-center gap-2">
                                            <Download className="h-4 w-4" />
                                            Download Resume
                                        </a>
                                    </Button>
                                </nav>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;