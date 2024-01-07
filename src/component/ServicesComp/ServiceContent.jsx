import BackgroundImgWord from "./BackgroundImgAndWord";
import img from "../../assets/images/FirstSectionImage1.jpg"

const ServiceContent = () => {
    return ( 
        <>
        <section>
            <BackgroundImgWord />
            <div className="xl:mx-6 md:mx-0  mx-6 md:mt-[140px] mt-[30px]  font-roboto">
                    <div className="flex justify-center">
                        <div>
                        <h4 className="text-private text-center">OUR SERVICES </h4>
                        <h4 className="text-3xl text-center font-bold my-3">What Service We Provide</h4>
                        
                            <h5 className="md:w-[600px] text-center flex justify-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sit, architecto dolores quam sequi hic quidem ut. Dolores, quasi rerum! Quae aperiam quia maxime et doloremque distinctio. Dolorum, doloremque. Molestias.

                            </h5>
                           
                            </div>

                    </div>
                    <div className=" grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9">
                        <div className="relative">                          
                            <img src={img} alt="img"  /> 
                            <div className="absolute bg-public p-5 text-white mx-7 group   transition ease-in-out  duration-300 hover:bg-vintage bottom-[-150px]">
                                <div className="relative">
                                    <div className="bg-vintage p-4 group-hover:bg-public absolute top-[-44px]">
                                        <h3>dasdfas</h3>
                                    </div>
                                </div>
                                <h2 className="my-3 mt-6">Land Survey</h2>
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, quae minima error debitis esse velit odit ratione exercitationem hic! Laborum id ipsa provident suscipit optio et placeat reprehenderit numquam.</h3>
                            </div>
                        </div>
 

                        <div className="relative">                          
                            <img src={img} alt="img"  /> 
                            <div className="absolute bg-public p-5 text-white mx-7 group   transition ease-in-out  duration-300 hover:bg-vintage bottom-[-150px]">
                                <div className="relative">
                                    <div className="bg-vintage p-4 group-hover:bg-public absolute top-[-44px]">
                                        <h3>dasdfas</h3>
                                    </div>
                                </div>
                                <h2 className="my-3 mt-6">Land Survey</h2>
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, quae minima error debitis esse velit odit ratione exercitationem hic! Laborum id ipsa provident suscipit optio et placeat reprehenderit numquam.</h3>
                            </div>
                        </div>
 
                        <div className="relative">                          
                            <img src={img} alt="img"  /> 
                            <div className="absolute bg-public p-5 text-white mx-7 group   transition ease-in-out  duration-300 hover:bg-vintage bottom-[-150px]">
                                <div className="relative">
                                    <div className="bg-vintage p-4 group-hover:bg-public absolute top-[-44px]">
                                        <h3>dasdfas</h3>
                                    </div>
                                </div>
                                <h2 className="my-3 mt-6">Land Survey</h2>
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat, quae minima error debitis esse velit odit ratione exercitationem hic! Laborum id ipsa provident suscipit optio et placeat reprehenderit numquam.</h3>
                            </div>
                        </div>
 
                    </div>
            </div>
        </section>
        </>
     );
}
 
export default ServiceContent;