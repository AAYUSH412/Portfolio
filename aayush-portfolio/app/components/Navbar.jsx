"use client";

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
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

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState('light');

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
        document.documentElement.classList.toggle('dark');
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
                fixed top-0 left-0 right-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4
                transition-all duration-300 backdrop-blur-md
                ${isScroll ? "bg-white/90 dark:bg-black/90 shadow-lg border-b border-border" : "bg-transparent"}
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
                        src={assets.logo || "/placeholder.svg"}
                        alt="logo"
                        width={144}
                        height={40}
                        priority
                        className="w-36 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                    />
                </motion.a>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-6">
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
                                            relative py-2 px-4 rounded-md transition-all duration-200
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
                <div className="flex items-center gap-2">
                    {/* Theme Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => document.documentElement.classList.toggle('dark')}
                        className="rounded-full hidden sm:flex"
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    <Button 
                        asChild
                        variant="outline"
                        className="hidden lg:flex"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2"
                        >
                            Contact
                            <Image
                                src={assets.arrow_icon || "/placeholder.svg"}
                                alt="contact"
                                width={16}
                                height={16}
                                className="w-4"
                            />
                        </motion.a>
                    </Button>

                    {/* Theme Toggle Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        className="rounded-full md:hidden"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <Moon className="h-5 w-5" />
                        ) : (
                            <Sun className="h-5 w-5" />
                        )}
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden relative z-50"
                                aria-label="Toggle menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>Navigation</SheetTitle>
                                <Separator />
                            </SheetHeader>
                            <ScrollArea className="h-full py-6">
                                <nav className="flex flex-col gap-2">
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
                                                    flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200
                                                    ${activeSection === item.href.slice(1) 
                                                        ? "bg-primary text-primary-foreground" 
                                                        : "hover:bg-accent hover:text-accent-foreground"
                                                    }
                                                `}
                                            >
                                                <IconComponent className="h-4 w-4" />
                                                {item.name}
                                                {activeSection === item.href.slice(1) && (
                                                    <Badge variant="secondary" className="ml-auto">
                                                        Active
                                                    </Badge>
                                                )}
                                            </motion.a>
                                        );
                                    })}
                                    <Separator className="my-4" />
                                    <Button asChild className="w-full">
                                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                                            <Mail className="h-4 w-4" />
                                            Contact Me
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="w-full mt-2">
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