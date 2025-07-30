import { Code, Database, Globe, Layers, Monitor, Smartphone } from "lucide-react";

export const skillCategories = [
    {
      title: "WebApp Development",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      skills: ["React", "Node.js", "Express", "Next.js", "TypeScript", "JWT Authentication"],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Database",
      icon: <Database className="w-8 h-8 text-green-600" />,
      skills: ["MySQL", "MongoDB"],
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Blockchain",
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      skills: ["Ethers.js/Web3.js", "Solidity"],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Cross-Platform Apps",
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      skills: ["React Native (Expo)", "RevenueCat for In-App Purchases", "Firebase", "Play Store", "App Store"],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      title: "Desktop Applications",
      icon: <Monitor className="w-8 h-8 text-indigo-600" />,
      skills: ["Java", "Java Swing"],
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-red-600" />,
      skills: ["C/C++", "JavaScript", "TypeScript", "Java", "Solidity"],
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    }
  ];