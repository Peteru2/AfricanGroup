const NewsLetter = () => {
    return ( 
        <>
            <section className="bg-public bg-opacity-70 py-8 w-full md:px-0 px-6 flex justify-center text-white">
                <div className="">
                    <h2 className="text-[25px] font-playfair text-center mb-6">Subscribe to our news letter</h2>
                    <h4 className="text-[16px] font-roboto text-center">Get the latest updates about the latest developments and exciting news on how we are shaping the future!</h4>
                    <div className="flex justify-center mt-4">
                    <button className="rounded-full px-12 border-2 border-white flex py-2    hover:text-public hover:bg-white  transition ease-in-out  duration-300">Subscribe</button>
                    </div>
                </div>
               
            </section>
        </>
     );
}
 
export default NewsLetter;