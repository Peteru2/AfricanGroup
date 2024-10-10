import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <>
      <section className="bg-white xl:px-[90px] md:px-5 px-6 w-full md:h-[500px] h-[750px] sm:h-[900px] font-roboto">
        <div className="py-16 ">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.25, duration: 0.3 }}
          >
            <h2 className="font-bold py-2">
              <i className="fa fa-th text-private mr-2 font-bold"></i>
              TESTIMONIALS
            </h2>
            <h1 className="text-4xl font-playfair text-private my-4">
              Our client reviews.{" "}
            </h1>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.25, duration: 0.5 }}
            className=" bg-gray px-6 py-4 flex justify-center items-center bg-opacity-20 mt-10 md:h-[250px] h-[500px] "
          >
            <Carousel showThumbs={false} autoPlay={true} >
              <div>
                <h2 className="uppercase font-semibold font-lora">
                  General Managing Director (Atmos Integrated Services Limited)
                </h2>

                <p className=" text-center  py-2 font-roboto text-black   pb-10 break-words">
                  <i>
                    Trust & Integrity comes first for me when doing business! At
                    first, I was a bit skeptical about doing business with
                    African Group when I met their director years back, but I'm
                    glad I trusted my instincts. It turned out great. I have
                    gladly recommended them to many clients and was not let
                    down. Keep it up, African Group!
                  </i>{" "}
                </p>
              </div>
              <div>
                <h2 className="uppercase font-semibold font-lora">
                  Mr Ifayinka Alaajeifa Ajagunmale
                </h2>

                <p className=" text-center  px-2 py-2 font-roboto text-black  pb-10 break-words">
                  <i>
                    Grateful to have met African Real Estate Group Nigeria while
                    I was still a tenant in 2023, with their advice and
                    consistency and God almighty on our side I was a landlord in
                    2024 If you are not ready to be serious about your landed
                    property and building project then these people are not for
                    you. They take their time in making sure that all projects
                    are properly done and put in place. Documented property,
                    secured land and perfect building, that is what African
                    group are all about
                  </i>{" "}
                </p>
              </div>
               {/* <div>
                <h2 className="uppercase font-semibold font-lora">
                Dr. Micheal Egbekoya - Director McYouniverse Group
                </h2>

                <p className=" text-center  py-2 font-roboto text-black text-[16px] pb-10 break-words">
                  <i>
                  I am truly impressed with the exceptional service i experienced with African Survey after my recent Land Survey, Their Professionalism, responsiveness and attention to details made the executio of my survey documentation seamless.
        I highly recommend them to anyone in need of survey Services, they truly deliver beyond my expectations and ensure my needs are met, and i appreciate their dedication towards excellence

                  </i>{" "}
                </p>
              </div> */}
              {/* <div>
                <h2 className="uppercase font-semibold font-lora">
                Mrs. Adenike Akinola - Group Managing Director  Foxcon Intl.
                </h2>

                <p className=" text-center  py-2 font-roboto text-black text-[16px] pb-10 break-word">
                  <i>
                  African Group a reputable real estate company that caters related services in real estate development from land acquisition to ownership of property. They have offered me remarkable services in land survey that is incomparable with the show of expertise, using the latest technology.
I can appreciate this much when I compare how they work compared to that of older generations which I am conversant with. They are so accurate in re-establishment of pillars, articulate in survey works.
                  </i>{" "}
                </p>
              </div> */}
              {/* <div>
                <h2 className="uppercase font-semibold font-lora">
                Engr. Jibola Ahmadu
                </h2>

                <p className=" text-center  py-2 font-roboto text-black text-[16px] pb-10 break-all">
                  <i>
                  Trust and integrity comes first for me when doing business! At first, I was a bit skeptical about doing business with African Group when i met their director years bac,but i’m glad I trusted my instincts. It turned out great.
I have gladly recommended them to many of my clients and was not let down. Keep it up African Group!

                  </i>{" "}
                </p>
              </div> */}
              <div>
                <h2 className="uppercase font-semibold font-lora">
                Mr. Ifayinka Ajagunmale Alaajeifa
                </h2>

                <p className=" text-center  py-2 font-roboto text-black text-[16px] pb-10 break-all">
                  <i>
                  Grateful to have met African Real Estate Group Nigeria while i was still a tenant in 2023, with their advice and consistency and God Almighty on our side I am a landlord in 2024.
If you are not ready to be serious about your landed property and building projects then these people are not for you. They take their time in making sure that all through projects are properly done and put in place, documented properties, secured land and perfect building that is what African Group is all about. 


                  </i>{" "}
                </p>
              </div> 
              
            </Carousel>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
