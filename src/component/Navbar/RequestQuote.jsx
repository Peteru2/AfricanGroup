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
                decrip="Request Quote"
                height="400px"
      />
           <QuoteForm />
        </section>   
            </Layout>

        </>
     );
}
 
export default RequestQuote;