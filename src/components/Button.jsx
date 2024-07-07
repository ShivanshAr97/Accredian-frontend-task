import React from 'react';

const Button = ({ label, onClick, style, disabled,className, ...props }) => {
    const defaultClasses = "bg-green-500 px-4 py-1 font-medium text-lg rounded-md"
  return (
    <button
      onClick={onClick}
      style={{ ...style }}
      className={`${defaultClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
