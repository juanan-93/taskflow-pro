import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  children: ReactNode;
  helperText?: string;
  errorText?: string;
  className?: string;
};

export function Field({
  children,
  helperText,
  errorText,
  className,
}: FieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {children}

      {errorText ? (
        <p className="text-sm leading-5 text-red-700">{errorText}</p>
      ) : helperText ? (
        <p className="text-sm leading-5 text-slate-500">{helperText}</p>
      ) : null}
    </div>
  );
}
