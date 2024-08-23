import ContactInfo from "../component/Contact/ContactInfo";
import image from "../assets/images/about.jpg";
import ImageWithOverlay from "../component/ImageWithOverlay";
import Layout from "../component/Layout";
import Helmett from "../component/Helmet";

const Contact = () => {
  return (
    <>
      <Layout>
        <section>
          <Helmett
            title="Contact"
            content="Connect with us for reliable land surveying services in Oyo, Nigeria. Whether you're planning a residential development, commercial project, or need accurate property assessments, boundary surveys, or topographic mapping, we're here to assist. Reach out to our experienced team to discuss your requirements and discover how we can bring precision and expertise to your next project."
          />
          <ImageWithOverlay
            imageUrl={image}
            span1="Contact Us"
            span2=""
            title2=""
            decrip="Our Contact"
            height="400px"
          />
          <ContactInfo />
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=African%20Group%20Nigeria,%20behind%20union%20bank+(Afr)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
           
          </iframe>
          {/* <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=union%20bank%20Owode,%20Oyo,%20Oyo%20State,%20Nigeria+(African%20Group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe> */}
        </section>
      </Layout>
    </>
  );
};

export default Contact;
