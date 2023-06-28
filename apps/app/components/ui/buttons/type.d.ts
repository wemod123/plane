import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};
