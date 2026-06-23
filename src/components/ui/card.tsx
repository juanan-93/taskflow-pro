import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border-subtle bg-surface-card p-6 shadow-elevation-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
