import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputStatus = "default" | "error" | "success";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  status?: InputStatus;
};

const statusClasses: Record<InputStatus, string> = {
  default:
    "border-border-default focus:border-primary-600 focus:ring-primary-100",
  error: "border-red-600 focus:border-red-600 focus:ring-red-100",
  success: "border-emerald-600 focus:border-emerald-600 focus:ring-emerald-100",
};

export function Input({
  status = "default",
  className,
  disabled,
  ...props
}: InputProps) {
  return (
    <input
      disabled={disabled}
      className={cn(
        "flex h-10 w-full rounded-md border bg-white px-3 text-sm text-slate-900 shadow-sm transition-colors duration-150",
        "placeholder:text-slate-400",
        "hover:border-slate-400",
        "focus:outline-none focus:ring-4",
        "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400",
        statusClasses[status],
        className,
      )}
      {...props}
    />
  );
}
