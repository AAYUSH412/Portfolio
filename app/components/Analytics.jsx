'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + searchParams.toString()
      
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Enhanced Google Analytics script component
export function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
        `}
      </Script>

      {/* Schema.org Enhanced Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://aayush-vaghela.vercel.app/#person",
                name: "Aayush Vaghela",
                givenName: "Aayush",
                familyName: "Vaghela",
                url: "https://aayush-vaghela.vercel.app",
                jobTitle: ["Expert Full Stack Developer", "MERN Stack Specialist", "JavaScript Expert"],
                description: "Expert Full Stack Developer specializing in MERN stack applications with expertise in React, Node.js, Express, MongoDB, AWS, Docker, and TypeScript.",
                knowsAbout: [
                  "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "TypeScript", 
                  "AWS", "Docker", "Kubernetes", "Next.js", "Tailwind CSS", "MySQL", 
                  "PostgreSQL", "GraphQL", "RESTful APIs", "Microservices", "DevOps"
                ],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Full Stack Developer",
                  occupationLocation: {
                    "@type": "City",
                    name: "Vadodara",
                    containedIn: {
                      "@type": "State", 
                      name: "Gujarat",
                      containedIn: {
                        "@type": "Country",
                        name: "India"
                      }
                    }
                  }
                },
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Parul University"
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Vadodara",
                  addressRegion: "Gujarat",
                  addressCountry: "India"
                },
                image: "https://aayush-vaghela.vercel.app/profile.jpeg",
                sameAs: [
                  "https://github.com/AAYUSH412",
                  "https://www.linkedin.com/in/aayush-vaghela/",
                  "https://x.com/Aayu412"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://aayush-vaghela.vercel.app/#website",
                url: "https://aayush-vaghela.vercel.app",
                name: "Aayush Vaghela Portfolio",
                description: "Portfolio website of Aayush Vaghela - Expert Full Stack Developer",
                inLanguage: "en-US"
              }
            ]
          })
        }}
      />
    </>
  )
}
