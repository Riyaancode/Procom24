import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export interface ITypography {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "accent";
  variant?: "title" | "heading" | "subheading" | "xl" | "lg";
  noBold?: boolean;
  block?: boolean;
}

export const Typography: React.FC<ITypography> = ({
  color,
  variant,
  className = "",
  noBold = false,
  block = false,
  children,
}) => (
  <span
    className={twMerge(
      cn({
        block: block,
        "mx-1 inline-block": !block,
        "font-semibold": !noBold,
        "text-primary": color === "primary",
        "text-slate-800": color === "secondary",
        "text-accent": color === "accent",
        "text-4xl !leading-tight md:text-5xl xl:text-7xl font-bold":
          variant === "title",
        "text-3xl md:text-5xl text-slate-800": variant === "heading",
        "text-2xl md:text-3xl text-slate-800": variant === "subheading",
        "text-2xl text-slate-800": variant === "xl",
        "text-lg text-slate-800 md:text-xl": variant === "lg",
      }),
      className
    )}
  >
    {children}
  </span>
);
