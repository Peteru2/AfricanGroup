import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";

const Testimonials = () => {
    return ( 
        <>
            <section className="bg-white xl:px-[90px] md:px-5 px-6 w-full md:h-[600px] h-[800px] sm:h-[900px] font-roboto">
                <div className="py-24">
                    
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
                   
                    <p className=" text-center  py-2 font-roboto text-black text-[19px] pb-10 break-words"><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aliquam aspernatur quaerat ut maxime, porro quam ullam error perspiciatis quasi omnis sequi doloremque eveniet inventore obcaecati! Debitis possimus ut maiores fugiat autem doloribus facilis explicabo labore voluptatibus, quibusdam, provident pariatur.</i> </p>
                </div>
                <div>
                    
                    <p className=" text-center  py-2 font-roboto text-black text-[19px] pb-10 break-all"><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aliquam aspernatur quaerat ut maxime, porro quam ullam error perspiciatis quasi omnis sequi doloremque eveniet inventore obcaecati! Debitis possimus ut maiores fugiat autem doloribus facilis explicabo labore voluptatibus, quibusdam, provident pariatur.</i> </p>
                </div>
                <div>
                <p className=" text-center  py-2 font-roboto text-black text-[19px] pb-10 break-all"><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aliquam aspernatur quaerat ut maxime, porro quam ullam error perspiciatis quasi omnis sequi doloremque eveniet inventore obcaecati! Debitis possimus ut maiores fugiat autem doloribus facilis explicabo labore voluptatibus, quibusdam, provident pariatur.</i> </p>
                </div>
            </Carousel>
            </motion.div>
                </div>
            </section>
        </>
     );
}
 
export default Testimonials;