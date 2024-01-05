

import FAQItem from './FaqItems';

const FAQSection = ({ title, faqItems, description }) => {
  return (
    
    <>    
      
    

    
      <section className='xl:mx-6 md:mx-0 mx-6 my-10 font-roboto'>
        <div className='mb-14'>
            <div className='text-[39px]  my-1 text-opacity-90'>{title}</div>
            <div className='text-[18px] text-public text-opacity-70 font-bold  font-lora'>{description}</div>
        </div>
           
            <div className='grid md:grid-cols-2 grid-cols-1 gap-x-6 font-roboto'>
            {faqItems.map((faq, index) => (
                <div className='grid grid-col-2'>
                <div key={index} className="">
                <FAQItem question={faq.question} answer={faq.answer} />
                </div>
            </div>
          ))}
        </div>
        

      </section>
   
    </>

  );
};

export default FAQSection;
