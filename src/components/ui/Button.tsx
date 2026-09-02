import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  icon,
  className = "",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#007799] focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-7 py-3.5 text-base sm:text-lg gap-2.5 font-bold",
  };

  const variantStyles = {
    primary: "bg-[#007799] text-white hover:bg-[#005f7a] shadow-[0_6px_20px_rgba(0,119,153,0.3)] hover:shadow-[0_10px_25px_rgba(0,119,153,0.4)] hover:-translate-y-0.5 border border-[#0088b3]",
    secondary: "bg-[#e0f7f5] text-[#007799] hover:bg-[#cbf1ee] border border-[#b2ebe5] shadow-xs hover:-translate-y-0.5",
    outline: "bg-transparent text-[#007799] border-2 border-[#007799] hover:bg-[#007799] hover:text-white hover:shadow-md hover:-translate-y-0.5",
    accent: "bg-[#d97706] text-white hover:bg-[#b45309] shadow-[0_6px_20px_rgba(217,119,6,0.3)] hover:shadow-[0_10px_25px_rgba(217,119,6,0.4)] hover:-translate-y-0.5 border border-amber-500/30",
    ghost: "bg-transparent text-[#0f2942] hover:bg-[#e0f7f5] hover:text-[#007799]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
};
