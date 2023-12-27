import { Link } from "react-router-dom";

const Values = () => {
    return ( 
        <>
            <section className="">
                  <div className="values ">
                                <div className="bg-public pt-6 xl:px-6 md:px-0 px-6 font-bold bg-opacity-95 ">
                                    <h2 className="e text-center text-white text-opacity-80  my-2 tracking-widest">Our Core Values</h2>
                                    <h2 className="text-white text-4xl text-center my-6 mb-10 font-roboto">P R C Q</h2>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">

                        <div className="">
                            <div className="flex w-full  text-5xl justify-center text-center font-bold">
                                <h2><i className="fa fa-check-circle text-white border-2 rounded-full border-white text-center "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white text-center">Quality</h2>
                                    <h4 className="text-[17px] font-roboto text-white text-center">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. </h4>
                                </div>
                           

                            <div className="  ">
                            <div className="flex w-full  text-5xl justify-center text-center font-bold">
                                <h2><i className="fa fa-check-circle text-white border-2 rounded-full border-white text-center "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white text-center">Quality</h2>
                                    <h4 className="text-[17px] font-roboto text-white text-center">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. </h4>
                                </div>
                        
                                <div className="  ">
                            <div className="flex w-full  text-5xl justify-center text-center font-bold">
                                <h2><i className="fa fa-check-circle text-white border-2 rounded-full border-white text-center "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white text-center">Quality</h2>
                                    <h4 className="text-[17px] font-roboto text-white text-center">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. </h4>
                                </div>

                                <div className="  ">
                            <div className="flex w-full  text-5xl justify-center text-center font-bold">
                                <h2><i className="fa fa-check-circle text-white border-2 rounded-full border-white text-center "></i></h2>
                                
                                </div>
                                    <h2 className="font-lora font-bold text-2xl my-4 text-white text-center">Quality</h2>
                                    <h4 className="text-[17px] font-roboto text-white text-center">Professionalism is the cornerstone of our operations at NY Land Surveyor. We maintain the highest level of professional conduct in all aspects of our work, upholding ethical standards and adhering to industry best practices. Our team is composed of licensed professionals who possess the expertise and knowledge required to handle complex surveying projects with utmost professionalism. </h4>
                                </div>

                                </div>
                                <div className="flex justify-center mt-10">
                                    <button className="w-28 py-2 text-white border-white rounded-full  border-[1px]"> <Link to={'/About'}>About Us </Link> </button>
                                </div>
                                <div className="w-full flex justify-center mt-16">
                                <div className="w-[.5px] h-28 bg-gray  ">
                                        
                                </div>
                                </div>
                    </div>
                                       
                    </div>  
            </section>
        </>
     );
}
 
export default Values;