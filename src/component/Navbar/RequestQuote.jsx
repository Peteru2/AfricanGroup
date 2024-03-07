import Helmett from "../Helmet";

import image from "../../assets/images/about.jpg"
import Layout from "../Layout";
import QuoteForm from "./QuoteForm";
import ImageWithOverlay from "../ImageWithOverlay";

const RequestQuote = () => {
    return ( 

        <>
        
        <Layout>       
             <section>
            <Helmett 
                title="Request a quote"
                content="Learn more about our reputable land surveying company in Oyo, Nigeria. Discover our commitment to precision, excellence, and client satisfaction. Meet our experienced surveyors dedicated to providing top-notch services for residential and commercial projects."
                />
            <ImageWithOverlay
                imageUrl={image}
                span1="Request Quote"
                span2=""
                title2="Who are we?"
                decrip="Request A Quote"
                height="400px"
      />
        </section>   
        <div className="border-t-[1px] pt-6 mt-20 xl:mx-[90px] md:mx-5 mx-6 font-roboto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 font-roboto">
            <div>

            </div>
            <div className="col-span-2">
                <h2>
                Please schedule a consultation to see how we work. Our MEP designers ensure fast project completion, high-quality construction and accurate cost estimates
                </h2>
                <QuoteForm />
            </div>
        </div>
        </div>
            </Layout>

        </>
     );
}
 
export default RequestQuote;