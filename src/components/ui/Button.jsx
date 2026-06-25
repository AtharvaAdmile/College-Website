import React from 'react';

const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const baseClasses = "inline-block text-center font-medium border transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900";
  
  const variants = {
    primary: "bg-slate-900 text-white border-slate-900 hover:bg-black",
    secondary: "bg-slate-100 text-slate-900 border-slate-100 hover:bg-slate-200",
    outline: "bg-transparent text-slate-900 border-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-600 border-transparent hover:bg-slate-50 hover:text-slate-900"
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
