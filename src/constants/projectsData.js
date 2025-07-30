import { Bot, Briefcase, Globe, Palette, Smartphone, Zap } from "lucide-react";

export const projects = [
    
    {
        id: 1,
        title: "Inner Studios",
        category: "Startup",
        description: "Co-founded startup where I lead software development while my co-founder handles marketing. Building innovative digital solutions and tech products.",
        technologies: ["Various Tech Stacks", "Startup Operations", "Team Leadership"],
        link: "https://www.innerstudios.tech/",
        type: "website",
        featured: true,
        color: "indigo",
        icon: <Briefcase className="w-6 h-6" />
    },
      
    {
        id: 2,
        title: "Subconscious AI App",
        category: "Mobile App",
        description: "Cross-platform mobile app for self-discovery and subconscious belief transformation. Uses AI-driven insights, personalized exercises, and reflective journaling for personal growth.",
        technologies: ["React Native", "Expo", "AI Integration", "Psychology", "Firebase", "RevenueCat"],
        link: "https://subconsciousai.innerstudios.tech/",
        type: "website",
        featured: true,
        color: "pink",
        icon: <Smartphone className="w-6 h-6" />
      },
    {
      id: 3,
      title: "dBKash",
      category: "Blockchain",
      description: "A cutting-edge decentralized mobile financial web application for Bangladesh. Leverages blockchain technology to provide faster transactions, safer payments, and cheaper financial services.",
      technologies: ["Next.js", "Ethers.js", "JWT Auth", "Nodemailer", "Resend"],
      link: "https://github.com/TSRohit99/dbkash",
      type: "github",
      featured: true,
      color: "blue",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 4,
      title: "ArbiWinz",
      category: "Blockchain",
      description: "Decentralized lottery platform on Arbitrum network with Chainlink VRF for provably fair gaming. Features guaranteed fair play, secure transactions, and instant payouts.",
      technologies: ["Next.js", "Ethers.js", "Chainlink VRF", "Arbitrum", "ARBISCAN API"],
      link: "https://github.com/TSRohit99/arbiwinz",
      type: "github",
      featured: true,
      color: "purple",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Sylheti Bloggers",
      category: "Web Application",
      description: "A vibrant blogging platform for the Sylheti community. Features CRUD operations, multi-image support, community interactions with likes, comments, and admin dashboard.",
      technologies: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      link: "https://github.com/TSRohit99/Sylheti_Bloggers",
      type: "github",
      featured: false,
      color: "green",
      icon: <Palette className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Telegram Bot for WINR",
      category: "Automation",
      description: "Real-time Telegram bot that monitors Arbitrum blockchain for WINR token transactions. Fetches events from Uniswap v3 and Camelot routers, sending buy alerts instantly.",
      technologies: ["Node.js", "Web3.js", "Telegram Bot API", "Arbitrum"],
      link: "https://github.com/TSRohit99/telegrambot-for-WINR",
      type: "github",
      featured: false,
      color: "orange",
      icon: <Bot className="w-6 h-6" />
    },


  ];
