import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: {
    default: "Aayush Vaghela | Expert Full Stack Developer | MERN Stack Specialist | Vadodara",
    template: "%s | Aayush Vaghela - Full Stack Developer"
  },
  description:
    "🚀 Expert Full Stack Developer from Vadodara specializing in MERN stack, React.js, Node.js, Express.js, MongoDB, AWS, Docker & TypeScript. 10+ modern web applications delivered. Hire for scalable web solutions, e-commerce platforms, and enterprise applications.",
  keywords: [
    "Aayush Vaghela",
    "Full Stack Developer Vadodara",
    "MERN Stack Developer India", 
    "React Developer Vadodara",
    "Node.js Developer Gujarat",
    "JavaScript Expert India",
    "TypeScript Developer",
    "AWS Cloud Developer",
    "Docker DevOps Engineer",
    "MongoDB Database Expert",
    "Express.js API Developer",
    "Next.js Developer India",
    "Frontend Developer Vadodara",
    "Backend Developer Gujarat",
    "Web Development Services India",
    "E-commerce Development",
    "Enterprise Web Applications",
    "Scalable Web Solutions",
    "API Development Services",
    "Database Design Expert",
    "UI/UX Implementation",
    "Responsive Web Design",
    "Progressive Web Apps",
    "Microservices Architecture",
    "Cloud Deployment Services",
    "DevOps Automation",
    "Software Engineer Vadodara",
    "Portfolio Website Developer",
    "Custom Software Development",
    "React.js Consultant",
    "Node.js Consultant",
    "MERN Stack Consultant",
    "Web Application Development",
    "Modern Web Technologies",
    "Freelance Developer India",
    "Tech Consultant Gujarat",
    "Software Development Services",
    "Digital Solutions Provider",
    "Web Technology Expert"
  ],
  metadataBase: new URL("https://aayush-vaghela.vercel.app"),
  alternates: {
    canonical: "https://aayush-vaghela.vercel.app/",
  },
  openGraph: {
    title: "Aayush Vaghela | Expert Full Stack Developer | MERN Stack Specialist",
    description:
      "🚀 Expert Full Stack Developer specializing in MERN stack, React.js, Node.js, Express.js, MongoDB, AWS & Docker. 10+ modern web applications delivered. Building scalable enterprise solutions.",
    url: "https://aayush-vaghela.vercel.app",
    siteName: "Aayush Vaghela - Full Stack Developer Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Aayush Vaghela - Expert Full Stack Developer specializing in MERN Stack",
        type: "image/svg+xml"
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "India",
    emails: ["aayushvaghela12@gmail.com"],
    phoneNumbers: ["+91-XXXXXXXXXX"],
    faxNumbers: [],
    alternateLocale: ["hi_IN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Vaghela | Expert Full Stack Developer | MERN Stack",
    description:
      "🚀 MERN stack expert building scalable web applications. React.js, Node.js, MongoDB, AWS specialist. 10+ projects delivered.",
    images: ["/og-image.svg"],
    creator: "@Aayu412",
    site: "@Aayu412",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon-logo.png",
    shortcut: "/icon-logo.png",
    apple: "/icon-logo.png",
  },
  verification: {
    google: "zt9A_STXvRGIDDkpA_-eOL3Wx0dsu2o4UxtnZy9l2o4",
    yandex: "verification_code_here",
    yahoo: "yahoo_verification_code_here",
    other: {
      "msvalidate.01": "bing_verification_code_here",
      "p:domain_verify": "pinterest_verification_code_here"
    }
  },
  authors: [{ name: "Aayush Vaghela", url: "https://aayush-vaghela.vercel.app" }],
  creator: "Aayush Vaghela",
  publisher: "Aayush Vaghela",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    title: "Aayush Vaghela Portfolio",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/apple-touch-icon.png",
    ],
  },
  bookmarks: ["https://aayush-vaghela.vercel.app"],
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="zt9A_STXvRGIDDkpA_-eOL3Wx0dsu2o4UxtnZy9l2o4"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aayush Vaghela" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://aayush-vaghela.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aayush Vaghela",
              givenName: "Aayush",
              familyName: "Vaghela",
              url: "https://aayush-vaghela.vercel.app",
              jobTitle: "Expert Full Stack Developer",
              description: "Expert Full Stack Developer specializing in MERN stack applications with expertise in React, Node.js, Express, MongoDB, AWS, Docker, and TypeScript. Building scalable enterprise solutions.",
              knowsAbout: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "TypeScript",
                "AWS",
                "Docker",
                "Kubernetes",
                "Next.js",
                "Tailwind CSS",
                "MySQL",
                "PostgreSQL",
                "GraphQL",
                "RESTful APIs",
                "Microservices",
                "DevOps",
                "CI/CD",
                "Git",
                "Redis",
                "Elasticsearch",
                "Socket.io",
                "Firebase",
                "Vercel",
                "Netlify"
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
                name: "Parul University",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Vadodara",
                  addressRegion: "Gujarat",
                  addressCountry: "India"
                }
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
                "https://x.com/Aayu412",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Self-employed"
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  name: "Full Stack Web Development",
                  description: "Building complete web applications using the MERN stack with scalable architecture and secure APIs"
                },
                {
                  "@type": "Offer", 
                  name: "Frontend Development",
                  description: "Creating dynamic and responsive interfaces using React.js and Next.js for seamless user experiences"
                },
                {
                  "@type": "Offer",
                  name: "Backend Development", 
                  description: "Developing RESTful APIs and server-side applications with Node.js, Express, and MongoDB"
                },
                {
                  "@type": "Offer",
                  name: "Cloud Deployment & CI/CD",
                  description: "Automating and deploying applications using AWS, Azure, Jenkins, and Docker for streamlined delivery"
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aayush Vaghela Portfolio",
              url: "https://aayush-vaghela.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aayush-vaghela.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} font-sans antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
