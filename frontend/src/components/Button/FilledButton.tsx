import React from "react";

interface Props {
  text: string;
  white?: boolean;
  onClick?: () => void;
}

const FilledButton = ({ text = "button", white = false, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        white
          ? `bg-white rounded-md  hover:bg-transparent border-2 border-white duration-200 hover:border-white px-4 py-2 font-medium text-parargaph hover:text-white`
          : `bg-button rounded-md   hover:bg-transparent border-2 border-button duration-200 hover:border-button px-4 py-2 font-medium text-white hover:text-button`
      }
    >
      {text}
    </button>
  );
};

export default FilledButton;
