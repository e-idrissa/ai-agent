import Link from "next/link"
import AgentPulse from "./agent-pulse"
import { cn } from "@/lib/utils"

type LogoProps = {
  variant?: "blue" | "white"
}

export const Logo = ({ variant = "blue" }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-4 h-16">
      <AgentPulse size={"sm"} color={variant} />
      <h1 className={cn("text-2xl font-bold", variant === "white" ? "text-white" : "gradient-text")}>iTube</h1>
    </Link>
  )
}
