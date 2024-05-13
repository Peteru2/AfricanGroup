import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";

const Testimonials = () => {
    return ( 
        <>
            <section className="bg-white xl:px-[90px] md:px-5 px-6 w-full md:h-[500px] h-[75~0px] sm:h-[900px] font-roboto">
                <div className="py-16 ">
                    
                <motion.div
                variants ={{
                    hidden:{opacity: 0, y: 75},
                    visible:{opacity: 1, y: 0},
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.25, 
                duration: 0.3}}
                >
                <h2 className="font-bold py-2"><i className="fa fa-th text-private mr-2 font-bold"></i>TESTIMONIALS</h2>
                <h1 className="text-4xl font-playfair text-private my-4">Our client reviews. </h1>
                </motion.div>
            <motion.div 
            variants ={{
                hidden:{opacity: 0, y: 75},
                visible:{opacity: 1, y: 0},
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.25, 
            duration: 0.5}}
            className=" bg-gray px-6 py-4 flex justify-center items-center bg-opacity-20 mt-10 md:h-[250px] h-[500px] ">
                <Carousel showThumbs={false} autoPlay={true} ax>
                <div>

                    <h2 className="uppercase font-semibold font-lora">General Managing Director (Atmos Integrated Services Limited)</h2>
                   
                    <p className=" text-center  py-2 font-roboto text-black text-[16px] pb-10 break-words"><i>Trust & Integrity comes first for me when doing business! At first, I was a bit skeptical about doing business with African Group when I met their director years back, but I'm glad I trusted my instincts. It turned out great. 
                        I have gladly recommended them to many clients and was not let down.
                        Keep it up, African Group!

                        <h2></h2>
</i> </p>
                </div>
                <div>
                <h2 className="uppercase font-semibold font-lora">Mr Ifayinka Alaajeifa Ajagunmale</h2>
                    
                    <p className=" text-center  py-2 font-roboto text-black text-[16px] pb-10 break-all"><i>Grateful to have met African Real Estate Group Nigeria while I was still a tenant in 2023, with their advice and consistency and God almighty on our side I was a landlord in 2024 
  If you are not ready to be serious about your landed property and building project then these people are not for you. They take their time in making sure that all projects are properly done and put in place. Documented property, secured land and perfect building, that is what African group are all about
</i> </p>
                </div>
                <div>
                <p className=" text-center  py-2 font-roboto text-black text-[16px] pb-10 break-all"><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aliquam aspernatur quaerat ut maxime, porro quam ullam error perspiciatis quasi omnis sequi doloremque eveniet inventore obcaecati! Debitis possimus ut maiores fugiat autem doloribus facilis explicabo labore voluptatibus, quibusdam, provident pariatur.</i> </p>
                </div>
            </Carousel>
            </motion.div>
                </div>
            </section>
        </>
     );
}
 
export default Testimonials;