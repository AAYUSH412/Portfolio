'use client'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { AuroraBackground } from "./components/ui/aurora-background.tsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import SEO from './components/SEO.jsx';
import { Analytics, GoogleAnalytics } from './components/Analytics.jsx';

// Lazy load non-critical components
const Aboutus = dynamic(() => import("./components/Aboutus.jsx"), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Service = dynamic(() => import("./components/Service.jsx"), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Project = dynamic(() => import("./components/Project.jsx"), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Contact = dynamic(() => import("./components/Contact.jsx"), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Footer = dynamic(() => import("./components/Footer.jsx"), {
  loading: () => <div className="h-48 flex items-center justify-center">Loading...</div>
});

export default function Page() {
  return (
    <>
      <SEO />
      <GoogleAnalytics />
      <Analytics />
      <AuroraBackground>
        <Navbar />
        <Header />
      </AuroraBackground>
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <Aboutus />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <Service />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <Project />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen">Loading...</div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="h-48">Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}