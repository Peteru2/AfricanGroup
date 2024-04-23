import { useState } from "react";
import axios from "axios"
const QuoteForm = () => {
const [success, setSuccess] = useState()
const [icon, setIcon] = useState(false)

const [formMessage, setFormMessage] =useState("chess")
const handleSuccess = () =>{
        setSuccess(false);
        close()
        setIcon(false)
}
const handleRetry = () => {
    setSuccess(false);
    setIcon(false)

    // setFormMessage("");
  };
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        business: '',
        phoneNumber: '',
        project:'',
        message:'',

      });
    
      const [errors, setErrors] = useState({
        fullname: '', 
        email: '',
        business: '',
        phoneNumber: '',
        project: '',
        message:'',
      });
    
      const handleInputChange = (e) => {
        // e.preventDefault();       
        
       const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) =>{
            e.preventDefault();
      const newErrors = {};
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

   
            if (formData.fullname.trim() === '') {

            newErrors.fullname = 'Name is required';
            }
                else if (!formData.email.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }
                else if (!formData.business.trim()) {
                    newErrors.business = 'Your company or business is required';
                }
                else if (!formData.phoneNumber.trim()) {
                    newErrors.phoneNumber = 'Phone Number is required';
                } else if (!phoneRegex.test(formData.phoneNumber)) {
                    newErrors.phoneNumber = 'Invalid phone number format';
                }
                else if(!formData.project.trim()){
                    newErrors.message = 'Your Project is required';
                }
                else if(!formData.message.trim()){
                    newErrors.message = 'Message is required';
                }
                else {
                    setIcon(true)
                    axios.post('http://localhost:8000/request-quote', formData)
                    .then(response => {
                        setIcon(false)
                        setFormData({
                            fullname: '',
                            email: '',
                            business: '',
                            phoneNumber: '',
                            project:'',
                            message:'',
                        })
                        console.log('Success:');
                        setFormMessage("Quote Submitted Successfully")
                        setSuccess(true)
                    })
                    .catch(error => {
                        // Handle error
                        console.error('Error:', error.message);
                        setSuccess(true)
                        setFormMessage(error.message)

                        // Display your error message here
                    });
                    
                  
                    // close()
                }
                setErrors(newErrors);
                console.log(formData)
            if (Object.keys(newErrors).length === 0) {
                setErrors({});
            }
      }
    return ( 
                <>
                    <section>
                        <form onSubmit={handleSubmit}  className={`font-roboto text-black ${success?"hidden":""}`}>
                            <div className="flex items-center ">
                          
                            </div>
                        <div className="mb-6">  
                        
                        <label className="my-2 mt-4 label flex">
                            <span>Full Name <span className="text-red">*</span></span> <span className={`ml-auto text-red text-[14px] ${errors.fullname? "blink-error":""}`}> {errors.fullname}</span>
                        </label> 
                      
                                <div className="flex items-center border border-private rounded-[5px] mt-1 px-3  py-2">
                                <i className="fa fa-user text-gray w-5 h-5  mr-2 mt-1"></i>
                                <input type="text" className="w-full  bg-transparent outline-none text-black"
                                
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleInputChange}
                                placeholder="Name" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2  label flex">
                            <span>Email <span className="text-red">*</span> </span> <span className={`ml-auto text-red text-[14px] ${errors.email? "blink-error":""}`}> {errors.email}</span>
                        </label> 
                                <div className="flex items-center border border-private rounded-[5px] px-3  mt-1 py-2">
                                <i className="fa fa-envelope  w-5 h-5 text-gray  mr-2 mt-1"></i>
                                <input type="Email" 
                                name="email"
                                value={formData.email} 
                                onChange={handleInputChange}
                                className="w-full outline-none bg-transparent text-black" placeholder="Email" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2  label flex">
                            <span>Your Company/Business/Organization <span className="text-red">*</span></span> <span className={`ml-auto text-red text-[14px] ${errors.business? "blink-error":""}`}> {errors.business}</span>
                        </label> 
                                <div className="flex items-center border border-private rounded-[5px] px-3  mt-1 py-2">
                                <i className="fa fa-envelope  w-5 h-5 text-gray  mr-2 mt-1"></i>
                                <input type="text" 
                                name="business"
                                value={formData.business} 
                                onChange={handleInputChange}
                                className="w-full outline-none bg-transparent text-black" placeholder="Your Business" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2 label flex">
                            <span>Phone Number</span> <span className={`ml-auto text-red text-[14px] ${errors.phoneNumber? "blink-error":""}`}> {errors.phoneNumber}</span>
                        </label> 
                                <div className="flex items-center border border-private rounded-[5px] px-3 mt-1  py-2">
                                <i className="fa fa-phone text-gray w-5 h-5  mr-2 mt-1"></i>
                                <input type="text" 
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full outline-none bg-transparent text-black" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2 label flex">
                            <span>Describe Your Project <span className="text-red">*</span></span> <span className={`ml-auto text-red text-[14px] ${errors.project? "blink-error":""}`}> {errors.project}</span>
                        </label> 
                                <div className="flex items-center border border-private rounded-[5px]  px-3 mt-1  py-2">
                               
                                <textarea type="text" name="project" className="w-full h-[100px] bg-transparent outline-none text-black" 
                                value={formData.project}
                                onChange={handleInputChange}
                                placeholder="Give Details Of Your Project" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2 label flex">
                            <span>Your Message</span> <span className={`ml-auto text-red text-[14px] ${errors.message? "blink-error":""}`}> {errors.message}</span>
                        </label> 
                                <div className="flex items-center border border-private rounded-[5px]  px-3 mt-1  py-2">
                               
                                <textarea type="text" 
                                name="message" 
                                className="w-full h-[100px] bg-transparent outline-none text-black" 
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message" />
                                </div>
                            </div>

                            <button  type="submit"  className="bg-private hover:bg-private hover:bg-opacity-90  text-white font-semibold py-4 px-4 rounded w-full">{icon ?( <span>Submitting <i class="fas fa-spinner fa-spin"></i></span>):( <span>Request A Proposal</span>  )}</button>
                                
                        </form>
                        <div className= {`font-roboto text-black ${success?"":"hidden"}`}> 
                        <h2 className={`mb-2 font-bold ${formMessage && formMessage.includes("Error") ? "text-red" : "hidden text-black"}`}>
                        {formMessage}
                                 </h2>
                                 <h2 className={`mb-2 font-bold ${formMessage && formMessage.includes("Successfully") ? "text-green" : "text-black hidden"}`}>
                        {formMessage}
                                 </h2>
                        
                        <button className={`bg-private w-full border-[1px] text-white rounded-[4px]  mt-3 ${formMessage && formMessage.includes("Successfully") ? "text-green" : "hidden"}`} onClick={handleSuccess}>Close</button>
                        <button className={`border-gray border-[1px] rounded-[4px] w-[50px] ${formMessage && formMessage.includes("Error") ? "text-green" : "hidden"}`}  onClick={handleRetry}>Retry</button>

                    </div>
                    </section>

                 
                    
                </>
     );
}
 
export default QuoteForm;