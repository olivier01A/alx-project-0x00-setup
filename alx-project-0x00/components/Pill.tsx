
const Pill: React.FC = () => {
  return (
    <div className=" flex justify-center  items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className=" text-sm ">Title</p>
    </div>
  )
}

export default Pill;




import React from "react";

interface PillProps {
  label: string;
  variant?: "default" | "success" | "warning" | "error";
}

const Pill: React.FC<PillProps> = ({ label, variant = "default" }) => {
  const baseClasses =
    "px-3 py-1 rounded-full text-sm font-medium inline-block";
  const variants: Record<typeof variant, string> = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
    error: "bg-red-200 text-red-800",
  };

  return <span className={`${baseClasses} ${variants[variant]}`}>{label}</span>;
};

export default Pill;

["import { PillProps } from", "@/interfaces", "{title}"]
// components/Pill.tsx
import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <span className="px-3 py-1 text-sm font-medium bg-gray-200 rounded-full">
      {title}
    </span>
  );
};

export default Pill;

// interfaces/index.ts
export interface PillProps {
  title: string;
}


