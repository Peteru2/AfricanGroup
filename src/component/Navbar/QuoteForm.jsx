const QuoteForm = ({close}) => {
    return ( 
                <>
                    <section>
                        <form className="font-roboto text-black">
                            <div className="flex items-center ">
                            <h2 className="my-2 text-black font-playfair font-bold text-[20px]">Request for Quote</h2>
                            <button className="ml-auto cursor-pointer" onClick={(e) => { e.preventDefault(); close(); }}><i className="fa fa-times"></i></button>
                            </div>
                        <div className="mb-6">  
                            <label className="my-5 label text">Name</label>
                                <div className="flex items-center border border-gray rounded-[5px] mt-1 px-3  py-2">
                                <i className="fa fa-envelope text-gray w-5 h-5  mr-2 mt-1"></i>
                                <input type="text" className="w-full outline-none text-black" placeholder="Name" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-5 label">Email</label>
                                <div className="flex items-center border border-gray rounded-[5px] px-3  mt-1 py-2">
                                <i className="fa fa-envelope  w-5 h-5 text-gray  mr-2 mt-1"></i>
                                <input type="Email" className="w-full outline-none text-black" placeholder="Email" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-5 label">Phone Number</label>
                                <div className="flex items-center border border-gray rounded-[5px] px-3 mt-1  py-2">
                                <i className="fa fa-envelope text-gray w-5 h-5  mr-2 mt-1"></i>
                                <input type="text" className="w-full outline-none text-black" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="mb-6">  
                            <label className="my-5 label">Message to land Surveying</label>
                                <div className="flex items-center border border-gray rounded-[5px]  px-3 mt-1  py-2">
                               
                                <textarea type="text" className="w-full outline-none text-black" placeholder="Your Message" />
                                </div>
                            </div>

                            <button className="bg-private hover:bg-private hover:bg-opacity-90  text-white font-semibold py-4 px-4 rounded w-full">Submit</button>
                                
                        </form>
                    </section>
                </>
     );
}
 
export default QuoteForm;