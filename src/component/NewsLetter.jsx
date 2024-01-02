const NewsLetter = () => {
    return ( 
        <>
           <div className="flex justify-center items-center">
            <section className="footer-child  grid md:grid-cols-2 gap-4 grid-cols-1 bg-vintage  py-8 px-8  md:mx-16 mx-6 flex  text-white ">
                <div className="">
                    <h2 className="text-[25px] font-playfair mb-6">Subscribe & get more information</h2>
                    <h4 className="text-[16px] font-roboto break-words md:w-[500px]">Get the latest updates about the latest developments and exciting news on how we are shaping the future!</h4>
                </div>
                <div className="md:ml-auto  flex items-center"> 
                <div className="md:ml-auto md:w-auto w-full grid md:grid-cols-2 grid-cols-1 gap-2 ">
                    <input type="email" className="px-2 py-4 text-black outline-none" placeholder="Email"/>
                    <button className=" font-roboto  bg-public border-white py-2  text-center  hover:text-public hover:bg-white  transition ease-in-out  duration-300">Subscribe</button>
                    </div>
                </div>
               
            </section>
            </div>
        </>
     );
}
 
export default NewsLetter;