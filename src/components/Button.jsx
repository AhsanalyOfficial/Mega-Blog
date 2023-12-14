import React from "react";
const Button = ({
  children,
  width = "100px",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <>
      <button
        className={`px-4 py-2 rounded-lg ${className} ${width} ${bgColor}${textColor} ${type}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
