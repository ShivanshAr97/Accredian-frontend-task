import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-auto">
      <div className="border border-gray-300 rounded-lg">
        <div className="flex justify-between items-center px-4 py-2 cursor-pointer" onClick={toggleAccordion}>
          <p className="text-lg font-medium">{title}</p>
          <svg className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isOpen && (
          <div className="px-4 py-2">
            <p className="text-gray-600">{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
