import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FormField({
  label,
  required,
  hint,
  error,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm font-medium leading-[1.3] text-text">
        {label}
        {required ? <span className="ml-1 text-[var(--danger-text)]">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-sm text-[var(--danger-text)]">{error}</p>
      ) : hint ? (
        <p className="text-sm text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

