import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useInView } from "react-intersection-observer";
const NewsLetter = () => {
    const [formData, setFormData] = useState({
        email: ''
      });
    
      const [errors, setErrors] = useState({
        email: ''
      });
    
      const handleInputChange = (e) => {
        
       const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (e) =>{
        e.preventDefault();

  const newErrors = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Invalid email format';
            }
            else {
                axios.post('http://127.0.0.1/api/newsletter/submit', formData)
                .then( response=>{
                        newErrors.email = response.data.message;
                        setErrors(newErrors);
                        setFormData({email:""})
                       

                }   
                )
                .catch(error => {
                    newErrors.email = 'Something went wrong'
                })
            }
            setErrors(newErrors);
            console.log(formData)
            
        if (Object.keys(newErrors).length === 0) {
            setErrors({});
        }
  }
  const { ref, inView } = useInView({
    triggerOnce: true, // This ensures the animation is triggered only once
    threshold: 0.5 // Adjust this threshold as needed
});

    return ( 
        <>
          <motion.div 
            ref={ref}
            variants ={{
                hidden:{opacity: 0, y: 75},
                visible:{opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Use animate instead of whileInView
            transition={{delay: 0.5, duration: 0.5}}      
           className="flex justify-center items-center">
            <section className="footer-child  grid md:grid-cols-2 gap-4 grid-cols-1 bg-vintage  py-8 px-8  md:mx-16 mx-6 flex  text-white ">
                <div className="">
                    <h2 className="text-[25px] font-playfair mb-6">Subscribe & get more information</h2>
                    <h4 className="text-[16px] font-roboto break-words xl:w-[500px] md:w-auto">Get the latest updates about the latest developments and exciting news on how we are shaping the future!</h4>
                </div>
                <div className="md:ml-auto  flex items-center"> 
                <div className=" w-full">
                <form  onSubmit={handleSubmit} className="md:ml-auto md:w-auto  w-full grid md:grid-cols-2 grid-cols-1 gap-2 ">
                    <input type="email" onChange={handleInputChange} name="email" className="px-2 py-4 text-black outline-none" placeholder="Email"/>
                    <button  type ="submit" className=" font-roboto  bg-public border-white border-2 py-4  text-center  hover:text-public hover:bg-white hover:border-public  transition ease-in-out  duration-300">Subscribe</button>
                    </form>
                    {errors.email}
                </div>
                </div>
            </section>
            </motion.div>
        </>
     );
}
 
export default NewsLetter;