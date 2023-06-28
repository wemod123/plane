// types
import { forwardRef } from "react";
import { ButtonProps } from "./type";

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, disabled, children, loading = false, size = "sm", outline = false, ...rest },
    ref
  ) => (
    <button
      className={`border border-brand-accent-100 inline-flex items-center text-white font-medium rounded-md duration-300 ${
        size === "sm"
          ? "px-3 py-1.5 text-xs gap-1.5"
          : size === "md"
          ? "px-4 py-2.5 text-sm gap-1.5"
          : "px-5 py-3 text-base gap-2"
      } ${loading ? "cursor-wait" : ""} ${className}`}
      disabled={disabled || loading}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  )
);

PrimaryButton.displayName = "PrimaryButton";
