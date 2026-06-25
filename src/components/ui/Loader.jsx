import React from 'react';

const Loader = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div 
        className={`rounded-full border-slate-200 border-t-primary-600 animate-spin ${sizes[size]}`}
      ></div>
    </div>
  );
};

export default Loader;
