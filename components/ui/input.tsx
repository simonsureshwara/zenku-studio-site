"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

const inputBase =
  "focus-ring h-10 w-full rounded-xl border border-default bg-surface px-3 text-base text-text placeholder:text-muted shadow-depth-1 ui-transition";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const autoId = React.useId();
    const resolvedId = id ?? autoId;
    const helperId = helperText ? `${resolvedId}-helper` : undefined;
    const errorId = error ? `${resolvedId}-error` : undefined;
    const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

    return (
      <div className="space-y-2">
        {label ? (
          <label htmlFor={resolvedId} className="text-sm font-medium leading-[1.3] text-text">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={resolvedId}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(inputBase, error ? "border-[var(--danger-solid)]" : "", className)}
          {...props}
        />
        {error ? (
          <p id={errorId} className="text-sm text-[var(--danger-text)]">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-sm text-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
