import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className }) => {
  return (
    <button
      className={`px-4 py-2 font-medium bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
