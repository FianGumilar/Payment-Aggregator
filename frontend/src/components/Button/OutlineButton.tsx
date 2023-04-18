import React from "react";

interface Props {
  text: string;
  white?: boolean;
  onClick?: () => void;
}

const OutlineButton = ({ text = "button", white = false, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        white
          ? `rounded-md  border-2 text-white border-white duration-200 hover:bg-white px-4 py-2 font-medium hover:text-parargaph`
          : `rounded-md  border-2 text-button border-button duration-200 hover:bg-button px-4 py-2 font-medium hover:text-white`
      }
    >
      {text}
    </button>
  );
};

export default OutlineButton;
