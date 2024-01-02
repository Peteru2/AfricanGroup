const Team = () => {
    return ( 
        <>
        <div className="about mb-[200px]">
            <section className="bg-private grid  md:grid-cols-2 grid-cols-1 px-4 bg-opacity-70 font-roboto py-6">
                <div className="">
                   
                    <h2 className="text-white text-[40px] font-playfair font-bold  md:w-[500px] ">Professional Land Surveying And Mapping</h2>
                </div>
                <div>
                    <h4 className="text-[20px] text-white">African Group routinely provides surveying solutions for business, real estate, land development and civil engineering in Boise area.</h4>
                    <div className="mt-2 flex">
                        <h3 className="w-20 h-2 bg-vintage"></h3>
                        <h3 className="w-2 h-2 bg-public ml-2"></h3>

                    </div>
                </div>
            </section>
            </div>
            <div>
                <h3 className="text-center">Meet Our Team</h3>
            </div>
        </>
     );
}
 
export default Team;