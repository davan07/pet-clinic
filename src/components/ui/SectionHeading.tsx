import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClass = align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl";

  return (
    <div className={`mb-10 sm:mb-14 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-3.5 text-xs font-extrabold tracking-widest text-[#007799] uppercase bg-[#e0f7f5] border border-[#b2ebe5] rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#007799]" />
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f2942] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#476582] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
