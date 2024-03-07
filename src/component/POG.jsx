import Helmett from "./Helmet";
import ImageWithOverlay from "./ImageWithOverlay";
import image from "../assets/images/about.jpg"
import Layout from "./Layout";
import female from "../assets/images/female.jpg"
import { motion } from "framer-motion";
import { Bounce, Roll } from "react-awesome-reveal";
const POQ = () => {
    return ( 
        <>
             <Layout>       
             <section>
            <Helmett 
                title="Priority On Quality"
                content="Learn more about our reputable land surveying company in Oyo, Nigeria. Discover our commitment to precision, excellence, and client satisfaction. Meet our experienced surveyors dedicated to providing top-notch services for residential and commercial projects."
                />
            <ImageWithOverlay
                imageUrl={image}
                span1="Priority On Quality"
                span2=""
                title2="Priority On Quality"
                decrip="Priority On Quality"
                height="400px"
      />
           
            <div className=" border-t-[1px] pt-6 mt-20 xl:mx-[90px] md:mx-5 mx-6 font-roboto">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <div>
                <Roll  cascade triggerOnce direction="left" className="md:w-[500px]">
                        <img src={female} alt="female" />
                    </Roll>
            </div>

                    <motion.div className="text-[16px]"
                     variants ={{
                        hidden:{opacity: 0, y: 75},
                        visible:{opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{delay:  0.5, 
                    duration: 0.5}}
                    >
                        <h1 className="w-14 bg-private h-1 mb-3"></h1>
                        <h2>
                        <strong>AT AFRICAN GROUP NIGERIA</strong>, quality is our North Star! We believe that when it comes to Surveying, Real Estate, Construction & Agro Projects, and Technology, nothing less than excellence will do. Here's why quality is at the heart of everything we do:

                        </h2>

                        <h2 className="my-5"><strong>. Land Surveyors:</strong> The Unsung Heroes: Our team of land surveyors and engineers plays a crucial role in ensuring precision and accuracy in our projects. By mapping out the lay of the land, build a luxury homes, we provide valuable insights that help tradesmen navigate challenges and deliver exceptional results.
                        </h2>

                        <h2 className="my-5"><strong>. Craftsmanship that Shines:</strong>  We bring together a team of skilled artisans and tradesmen who are masters of their craft. From the foundation to the finishing touches, our tradespeople pour their expertise into every detail, ensuring that our projects stand the test of time.

                        </h2>

                        <h2 className="my-5"><strong>. Sensitizing for Success:</strong>   We understand the importance of sensitizing our tradesmen on key areas like sustain ability, professional work practices, and safety. By equipping them with the knowledge and skills needed to excel, we create a workforce that is ready to tackle any challenge with finesse.

                        </h2>

                        <h2 className="my-5"><strong> . Innovation and Sustainability:</strong>   We embrace innovation and sustain ability in all our endeavors. From incorporating eco-friendly materials to implementing energy-efficient solutions, we strive to create spaces that not only meet the highest standards but also leave a positive impact on the environment.
                        </h2>

                        <h2 className="my-5"><strong>  . Client Satisfaction:</strong>  Our ultimate goal is to exceed client expectations. We work closely with our clients, understanding their vision and aspirations, to deliver projects that not only meet their needs but also surpass their wildest dreams. Your satisfaction is our driving force!
                        </h2>

                        <h2 className="my-5">At African Group, we don't just build structures; we create legacies. With a bold and concise objective, we aim to maximize value for our shareholders, deliver strong nancial performance, and achieve sustainable growth. Also, we are committed to the established quality management system (QMS), both administrative and operational, to work towards continuous improvement of our quality performance.

                        </h2>
                    </motion.div>
                </div>
            </div>

        </section>   
            </Layout>
        </>
     );
}
 
export default POQ;