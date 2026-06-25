import React, { useState } from 'react';

const Accordion = ({ items, className = '' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full border border-slate-200 bg-white rounded-md shadow-sm overflow-hidden ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.id || index} className="w-full border-b border-slate-200 last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center py-4 px-5 text-left hover:bg-slate-50 focus:outline-none transition-colors duration-200"
            >
              <span className="font-bold text-black">
                {item.question}
              </span>
              <span className="ml-4 font-mono font-bold text-xl text-black">
                {isOpen ? '-' : '+'}
              </span>
            </button>
            
            {isOpen && (
              <div className="pb-4 px-4 text-slate-700 bg-slate-50">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
