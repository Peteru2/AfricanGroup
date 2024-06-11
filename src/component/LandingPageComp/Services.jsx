import { Bounce, Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image1 from "../../assets/images/FirstSectionImage1.jpg";
import { Link } from "react-router-dom";
import ServiceData from "../ServicesComp/ServiceData";
const Services = () => {
  const MAX_CONTENT_LENGTH = 150; // You can set your desired maximum length

  // Function to truncate text and add "..."
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const firstThreeServiceItems = ServiceData.slice(0, 3);

  const str = "AFRICAN GROUP A";
  const textRef = useRef(null);

  useEffect(() => {
    const textContainer = textRef.current;
    if (textContainer) {
      for (let i = 0; i < str.length; i++) {
        let span = document.createElement("mark");
        span.innerHTML = str[i];
        textContainer.appendChild(span);
        span.style.transform = `rotate(${11 * i}deg)`;
      }
    }
  }, [str]);

  return (
    <>
      <Fade transitionDuration={200} scale={1.2} triggerOnce direction="left">
        <section className="md:bg-public bg-white md:bg-opacity-50 md:h-[300px]  w-full  md:mb-[350px]">
          <div></div>
          <div className=" flex justify-center md:bg-transparent md:bg-opacity-0 bg-public bg-opacity-50 py-4 md:py-0">
            <div>
              <h2 className="font-playfair md:text-3xl text-2xl  text-white text-center md:py-4 ">
                Our Services
              </h2>
              <h1 className="font-playfair text-2xl md:text-4xl  text-center text-white md:pb-2">
                Quality without compromise
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-[20px]">
            <div className="grid md:grid-cols-3 mt-4 md:mt-0 w-[1100px] gap-6 my-4  mx-6 md:mx-5">
              <Bounce cascade triggerOnce direction="">
                {firstThreeServiceItems.map((service, index) => {
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="md:bg-white  md:shadow-none rounded-md"
                    >
                      <img
                        src={service.img}
                        alt="image1"
                        className="px-6 md:px-0 rounded-md"
                      />
                      <div className=" bg-white shadow-2xl rounded-md">
                        <h2 className="px-4 font-bold text-[18px] my-3">
                          {service.title}
                        </h2>
                        <h2 className="px-4 py-4 ">
                          <Link to={`/service/${service.titleParam}`}>
                            {" "}
                            {truncateText(service.content, MAX_CONTENT_LENGTH)}
                          </Link>
                        </h2>
                      </div>
                    </motion.div>
                  );
                })}
              </Bounce>
            </div>
          </div>
          <Link to={"/Services"}>
            <div className="flex w-full md:justify-center items-center my-[10px]">
              <div className=" ml-auto md:ml-0 mr-6 text-center border-2 items-center flex  justify-center rounded-full h-[30px] transition ease-in-out delay-150 duration-900 h-[40px] w-[120px] border-vintage bg-vintage hover:bg-white hover:text-vintage text-white">
                <button>Learn More</button>
              </div>
            </div>
          </Link>
          <div className="circle-container">
            <p className="text" ref={textRef}></p>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Services;
