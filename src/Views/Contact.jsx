import Navbar from "../component/Navbar/Navbar";
import ContactInfo from "../component/Contact/ContactInfo";
import image from "../assets/images/about.jpg"
import ImageWithOverlay from "../component/ImageWithOverlay";

const Contact = () => {
    return ( 
        <>
            <section>
                <Navbar />
                
                <ImageWithOverlay
                imageUrl={image}
                title1="AfricanGroup"
                span1="Contact Us"
                span2=""
                title2=""
                decrip="Our Contact"
      />
                <ContactInfo />
                <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=union%20bank%20Owode,%20Oyo,%20Oyo%20State,%20Nigeria+(African%20Group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
                <div>

                </div>
            </section>
        </>
     );
}
 
export default Contact;