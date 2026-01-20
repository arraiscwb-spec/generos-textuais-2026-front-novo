import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "purple";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-slate-50",
    purple: "bg-primary/5",
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24 overflow-hidden relative", 
        backgrounds[background],
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={cn("mb-12 md:mb-16 max-w-3xl", centered && "mx-auto text-center")}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
