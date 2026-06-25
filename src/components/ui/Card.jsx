import React from 'react';

const Card = ({
  title,
  description,
  badge,
  footer,
  onClick,
  children,
  className = '',
  image
}) => {
  const Component = onClick ? 'button' : 'div';
  const interactiveClasses = onClick ? "hover:bg-slate-50 cursor-pointer text-left hover:shadow-md hover:-translate-y-1 transition-all duration-200" : "";

  return (
    <Component
      onClick={onClick}
      className={`relative flex flex-col w-full border border-slate-200 bg-white rounded-md shadow-sm overflow-hidden ${interactiveClasses} ${className}`}
    >
      {image && (
        <div className="w-full h-48 bg-slate-200 border-b border-slate-300">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          {title && <h3 className="text-xl font-bold text-black">{title}</h3>}
          {badge && (
            <span className="inline-block px-2 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-md ml-2">
              {badge}
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-slate-700 text-base mb-4 flex-1">
            {description}
          </p>
        )}
        
        {children && <div className="mb-4">{children}</div>}
        
        {footer && (
          <div className="mt-auto pt-4 border-t border-slate-200 w-full">
            {footer}
          </div>
        )}
      </div>
    </Component>
  );
};

export default Card;
