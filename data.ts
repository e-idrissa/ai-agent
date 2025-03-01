import {
  Brain,
  FileText,
  Github,
  ImageIcon,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
  Twitter,
  Video,
} from "lucide-react";

export const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Gain deep insights from your videos with AI-driven analysis, titles, and keys, all in seconds.",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Smart Transcriptions",
    description:
      "Convert speech to text with exceptional accuracy and speed using AI-powered transcriptions.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "AI Thumbnail Generator",
    description:
      "Create eye-catching thumbnails effortlessly with AI-powered design optimization.",
    icon: ImageIcon,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "AI Shot Script",
    description:
      "Generate structured shot-by-shot scripts with AI to streamline your video storytelling.",
    icon: Video,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    title: "AI-Powered Discussions",
    description:
      "Engage in meaningful AI-driven conversations to analyze and enhance your video content.",
    icon: Sparkles,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Summary Generation",
    description:
      "Instantly generate concise and insightful summaries of your videos using AI.",
    icon: FileText,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export const steps = [
  {
    title: "1. Upload Your Video",
    description: "Upload your YouTube video URL and let your agent get to work.",
    icon: Video
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your personal AI agent is analyzes every aspect of your video content.",
    icon: Brain
  },
  {
    title: "3. Recieve Intellignece",
    description: "Get actionable insights and strategic recommendations from your video.",
    icon: MessageSquare
  },
];

export const socials = [
    {
        icon: Github,
        label: "GitHub",
        link: "https://github.com/e-idrissa/ai-agent"
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/e-idrissa"
    },
    {
        icon: Twitter,
        label: "Twitter",
        link: "https://x.com/eddy_idrissa"
    },
]
