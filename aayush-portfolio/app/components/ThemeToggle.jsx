"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const ThemeToggle = ({ showLabel = false, variant = "ghost", size = "icon" }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getThemeIcon = () => {
    if (!mounted) return <Sun className="h-4 w-4" />;
    
    if (theme === 'light') {
      return <Sun className="h-4 w-4" />;
    } else if (theme === 'dark') {
      return <Moon className="h-4 w-4" />;
    } else {
      return <Monitor className="h-4 w-4" />;
    }
  };

  const getThemeLabel = () => {
    if (!mounted) return 'Light Mode';
    
    if (theme === 'light') {
      return 'Light Mode';
    } else if (theme === 'dark') {
      return 'Dark Mode';
    } else {
      return 'System Mode';
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: 90 }
  };

  if (!mounted) {
    return (
      <Button variant={variant} size={size} disabled>
        <Sun className="h-4 w-4" />
        {showLabel && <span className="ml-2">Loading...</span>}
      </Button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={variant}
            size={size}
            onClick={toggleTheme}
            className="relative rounded-full"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {getThemeIcon()}
              </motion.div>
            </AnimatePresence>
            {showLabel && (
              <motion.span 
                className="ml-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {getThemeLabel()}
              </motion.span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;
