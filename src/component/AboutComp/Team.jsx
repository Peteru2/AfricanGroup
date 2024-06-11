import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import Image1 from "../../assets/images/FirstSectionImage1.jpg";
import Image2 from "../../assets/images/about.jpg";

const Team = () => {
  const imageSlides = [
    {
      img: [Image1],

      header: "Client Satisfaction",
      content:
        "Our ultimate goal is to exceed client expectations. We work closely with our clients, understanding their vision and aspiration to deliver projects that not only meet their needs but surpass their wideat dream, your satisfaction is our driving force!",
    },
    {
      img: [Image2],
      title: "About",
      header: "Professional Land Surveying And Mapping  ",
      content:
        "African Group routinely provides surveying solutions for business, real estate, land development and civil engineering in Boise area.",
    },
    {
      img: [Image2],
      title: "About",
      header: "Quality Construction at Unbeatable Rates",
      content:
        "We don't just build structures, we create legacies and embrace innovation. From incorporating eco-friendly materials to implementing energy efficient solutions, we strive to create spaces that not only meet the highest standards but also leave a positive impact on the environment.",
    },
    {
      img: [Image2],
      title: "About",
      header: "African Legend of All Real Estate",
      content:
        "We Navigate the world of real estate with confidence, as we guide you through opportunities, negotiate great deals, and help you secure your ideal property.",
    },
  ];
  const buttonStyle = {
    width: "0px",
    display: "none",
    margin: "0px",
  };
  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <i className="fa fa-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="hidden" style={{ ...buttonStyle }}>
        <i className="fa fa-arrow-right"></i>
      </button>
    ),
  };
  return (
    <>
      <Slide transitionDuration={400} scale={1.4} {...properties}>
        {imageSlides.map((image, index) => (
          <div
            className="flex"
            style={{
              backgroundImage: `url(${image.img}) `,
              backgroundSize: "cover",
            }}
          >
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 2 }}
              className="bg-private mb-[0px] grid  items-center md:grid-cols-2 grid-cols-1 xl:px-[90px] md:px-5 px-6 bg-opacity-70 font-roboto py-6"
            >
              <div className="">
                <h2 className="text-white text-[40px] font-playfair font-bold  md:w-[500px] ">
                  {image.header}
                </h2>
              </div>
              <div>
                <h4 className="text-[16px] text-white">{image.content}</h4>
                <div className="mt-2 flex">
                  <h3 className="w-20 h-2 bg-vintage"></h3>
                  <h3 className="w-2 h-2 bg-public ml-2"></h3>
                </div>
              </div>
            </motion.section>
          </div>
        ))}
      </Slide>

      <div className="flex justify-center text-vintage font-roboto">
        <Link to={"/about/team"}>
          <div className="mb-[10px] h-20 shadow-xl flex justify-center w-[200px] bg-white">
            <button className="text-center ">Meet Our Team</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Team;
