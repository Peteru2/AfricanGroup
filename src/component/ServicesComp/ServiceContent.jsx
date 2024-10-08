import ServiceData from "./ServiceData";
import Helmett from "../Helmet";
import image from "../../assets/images/about.jpg";
import ImageWithOverlay from "../ImageWithOverlay";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceContent = () => {
  const MAX_CONTENT_LENGTH = 100; // You can set your desired maximum length

  // Function to truncate text and add "..."
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return (
    <>
      <section>
        <Helmett
          title="Our Service-Land surveying, Real Estate..."
          content="Explore our comprehensive land surveying services in Oyo, Nigeria. From accurate property assessments to boundary surveys and topographic mapping, our expert surveyors specialize in residential and commercial projects. Discover how we can assist you with precise and reliable surveying solutions."
        />
        <ImageWithOverlay
          imageUrl={image}
          span1="Service"
          span2=""
          title2=""
          decrip="Our Services"
          height="400px"
        />
        <div className="xl:mx-[90px] md:mx-5  mx-6 border-t-[1px] pt-6 md:mt-[80px]  mt-[30px]  font-roboto">
          <div className="flex justify-center">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-6"
            >
              <h4 className="text-3xl text-center font-bold my-3 text-private">
                What Service We Provide
              </h4>

              <h5 className="md:w-[600px] text-center flex justify-center">
                Surveying excellence, real estate properties and construction
                mastering. We deliver transformative experiences through
                innovative design, creating bespoke spaces that redifines luxury
                living across Africa.
              </h5>
            </motion.div>
          </div>
          <div className=" grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
            {ServiceData.map((service, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={service.id}
                >
                  <Link to={`/services/${service.titleParam}`}>
                    <div className="relative  md:mb-[200px] mb-[120px]">
                      <img
                        src={service.img}
                        alt="img"
                        className="h-[300px] w-full"
                      />
                      <div className={service.class1}>
                        <div className="relative ">
                          <div className={service.class2}>
                            <h3>{service.title.charAt(0)}</h3>
                          </div>
                        </div>
                        <h2
                          className={`my-3 mt-6 text-[19px] ${service.classTitle} `}
                        >
                          {service.title}
                        </h2>
                        <h3 className={`${service.classContent}`}>
                          {truncateText(service.content, MAX_CONTENT_LENGTH)}
                        </h3>
                        <Link>
                          {" "}
                          <h4 className={`my-4 ${service.classRead}`}>
                            Read More
                          </h4>
                        </Link>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceContent;
