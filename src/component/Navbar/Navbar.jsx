import { Link, useLocation } from "react-router-dom";
// import NavMenu from "./MenuItem";
import { useState, useEffect, useRef } from "react";
import NavMenu from "./NavItem";
import "./navbar.css";
import AFLOG from "../../assets/images/AFLOG.jpg"

// import clickPng from "../clickIcon.png";

const Navbar = () => {
const location = useLocation()
  const [name, setName] = useState(false);

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
    <nav className="nav flex font-roboto" ref={navbarRef}>
      <Link to={"/"} className="w-44 outline-none">
        <div className="nav-logo   outline-none">
          <img src={AFLOG} className="navImg outline-none" alt="NavImg" />
        
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
                <span  className={`text-[19px] md:text-[17px] ${isActive? 'text-private font-bold':""}`}>{item.title}</span>
              </Link>
            </li>
          );
        })}
<div className="xl:ml-auto flex text-white w-44  items-center bg-private hover:bg-private   transition ease-in-out delay-150 hover:bg-opacity-60 duration-900 rounded-lg">
        <button className=" text-xs flex items-center justify-center rounded-lg w-full"><span className="p-2 w-full flex justify-center">REQUEST A QUOTE</span><i className="bg-public bg-opacity-50 ml-auto p-3  rounded-tr-lg rounded-br-lg fa fa-chevron-right"></i></button>
     </div>
      </div>
     
      <div className="menu-icon ml-auto items-center" onClick={handleClick}>
        <i className={name ? "fa fa-times items-center text-private" : "fa fa-bars-staggered items-center"}></i>
      </div>
    </nav>
  );
};

export default Navbar;