import img from "../../assets/images/FirstSectionImage1.jpg"
import ServiceData from "./ServiceData";
import image from "../../assets/images/about.jpg"
import ImageWithOverlay from '../ImageWithOverlay';
import { Link } from "react-router-dom";
const ServiceContent = () => {
    const MAX_CONTENT_LENGTH = 100; // You can set your desired maximum length

    // Function to truncate text and add "..."
    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };
    return ( 
        <>
        <section>
            <ImageWithOverlay
                imageUrl={image}
                span1="Service"
                span2=""
                title2=""
                decrip="Our Services"
      />
            <div className="xl:mx-6 md:mx-0  mx-6 md:mt-[140px] mt-[30px]  font-roboto">
                    <div className="flex justify-center">
                        <div>
                        <h4 className="text-private text-center">OUR SERVICES </h4>
                        <h4 className="text-3xl text-center font-bold my-3">What Service We Provide</h4>
                        
                            <h5 className="md:w-[600px] text-center flex justify-center">Lorem ipsum dolor sit amet, consectetur adipisicing zelit. Porro sit, architecto dolores quam sequi hic quidem ut. Dolores, quasi rerum! Quae aperiam quia maxime et doloremque distinctio. Dolorum, doloremque. Molestias.

                            </h5>
                           
                            </div>

                    </div>
                    <div className=" grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
                       
                        {
                            ServiceData.map((service)=>{
                                return(
                                    <div key={service.id}>
                                    <Link to={`/service/${service.titleParam}`}>

                                        <div className="relative  md:mb-[] mb-[200px]">                          
                            <img src={img} alt="img"  /> 
                            <div className={service.class1}>
                                <div className="relative ">
                                    <div className={service.class2}>
                                        <h3>J</h3>
                                    </div>
                                </div>
                                <h2 className={`my-3 mt-6 text-[19px] ${service.classTitle} `}>{service.title}</h2>
                                    <h3 className={`${service.classContent}`}>{truncateText(service.content, MAX_CONTENT_LENGTH)}</h3>
                                    <Link> <h4 className={`my-4 ${service.classRead}`}>Read More</h4></Link>
                            </div>
                        </div>
                        </Link>

                                    </div>
                                )
                            })
                        }

 

 </div>
                    
            </div>
        </section>
        </>
     );
}
 
export default ServiceContent;