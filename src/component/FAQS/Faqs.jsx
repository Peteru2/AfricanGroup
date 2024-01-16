import { motion } from 'framer-motion';
import Navbar from '../../component/Navbar/Navbar';
import FAQSection from './FaqsSection';
import faqData from './faqData';
import ImageWithOverlay from '../ImageWithOverlay'
import image from "../../assets/images/FirstSectionImage1.jpg"
import Footer from '../Footer';
import Helmett from '../Helmet';


const FaqsMain = () => {
  
   
      
    // dd more FAQ items as needed
  
    
  return (
    <div>
        <Helmett 
                title="Faqs"
                content = ""
                />
     <Navbar />
      <ImageWithOverlay
        imageUrl={image}
        title1="AfricanGroup"
       span1="Faqs"
        span2=""
        title2="Your Faqs"
        decrip="Frequently Asked Questions"
        height="400px"
      />
    

      <FAQSection title="About Survey" description="This is about it"faqItems={faqData[0]} />
      <FAQSection title="My Survey" faqItems={faqData[1]} />
      <Footer />
    </div>
  );
};

export default FaqsMain;
