import { useState } from "react";
import axios from "axios"
const QuoteForm = ({close}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
      });
    
      const [errors, setErrors] = useState({
        name: '', 
        email: '',
        phoneNumber: '',
      });
    
      const handleInputChange = (e) => {
        // e.preventDefault();       
        
       const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) =>{
            e.preventDefault();

      const newErrors = {};
   
            if (formData.name.trim() === '') {

            newErrors.name = 'Name is required';
           
            
        }

            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if (!formData.email.trim()) {
                    newErrors.email = 'Email is required';
                   

                } else if (!emailRegex.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }

            
                const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
                if (!formData.phoneNumber.trim()) {
                    newErrors.phoneNumber = 'Phone Number is required';
                } else if (!phoneRegex.test(formData.phoneNumber)) {
                    newErrors.phoneNumber = 'Invalid phone number format';
                }

                setErrors(newErrors);
                console.log(formData)
                axios.post('http://127.0.0.1/api/quoteform/submit', formData)
            if (Object.keys(newErrors).length === 0) {
                setErrors({});
            }

      }
    return ( 
                <>
                    <section>
                        <form className="font-roboto text-black">
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
                            <label className="my-5 label">Message to land Surveying</label>
                                <div className="flex items-center border border-gray rounded-[5px]  px-3 mt-1  py-2">
                               
                                <textarea type="text" className="w-full outline-none text-black" placeholder="Your Message" />
                                </div>
                            </div>

                            <button  onClick={handleSubmit}  className="bg-private hover:bg-private hover:bg-opacity-90  text-white font-semibold py-4 px-4 rounded w-full">Submit</button>
                                
                        </form>
                    </section>
                </>
     );
}
 
export default QuoteForm;