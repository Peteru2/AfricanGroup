import { Link } from "react-router-dom";
import Logo from "../assets/images/AFLOG.jpg"
const Footer = () => {
    return ( 
        <>
            <section className="  bg-public bg-opacity-90 px-6 md:py-9 py-2 mt-0 w-full font-roboto text-white text-[15px] font-bold">
                <div className="grid md:grid-cols-9 md:py-10 py-2 grid-cols-1 gap-4 border-b-[1px] border-white ">
                    <div className="col-span-2 w-full border-b-[1px]  md:py-0 py-4 border-white md:border-0">
                       
                        <img src={Logo} alt="logo"  className="mb-4 rounded-[10px]"/>
                        <h4>African Group  is a fully licensed land surveying company serving the greater Oyo City</h4>
                        <div className="flex mt-2 text-[20px]">
                           <Link className="hover:text-vintage  transition ease-in-out  duration-300"> <i className="fa fa-facebook mr-2"></i></Link>
                           <Link className="hover:text-vintage  transition ease-in-out  duration-300">  <i className="fa fa-twitter mx-2"></i></Link>
                           <Link className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-instagram mx-2"></i></Link>
                           <Link className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-linkedin mx-2"></i></Link>
                           <Link className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-facebook mx-2"></i></Link>
                           <Link className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-facebook mx-2"></i></Link>


                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <h2 className="mb-6 md:text-[22px] text-[18px]">USEFUL LINKS</h2>

                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300">Blog </button></h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300">Contact</button></h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300 text-left">Privacy Policy</button></h4>

                    </div>
                    <div className="col-span-2">
                        <h2 className="mb-6 md:text-[22px] text-[18px]">CONTACT INFO</h2>
                        <h4 className="my-2"><i className="fa fa-building mr-2"></i> Union Bank Road, Owode, Oyo, Nigeria</h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-phone mr-2"></i>+234 076 4255 373 </button></h4>
                        <h4 className="my-2"> <button className="hover:text-vintage  transition ease-in-out  duration-300"><i className="fa fa-envelope mr-2"></i>africangroup@gmail.com</button></h4>


                    </div>

                    <div className="col-span-4">
                        <h2 className="mb-6 font-serif md:text-[22px] text-[18px]">CAREERS</h2>
                        <h4>We are constantly in quest of talented, passion-driven folks with a tenacity for excellence.</h4>
                    </div>                
                    </div>
                    <h2 className="my-4">©2023 All Rights Reserved</h2>
            </section>
        </>
     );
}
 
export default Footer;