import { Link } from "react-router-dom";

const ContactInfo = () => {
    return ( 
        <>
            <section className="font-roboto mt-[40px] xl:mx-[90px] md:mx-5 mx-6 text-[15px]">
                    <div className="grid md:grid-cols-2 grid-cols-1  ">
                        <div className="">
                            <h3 className="mb-2 text-private font-bold  tracking-[4px]">OUR HEADQUARTER</h3>
                            <h2 className="text-[30px]">Union Bank Road, Owode, Oyo</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gird-cols-1">
                            <div>
                                <div className="md:my-0 my-6">                            
                                    <div className="flex mb-2 items-center">
                                    <h2 className="h-2 w-2 bg-private rounded-full mr-2 FONT-BOLD"></h2> <h3 className="tracking-[4px] font-bold">ABUJA</h3>
                                </div>
                                <h2>
                                188, Awolowo Road, Ikoyi,
                                                Lagos, Nigeria.
                                </h2>
                                </div>

                                                 
                                <div className="flex mb-2 items-center md:mt-10 my-4">
                                    <h2 className="h-2 w-2 bg-private rounded-full mr-2 "></h2><h3 className="tracking-[4px] font-bold">LAGOS</h3>
                                </div>
                        </div>
                        <div className="md:my-0 my-6">                            
                                        <div className="flex mb-2 items-center">
                                    <h2 className="h-2 w-2 bg-private rounded-full mr-2 "></h2> <h3 className="tracking-[4px] font-bold">OYO</h3>
                                </div>
                                <h2>
                                188, Awolowo Road, Ikoyi,
                                                Lagos, Nigeria.
                                </h2>

                                <div className="md:mt-10 my-6">                        
                                            <div className="flex mb-2 items-center ">
                                    <h2 className="h-2 w-2 bg-private rounded-full mr-2 "></h2> <h3 className="tracking-[4px] font-bold">CONTACT</h3>
                                </div>
                                <h2 className="text-opacity-70 text-black">
                                188, Awolowo Road, Ikoyi,
                                                Lagos, Nigeria.
                                </h2>
                                <h2 className="text-opacity-70 text-black"><Link to={"tel://07064255373"}>+2347064255373</Link></h2>
                                </div>
                                </div>

                                
                        </div>
                    </div>
            </section>
        </>
     );
}
 
export default ContactInfo;