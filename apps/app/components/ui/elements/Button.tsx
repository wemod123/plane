import React from "react";
import { Spinner } from "components/ui";
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
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  loading = false,
}: IButton) => {
  const getButtonClasses = () => {
    const baseClasses =
      "rounded outline-none p-2 transition duration-200 ease-in-out flex gap-2 items-center justify-center";
    const sizeClasses = {
      sm: "text-[13px] py-1.5 px-3",
      md: "text-[14px] py-2.5 px-3",
      lg: "text-[16px] py-3 px-5",
    };
    const variantClasses = {
      primary: disabled
        ? "bg-opacity-50 bg-brand-accent cursor-not-allowed text-white"
        : "bg-brand-accent hover:bg-opacity-90 text-white",
      "primary-lite": disabled
        ? "bg-[#ECF1FF] text-brand-accent opacity-50 cursor-not-allowed"
        : "bg-[#ECF1FF] text-brand-accent hover:bg-brand-accent hover:text-white",
      "primary-outline": disabled
        ? "border border-brand-accent text-brand-accent opacity-50 cursor-not-allowed"
        : "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
      "primary-text": disabled
        ? "text-brand-accent hover:bg-[#ECF1FF] cursor-not-allowed opacity-60"
        : "text-brand-accent hover:bg-[#ECF1FF]",
      secondary: disabled
        ? "bg-gray-400 text-white cursor-not-allowed opacity-60"
        : "bg-gray-400 hover:bg-gray-500 text-white",
      "secondary-lite": disabled
        ? "bg-gray-200 text-gray-800 cursor-not-allowed opacity-60"
        : "bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-white",
      "secondary-outline": disabled
        ? "border border-gray-300 text-gray-300 cursor-not-allowed"
        : "border border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white",
      "secondary-text": disabled
        ? "text-gray-600 hover:bg-gray-200 cursor-not-allowed opacity-60"
        : "text-gray-600 hover:bg-gray-200 hover:text-gray-700",
      danger: disabled
        ? "bg-red-600 cursor-not-allowed text-white opacity-60"
        : "bg-red-600 hover:bg-red-500 text-white",
      "danger-lite": disabled
        ? "bg-red-200 text-red-500 cursor-not-allowed opacity-60"
        : "bg-red-200 text-red-500 hover:text-white hover:bg-red-500",
      "danger-outline": disabled
        ? "border border-red-300 text-red-300 cursor-not-allowed"
        : "border border-red-500 text-red-500 hover:bg-red-600 hover:text-white",
      "danger-text": disabled
        ? "text-red-300 hover:bg-red-300 hover:text-white cursor-not-allowed"
        : "text-red-700 hover:bg-red-100 hover:text-red-700",
      success: disabled
        ? "bg-green-300 cursor-not-allowed text-white"
        : "bg-green-500 hover:bg-green-600 text-white",
      "success-lite": disabled
        ? "bg-green-200 text-green-500 cursor-not-allowed opacity-60"
        : "bg-green-200 text-green-500 hover:text-white hover:bg-green-500",
      "success-outline": disabled
        ? "border border-green-300 text-green-300 cursor-not-allowed"
        : "border border-green-500 text-green-500 hover:bg-green-600 hover:text-white",
      "success-text": disabled
        ? "text-green-300 hover:bg-green-300 hover:text-white cursor-not-allowed"
        : "text-green-600 hover:bg-[#C8E6C9] hover:text-green-700",
      warning: disabled
        ? "bg-yellow-500 text-white cursor-not-allowed opacity-60"
        : "bg-yellow-500 hover:bg-yellow-600 text-white",
      "warning-lite": disabled
        ? "bg-yellow-200 text-yellow-500 cursor-not-allowed opacity-60"
        : "bg-yellow-200 text-yellow-500 hover:text-white hover:bg-yellow-500",
      "warning-outline": disabled
        ? "border border-yellow-300 text-yellow-300 cursor-not-allowed"
        : "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white",
      "warning-text": disabled
        ? "text-yellow-500 hover:bg-yellow-100 hover:text-yellow-500 cursor-not-allowed opacity-60"
        : "text-yellow-500 hover:bg-yellow-100 hover:text-yellow-500",
      null: "", // Default class for null variant
    };

    const baseClass = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant || "primary"]}`;
    return `${baseClass} ${className}`.trim();
  };

  return (
    <button type={type} className={getButtonClasses()} onClick={onClick} disabled={disabled}>
      {loading && (
        <div className="animate-spin">
          {/* <Spinner
            height="16"
            width="16"
            fill={
              variant?.includes("success")
                ? "#1B5E20"
                : variant?.includes("danger")
                ? "#B71C1C"
                : variant?.includes("secondary")
                ? "#424242"
                : variant?.includes("primary") && "#0D47A1"
            }
            backgroundColor={
              variant?.includes("success")
                ? "#C8E6C9"
                : variant?.includes("danger")
                ? "#FFCDD2"
                : variant?.includes("secondary")
                ? "#C0C0C0"
                : variant?.includes("primary") && "#BBDEFB"
            }
          /> */}
        </div>
      )}
      <div>{children}</div>
    </button>
  );
};

export default Button;
