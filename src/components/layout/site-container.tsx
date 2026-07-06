import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SiteContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function SiteContainer({
  children,
  className,
  ...props
}: SiteContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
