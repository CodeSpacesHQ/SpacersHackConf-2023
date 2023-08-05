import React from "react";

interface InputProps {
  isOpen: boolean;
  color: string;
}
const HamburgerIcon: React.FC<InputProps> = ({ isOpen, color }) => {
  const listStyles = "h-[3px] duration-300 transform transition-transform";

  return (
    <div className="relative flex flex-col items-end">
      <div
        id="left"
        className={`${listStyles} w-7 ${isOpen && "rotate-45"}`}
        style={{ backgroundColor: color }}
      ></div>
      <div
        id="hide"
        className={`${listStyles} w-[21px] mt-[6px] ${isOpen && "hidden"}`}
        style={{ backgroundColor: color }}
      ></div>
      <div
        id="right"
        className={`${listStyles} ${
          isOpen ? "-rotate-45 absolute top-0 w-7" : "w-[14px] mt-[6px]"
        }`}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default HamburgerIcon;
