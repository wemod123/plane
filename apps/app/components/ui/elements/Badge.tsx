import React from "react";

interface IButton {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "primary-lite"
    | "primary-outline"
    | "primary-text"
    | "secondary"
    | "secondary-lite"
    | "secondary-outline"
    | "secondary-text"
    | "danger"
    | "danger-lite"
    | "danger-outline"
    | "danger-text"
    | "success"
    | "success-lite"
    | "success-outline"
    | "success-text"
    | "warning"
    | "warning-lite"
    | "warning-outline"
    | "warning-text"
    | null;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  loading = false,
}: IButton) => {
  const getButtonClasses = () => {
    const baseClasses =
      "rounded outline-none p-2 transition duration-200 ease-in-out flex gap-2 items-center justify-center";
    const sizeClasses = {
      sm: "text-[12px] py-0.5 px-2.5",
      md: "text-[14px] py-1 px-3",
      lg: "text-[14px] py-1.5 px-4",
    };
    const variantClasses = {
      primary: "bg-brand-accent text-white",
      "primary-lite": "bg-[#ECF1FF] text-brand-accent",
      "primary-outline": "border border-brand-accent text-brand-accent",
      "primary-text": "text-brand-accent",
      secondary: "bg-gray-400 text-white",
      "secondary-lite": "bg-gray-200 text-gray-800",
      "secondary-outline": "border border-gray-400 text-gray-600",
      "secondary-text": "text-gray-600",
      danger: "bg-red-600 text-white",
      "danger-lite": "bg-red-200 text-red-500",
      "danger-outline": "border border-red-500 text-red-500",
      "danger-text": "text-red-700",
      success: "bg-green-500 text-white",
      "success-lite": "bg-green-200 text-green-500",
      "success-outline": "border border-green-500 text-green-500",
      "success-text": "text-green-600",
      warning: "bg-yellow-500 text-white",
      "warning-lite": "bg-yellow-200 text-yellow-500",
      "warning-outline": "border border-yellow-500 text-yellow-500",
      "warning-text": "text-yellow-500",
      null: "", // Default class for null variant
    };

    const baseClass = `${baseClasses} ${sizeClasses[size]} ${
      variantClasses[variant || "primary"]
    } rounded-full`;
    return `${baseClass} ${className}`.trim();
  };

  return (
    <div className={getButtonClasses()}>
      <div>{children}</div>
    </div>
  );
};

export default Badge;
