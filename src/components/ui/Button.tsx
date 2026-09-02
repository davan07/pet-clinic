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
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-7 py-3 text-base sm:text-lg gap-2.5 font-semibold shadow-sm hover:shadow-md",
  };

  const variantStyles = {
    primary: "bg-[#1b4332] text-white hover:bg-[#0f281e] active:bg-[#081c15]",
    secondary: "bg-[#f0f7f4] text-[#1b4332] hover:bg-[#e2ece9] border border-[#2d6a4f]/20",
    outline: "bg-transparent text-[#1b4332] border-2 border-[#1b4332] hover:bg-[#1b4332] hover:text-white",
    accent: "bg-[#d97706] text-white hover:bg-[#b45309] active:bg-[#92400e] shadow-sm",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100/80 hover:text-gray-900",
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
