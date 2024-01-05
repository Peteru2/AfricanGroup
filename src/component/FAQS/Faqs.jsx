import { motion } from 'framer-motion';
import Navbar from '../../component/Navbar/Navbar';
import FAQSection from './FaqsSection';

const FaqsMain = () => {
  
    const faqData = [
        // First Section
        [
          {
            question: "What is the purpose of this website?",
            answer: "The purpose of this website is...",
          },
          {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team by...",
          },
          {
            question: "What is the purpose of this website?",
            answer: "The purpose of this website is...",
          },
          {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team by...",
          },
        ],
      
        // Second Section
        [
          {
            question: "What is the purpose of this website?",
            answer: "The purpose of this website is...",
          },
          {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team by...",
          },
          {
            question: "What is the purpose of this website?",
            answer: "The purpose of this website is...",
          },
          {
            question: "How can I contact customer support?",
            answer: "You can contact our customer support team by...",
          },
        ],
      ];
      
    // dd more FAQ items as needed
  

  return (
    <div>

     <Navbar />
    
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, type: 'spring' }}
    >

      <div className="TeamBackGroundImg">
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="h-[500px] md:pt-52 pt-32 pb-72 text-white bg-public bg-opacity-70"
        >
          <h2 className="items-center font-bold flex justify-center text-[16px]">
            AfricanGroup{' '}
            <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> FAQs
          </h2>
          <div className="mt-16 ">
            <h4 className="text-white text-2xl font-lora flex justify-center "> FAQs</h4>
            <h1 className="text-white md:text-6xl text-3xl flex justify-center font-roboto">
              Frequently Asked Questions
            </h1>
          </div>
          
        </motion.div>
        </div>  
        </motion.div>

      <FAQSection title="About Survey" description="This is about it"faqItems={faqData[0]} />
      <FAQSection title="My Survey" faqItems={faqData[1]} />

    </div>
  );
};

export default FaqsMain;
