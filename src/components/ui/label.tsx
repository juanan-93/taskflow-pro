import type { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
  isRequired?: boolean;
};

export function Label({
  children,
  isRequired = false,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-semibold leading-none text-slate-800",
        className,
      )}
      {...props}
    >
      {children}

      {isRequired ? (
        <span className="ml-1 text-red-600" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}
