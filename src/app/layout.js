import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohit Sen | Portfolio - Software Engineer & Full Stack Developer",
  keywords: [
    "Rohit Sen",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Blockchain Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Software Development",
    "Web Development",
  ],
  description: "Rohit Sen's personal portfolio showcasing skills, projects, and contact information. Software Engineer specializing in full-stack web development, blockchain, and mobile applications.",
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Rohit Sen | Portfolio - Software Engineer & Full Stack Developer",
    description: "Rohit Sen's personal portfolio showcasing skills, projects, and contact information. Software Engineer specializing in full-stack web development, blockchain, and mobile applications.",
    url: "https://rohit-sen.innerstudios.tech/", // Replace with your actual domain
    siteName: "Rohit Sen Portfolio",
    images: [
      {
        url: "/linkdinProfile.jpeg", // Image from public/images/ folder
        width: 1200,
        height: 630,
        alt: "Rohit Sen - Software Engineer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Rohit Sen | Portfolio - Software Engineer & Full Stack Developer",
    description: "Rohit Sen's personal portfolio showcasing skills, projects, and contact information. Software Engineer specializing in full-stack web development, blockchain, and mobile applications.",
    creator: "@ro_hitbro", 
    images: ["/linkdinProfile.jpeg"], 
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  

  // Author information
  authors: [{ name: "Rohit Sen" }],
  creator: "Rohit Sen",
  publisher: "Rohit Sen",

  // Additional tags
  category: "Technology",
  classification: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and app icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Force light mode */}
        <meta name="color-scheme" content="light" />
        
        {/* Additional meta tags for better SEO and social sharing */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* Canonical URL - replace with your actual domain */}
        <link rel="canonical" href="https://rohit-sen.innerstudios.tech/" />
        
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}