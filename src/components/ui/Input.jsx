import React from 'react';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  className = ''
}) => {
  const isTextarea = type === 'textarea';

  const baseClasses = "w-full p-2.5 border bg-white rounded-md transition-shadow duration-200";
  const stateClasses = error 
    ? "border-red-600 text-red-900 focus:outline-none focus:ring-2 focus:ring-red-600/50" 
    : "border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900";

  return (
    <div className={`mb-4 w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block font-medium text-black mb-1">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={`${baseClasses} ${stateClasses} resize-y`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={`${baseClasses} ${stateClasses}`}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
