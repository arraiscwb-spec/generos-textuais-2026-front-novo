import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "accent";
  size?: "default" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
}

export function CTAButton({ 
  children, 
  href, 
  variant = "primary", 
  size = "default", 
  className,
  showIcon = true,
  ...props 
}: CTAButtonProps) {
  const variants = {
    primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90",
    secondary: "bg-white text-primary border-2 border-primary/20 hover:border-primary/50 hover:bg-primary/5",
    accent: "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02]",
  };

  const sizes = {
    default: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg font-bold rounded-2xl",
    xl: "px-10 py-5 text-xl font-extrabold rounded-2xl uppercase tracking-wide",
  };

  const content = (
    <div className="flex items-center justify-center gap-2">
      <span>{children}</span>
      {showIcon && <ArrowRight className="w-5 h-5" />}
    </div>
  );

  const baseClasses = cn(
    "inline-flex items-center justify-center transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
