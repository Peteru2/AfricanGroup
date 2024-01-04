import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-2">
      <button
        className="w-full text-left bg-white hover:bg-gray-100 px-4 py-2 shadow-md rounded-md focus:outline-none transition duration-700"
        onClick={toggleAnswer}
      >
        <span className="text-gray-800 font-semibold">{question}</span>
      </button>
      <div
        className={`mt-2 overflow-hidden transition-all duration-700 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-gray-100">
      {/* Example FAQ Items */}
      <FAQItem
        question="What is the purpose of this website?"
        answer="The purpose of this website is..."
      />
      <FAQItem
        question="How can I contact customer support?"
        answer="You can contact our customer support team by..."
      />
      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default FAQSection;
