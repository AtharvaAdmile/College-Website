import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      {/* Modal Content */}
      <div 
        className="bg-white border-2 border-black w-full max-w-lg max-h-[90vh] flex flex-col"
        role="dialog" 
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-black bg-slate-100">
          <h3 className="text-xl font-bold text-black">{title}</h3>
          <button
            onClick={onClose}
            className="text-black font-bold hover:text-red-600 px-2 py-1"
            aria-label="Close"
          >
            [X]
          </button>
        </div>
        
        <div className="px-4 py-4 overflow-y-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
