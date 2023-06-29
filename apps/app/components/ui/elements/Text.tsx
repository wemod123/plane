import React from "react";

interface TextProps {
  variant?:
    | "dl"
    | "ds"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "pl"
    | "pm"
    | "ps"
    | "px"
    | "ol"
    | "os";
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  variant = "pl",
  fontWeight = "normal",
  children,
  className,
}) => {
  const fontSize = getFontSize(variant);
  const lineHeight = getLineHeight(variant);
  const tracking = getTracking(variant);
  const fontWeightClass = getFontWeightClass(fontWeight);

  return (
    <p
      className={`font-sans ${fontSize} ${lineHeight} ${tracking} ${fontWeightClass} ${className}`}
    >
      {children}
    </p>
  );
};

// Helper functions to convert the variant sizes to Tailwind classes
const getFontSize = (variant: string) => {
  switch (variant) {
    case "dl":
      return "text-7xl";
    case "ds":
      return "text-5xl";
    case "h1":
      return "text-4xl";
    case "h2":
      return "text-3xl";
    case "h3":
      return "text-2xl";
    case "h4":
      return "text-xl";
    case "h5":
      return "text-lg";
    case "h6":
      return "text-base";
    case "pl":
      return "text-lg";
    case "pm":
      return "text-base";
    case "ps":
      return "text-sm";
    case "px":
      return "text-xs";
    case "ol":
      return "text-sm uppercase";
    case "os":
      return "text-xs uppercase";
    default:
      return "";
  }
};

const getLineHeight = (variant: string) => {
  switch (variant) {
    case "dl":
      return "leading-[56px]";
    case "ds":
      return "leading-[48px]";
    case "h1":
      return "leading-[48px]";
    case "h2":
      return "leading-[46px]";
    case "h3":
      return "leading-[40px]";
    case "h4":
      return "leading-[36px]";
    case "h5":
      return "leading-[32px]";
    case "h6":
      return "leading-[28px]";
    case "pl":
      return "leading-[28px]";
    case "pm":
      return "leading-[24px]";
    case "ps":
      return "leading-[20px]";
    case "px":
      return "leading-[20px]";
    default:
      return "";
  }
};

function getTracking(variant: string): string {
  switch (variant) {
    case "dl":
    case "ds":
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return "tracking-wide";
    default:
      return "";
  }
}

function getFontWeightClass(fontWeight: string): string {
  switch (fontWeight) {
    case "light":
      return "font-light";
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    default:
      return "";
  }
}

export default Text;
