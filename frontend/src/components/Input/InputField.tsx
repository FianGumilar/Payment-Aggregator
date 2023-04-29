import React from "react";

interface Props {
  label?: string;
  type: "text" | "email" | "password" | "search";
  name: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
  onChange?: (value: string) => void;
}

const Input = ({
  label,
  type = "text",
  placeholder = "placeholder",
  required = true,
  icon,
  className,
  name,
  onChange,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const handleIconClick = () => {
    inputRef.current?.focus();
  };

  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="font-medium">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          required={required}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          ref={inputRef}
          className={`${
            icon ? "pl-8 pr-1 w-full" : "w-full"
          } ${className} bg-background-secondary px-1 rounded-md border border-greyBorder text-inputText py-1 outline-none`}
        />
        {icon && (
          <div
            onClick={handleIconClick}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-inputText cursor-text"
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
