import Logo from "../assets/images/AFLOG.jpg"
const Footer = () => {
    return ( 
        <>
            <section className="bg-private px-6 py-9  w-full font-roboto text-white text-[15px] font-bold">
                <div className="grid md:grid-cols-9 py-10 grid-cols-1 gap-4 border-b-[1px] border-white ">
                    <div className="col-span-2 w-full border-b-[1px]  md:py-0 py-4 border-white md:border-0">
                       
                        <img src={Logo} alt="logo"  className="mb-6 rounded-[10px]"/>
                        <h4>African Group  is a fully licensed land surveying company serving the greater Oyo City</h4>

                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <h2 className="mb-6 text-2xl">USEFUL LINKS</h2>

                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out delay-150 duration-900">Blog </button></h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out delay-150 duration-900">Contact</button></h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out delay-150 duration-900 text-left">Privacy Policy</button></h4>

                    </div>
                    <div className="col-span-2">
                        <h2 className="mb-6 text-2xl">CONTACT INFO</h2>
                        <h4 className="my-2"><i className="fa fa-building mr-2"></i> Union Bank Road, Owode, Oyo, Nigeria</h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out delay-150 duration-900"><i className="fa fa-phone mr-2"></i>+234 076 4255 373 </button></h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out delay-150 duration-900"><i className="fa fa-envelope mr-2"></i>africangroup@gmail.com</button></h4>


                    </div>

                    <div className="col-span-4">
                        <h2 className="mb-6 font-serif text-2xl">CAREERS</h2>
                        <h4>We are constantly in quest of talented, passion-driven folks with a tenacity for excellence.</h4>
                    </div>                
                    </div>
                    <h2 className="my-4">©2023 All Rights Reserved</h2>
            </section>
        </>
     );
}
 
export default Footer;