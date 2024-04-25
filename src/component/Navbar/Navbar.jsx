import { Link, useLocation } from "react-router-dom";
// import NavMenu from "./MenuItem";
import { useState, useEffect, useRef } from "react";
import NavMenu from "./NavItem";
import "./navbar.css";
import AFLOG from "../../assets/images/AFLOG.jpg"
import { motion } from "framer-motion";


const Navbar = () => {
const location = useLocation()
  const [name, setName] = useState(false);
  const [url, setUrl] = useState("/About");
    const [content, setContent] = useState("Cease your opportunity now at Evergreen Estate");

    useEffect(() => {
      const interval = setInterval(() => {
          
          setUrl(prevUrl => prevUrl === "/About" ? "/Peace" : "/About");
          setContent(prevContent => prevContent === "Cease your opportunity now at Evergreen Estate" ? "Act now and secure your piece of Peace Court Jobele!" : "Cease your opportunity now at Evergreen Estate");
      }, 5000); // 300000 milliseconds = 5 minutes

      return () => clearInterval(interval);
  }, []);
  const handleClick = () => {
    setName((current) => !current);
  };

  const navbarRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        navbarRef.current.classList.add("nav-active");
        navbarRef.current.classList.add("shadow-xl")
        

      } else {
        navbarRef.current.classList.remove("nav-active");
        navbarRef.current.classList.remove("shadow-xl");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
   
    <nav
    className="nav  font-roboto" ref={navbarRef}>
      <div className="flex navPad">
      <Link to={"/"} className="w-44 outline-none">
        <div className="nav-logo   outline-none">
          <img 
          src={AFLOG}
          className="navImg outline-none" 
          alt="NavImg"
          loading="lazy"
          
          />
        
        </div>
      </Link>

      <div className={name ? "nav-menu   active" : "nav-menu "}>
        {NavMenu.map((item, index) => {
        const isActive = location.pathname === item.url;
          return (
            <li className="nav-list" key={index}>
              <Link
                className={`flex w-full`}
                to={item.url}
                
              
              >
                <motion.span  
                variants ={{
                  hidden:{opacity: 0, y: 75},
                  visible:{opacity: 1, y: 0},
              }}
              initial="hidden"
              whileInView="visible"
              transition={{delay:  0.5, 
              duration: 0.5}}
                className={`text-[19px] md:text-[17px] ${isActive? 'text-private font-bold':""}`}>{item.title}</motion.span>
              </Link>
            </li>
          );
        })}
        <Link to={"/request-quote"}>
<div className="xl:ml-auto flex text-white w-44 group items-center bg-private hover:bg-public hover:bg-opacity-90   transition ease-in-out delay-150 duration-900 rounded-lg">
        <button  className=" text-xs flex items-center justify-center rounded-lg w-full"><span className="p-2 w-full flex justify-center">REQUEST A QUOTE</span><i className="bg-public bg-opacity-50 ml-auto p-3 transition ease-in-out delay-150 duration-900 group-hover:bg-private rounded-tr-lg rounded-br-lg fa fa-chevron-right"></i></button>
     </div>
     </Link>
      </div>
     
      <div className="menu-icon ml-auto items-center" onClick={handleClick}>
        <i className={name ? "fa fa-times items-center text-private" : "fa fa-bars-staggered items-center"}></i>
      </div>
      <div>

      </div>
      
</div>
<Link to={url}>
            <div>
                <h2 className="bg-private bg-opacity-60 text-white font-light py-2 text-center w-full">{content}</h2>
            </div>
        </Link>
    </nav>
   
  
</>
  );
};

export default Navbar;