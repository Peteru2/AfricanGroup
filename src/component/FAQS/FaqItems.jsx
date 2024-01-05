import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-grayLight">
      <button
        className="w-full text-left bg-white hover:bg-gray-100 px-4 py-6 rounded-md focus:outline-none transition-all duration-[1000ms]"
        onClick={toggleAnswer}
      >
        <div className="w-full flex items-center">
        <span className=" font-semibold text-public text-opacity-70">{question}</span><i className={`fa fa-play ml-auto text-gray text-[10px] transition-all duration-[1000ms] ${isOpen ? 'rotate-90':''}`}></i>
        </div>
      </button>
      <div
        className={` overflow-hidden bg-white transition-all duration-[1000ms] ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-black text-opacity-70 px-4 py-4">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
