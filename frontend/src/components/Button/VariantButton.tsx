import React from "react";

interface ButtonProps {
  variant?: "outline" | "filled" | "whiteFilled" | "whiteOutline";
  size?: "sm" | "md" | "lg";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

const VariantButton = ({
  variant = "filled",
  size = "md",
  text = "button",
  className,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const baseClassname =
    "font-medium rounded-md border-2 duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-300";

  const variantClassName = {
    filled:
      "bg-button text-white border-button hover:bg-transparent hover:text-button",
    outline: "border-button text-button hover:bg-button hover:text-white",
    whiteFilled:
      "bg-white text-button border-white hover:bg-transparent hover:text-white hover:border-white",
    whiteOutline: "border-white text-white hover:bg-white hover:text-button",
  };

  const sizeClassName = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
  };

  const buttonSize = sizeClassName[size];
  const buttonVariant = variantClassName[variant];

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseClassname} ${
        disabled && "opacity-50 cursor-not-allowed"
      } ${buttonSize} ${buttonVariant} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default VariantButton;
