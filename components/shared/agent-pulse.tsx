type AgentPulseProps = {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "purple" | "white";
};

const AgentPulse = ({ size = "md", color = "blue" }: AgentPulseProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const colorClasses = {
    blue: "bg-blue-500 shadow-[0_0_8px_4px_rgba(59,130,246,0.5)]",
    green: "bg-green-500 shadow-[0_0_8px_4px_rgba(34,197,64,0.5)]",
    purple: "bg-purple-500 shadow-[0_0_8px_4px_rgba(168,85,247,0.5)]",
    white: "bg-white shadow-[0_0_8px_4px_rgba(255,255,255,0.5)]",
  };
  

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
    />
  );
};

export default AgentPulse;
