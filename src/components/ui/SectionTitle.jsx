import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-8 ${alignments[align]} ${className}`}>
      {subtitle && (
        <span className="block text-slate-600 text-sm font-bold uppercase mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold text-black border-b-2 border-black inline-block pb-2">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
