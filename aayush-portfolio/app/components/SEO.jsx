import React from 'react';
import Head from 'next/head';

export default function SEO() {
  return (
    <>
      <Head>
        {/* Enhanced SEO meta tags */}
        <meta name="keywords" content="Aayush Vaghela, Expert Full Stack Developer, MERN Stack Specialist, React Developer Vadodara, Node.js Developer Gujarat, JavaScript Expert, TypeScript Developer, AWS Cloud Expert, Docker DevOps, MongoDB Database, Express.js API, Next.js Developer, Portfolio Website, Web Development Services, E-commerce Development, Enterprise Applications, Scalable Web Solutions, Frontend Development, Backend Development, API Development, Database Design, Responsive Design, Progressive Web Apps, Microservices Architecture, Cloud Deployment, Software Engineer Vadodara, Freelance Developer India, Tech Consultant Gujarat, React.js Consultant, Node.js Consultant, MERN Stack Consultant, Modern Web Technologies, Custom Software Development, Digital Solutions Provider, Web Technology Expert" />
        <meta name="news_keywords" content="Aayush Vaghela, Full Stack Developer, MERN Stack, Web Development, Technology, Programming, React, Node.js, JavaScript" />
        
        {/* Enhanced Dublin Core metadata */}
        <meta name="DC.title" content="Aayush Vaghela - Expert Full Stack Developer" />
        <meta name="DC.creator" content="Aayush Vaghela" />
        <meta name="DC.subject" content="Full Stack Development, MERN Stack, Web Development, React.js, Node.js, JavaScript" />
        <meta name="DC.description" content="Expert Full Stack Developer specializing in MERN stack applications with 10+ modern web applications delivered" />
        <meta name="DC.publisher" content="Aayush Vaghela" />
        <meta name="DC.contributor" content="Aayush Vaghela" />
        <meta name="DC.date" content={new Date().toISOString()} />
        <meta name="DC.type" content="Text" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://aayush-vaghela.vercel.app" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Vadodara, Gujarat, India" />
        <meta name="DC.rights" content="Copyright 2025 Aayush Vaghela" />
        
        {/* Social Media Tags for better sharing */}
        <meta property="article:author" content="Aayush Vaghela" />
        <meta property="article:published_time" content="2023-12-01" />
        <meta property="article:modified_time" content={new Date().toISOString()} />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="Full Stack Development, MERN Stack, React, Node.js, JavaScript, TypeScript, AWS, Docker" />
        
        {/* LinkedIn specific tags */}
        <meta property="linkedin:owner" content="aayush-vaghela" />
        
        {/* Enhanced Geo Tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Vadodara, Gujarat" />
        <meta name="geo.position" content="22.3072;73.1812" />
        <meta name="ICBM" content="22.3072, 73.1812" />
        
        {/* Enhanced Browser Config */}
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Aayush Vaghela" />
        
        {/* Performance and indexing hints */}
        <meta name="prerender" content="index,follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="classification" content="portfolio, technology, programming" />
        <meta name="category" content="technology" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        
        {/* Rich snippets support */}
        <meta itemProp="name" content="Aayush Vaghela - Expert Full Stack Developer" />
        <meta itemProp="description" content="Expert Full Stack Developer specializing in MERN stack applications with expertise in React, Node.js, Express, MongoDB, AWS, Docker, and TypeScript" />
        <meta itemProp="image" content="https://aayush-vaghela.vercel.app/profile.jpeg" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Additional SEO enhancements */}
        <meta name="language" content="English" />
        <meta name="copyright" content="Aayush Vaghela" />
        <meta name="designer" content="Aayush Vaghela" />
        <meta name="reply-to" content="aayushvaghela12@gmail.com" />
        <meta name="owner" content="Aayush Vaghela" />
        <meta name="url" content="https://aayush-vaghela.vercel.app" />
        <meta name="identifier-URL" content="https://aayush-vaghela.vercel.app" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Aayush Vaghela - Full Stack Developer Portfolio" />
        <meta name="Category" content="Business, Technology, Programming" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="subtitle" content="MERN Stack Developer & JavaScript Expert" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="medium" content="website" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="preconnect" href="https://ik.imagekit.io" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
      </Head>
    </>
  );
}