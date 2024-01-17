import { useState } from "react";
import axios from "axios"
const QuoteForm = ({close}) => {
const [success, setSuccess] = useState()
const [formMessage, setFormMessage] =useState("chess")
const [isSelectionValid, setIsSelectionValid] = useState(false);

    

    
    // const handleButtonClick = (index) => {
    //     setSelectedDivIndex(index); 
        
    //     }
const handleSuccess = () =>{
        setSuccess(false);
        close()
}
const handleRetry = () => {
    setSuccess(false);
    // setFormMessage("");
  };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message:'',

      });
    
      const [errors, setErrors] = useState({
        name: '', 
        email: '',
        phoneNumber: '',
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

   
            if (formData.name.trim() === '') {

            newErrors.name = 'Name is required';
            }
                else if (!formData.email.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }
                else if (!formData.phoneNumber.trim()) {
                    newErrors.phoneNumber = 'Phone Number is required';
                } else if (!phoneRegex.test(formData.phoneNumber)) {
                    newErrors.phoneNumber = 'Invalid phone number format';
                }
                else if(!formData.message.trim()){
                    newErrors.message = 'Message is required';
                }
                else {
                    axios.post('http://127.0.0.1/api/quoteform/submit', formData)
                    .then(response => {
                        // Handle success
                        console.log('Success:', response.data);
                        setFormData({
                            name: '',
                            email: '',
                            phoneNumber: '',
                            message:'',
                        })
                        setFormMessage(response.message)

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
                            <h2 className="my-2 text-black font-playfair font-bold text-[20px]">Request for Quote</h2>
                            <button className="ml-auto cursor-pointer" onClick={(e) => { e.preventDefault(); close(); }}><i className="fa fa-times"></i></button>
                            </div>
                        <div className="mb-6">  
                        
                        <label className="my-2 mt-4 label flex">
                            <span>Name</span> <span className={`ml-auto text-red text-[14px] ${errors.name? "blink-error":""}`}> {errors.name}</span>
                        </label> 
                      
                                <div className="flex items-center border border-gray rounded-[5px] mt-1 px-3  py-2">
                                <i className="fa fa-user text-gray w-5 h-5  mr-2 mt-1"></i>
                                <input type="text" className="w-full outline-none text-black"
                                autoFocus 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2  label flex">
                            <span>Email</span> <span className={`ml-auto text-red text-[14px] ${errors.email? "blink-error":""}`}> {errors.email}</span>
                        </label> 
                                <div className="flex items-center border border-gray rounded-[5px] px-3  mt-1 py-2">
                                <i className="fa fa-envelope  w-5 h-5 text-gray  mr-2 mt-1"></i>
                                <input type="Email" 
                                name="email"
                                value={formData.email} 
                                onChange={handleInputChange}
                                className="w-full outline-none text-black" placeholder="Email" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2 label flex">
                            <span>Phone Number</span> <span className={`ml-auto text-red text-[14px] ${errors.phoneNumber? "blink-error":""}`}> {errors.phoneNumber}</span>
                        </label> 
                                <div className="flex items-center border border-gray rounded-[5px] px-3 mt-1  py-2">
                                <i className="fa fa-phone text-gray w-5 h-5  mr-2 mt-1"></i>
                                <input type="text" 
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full outline-none text-black" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-2 label flex">
                            <span>Your Message</span> <span className={`ml-auto text-red text-[14px] ${errors.message? "blink-error":""}`}> {errors.message}</span>
                        </label> 
                                <div className="flex items-center border border-gray rounded-[5px]  px-3 mt-1  py-2">
                               
                                <textarea type="text" name="message" className="w-full outline-none text-black" 
                                value={formData.Message}
                                onChange={handleInputChange}
                                placeholder="Your Message" />
                                </div>
                            </div>

                            <button  type="submit"  className="bg-private hover:bg-private hover:bg-opacity-90  text-white font-semibold py-4 px-4 rounded w-full">Submit</button>
                                
                        </form>
                        <div className= {` text-black ${success?"":"hidden"}`}> 
                        <h2 className={`mb-2 ${formMessage && formMessage.includes("Error") ? "text-red " : "hidden text-black"}`}>
                        {formMessage}
                                 </h2>
                                 <h2 className={`mb-2 ${formMessage && formMessage.includes("Success") ? "text-green" : "text-black hidden"}`}>
                        {formMessage}
                                 </h2>
                        
                        <button className={`bg-private w-full border-[1px] rounded-[4px] w-[50px] ${formMessage && formMessage.includes("Success") ? "text-green" : "hidden"}`} onClick={handleSuccess}>Close</button>
                        <button className={`border-gray border-[1px] rounded-[4px] w-[50px] ${formMessage && formMessage.includes("Error") ? "text-green" : "hidden"}`}  onClick={handleRetry}>Retry</button>

                    </div>
                    </section>

                 
                    
                </>
     );
}
 
export default QuoteForm;