import FAQItem from "./FaqItems";
import { motion } from "framer-motion";
const FAQSection = ({ title, faqItems, description }) => {
  return (
    <>
      <section className="xl:mx-[90px] md:mx-5 mx-6 my-10 font-roboto">
        <div className="mb-14">
          <div className="text-[39px] font-bold  my-1 text-opacity-90">
            {title}
          </div>
          <div className="text-[18px] text-public text-opacity-70 font-bold  font-lora">
            {description}
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-6 font-roboto">
          {faqItems.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1, staggerChildren: 2 }}
              className="grid grid-col-2"
            >
              <div key={index} className="">
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQSection;
