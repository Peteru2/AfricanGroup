import { motion } from "framer-motion";
import FAQSection from "./FaqsSection";
import faqData from "./faqData";
import ImageWithOverlay from "../ImageWithOverlay";
import image from "../../assets/images/FirstSectionImage1.jpg";

import Helmett from "../Helmet";
import Layout from "../Layout";

const FaqsMain = () => {
  return (
    <Layout>
      <Helmett title="Faqs" content="" />

      <ImageWithOverlay
        imageUrl={image}
        title1="AfricanGroup"
        span1="Faqs"
        span2=""
        title2="Your Faqs"
        decrip="Frequently Asked Questions"
        height="400px"
      />
      <FAQSection
        title="SURVEYING "
        description="This is about it"
        faqItems={faqData[0]}
      />
      <FAQSection title="REAL-ESTATE" faqItems={faqData[1]} />
      <FAQSection title="CONSTRUCTION" faqItems={faqData[2]} />
      <FAQSection title="AFRI FARMS:" faqItems={faqData[3]} />
    </Layout>
  );
};

export default FaqsMain;
