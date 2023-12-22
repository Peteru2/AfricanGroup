import { Link, useLocation } from "react-router-dom";
// import NavMenu from "./MenuItem";
import { useState, useEffect, useRef } from "react";
import NavMenu from "./NavItem";
import "./navbar.css";
import AFLOG from "../../assets/images/AFLOG21.png"

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
    <nav className="nav flex" ref={navbarRef}>
      <Link to={"/"} className="w-44 outline-none">
        <div className="nav-logo  navLogoUp flex  outline-none">
          <img src={AFLOG} className="navImg outline-none" alt="NavImg" />
        
        </div>
      </Link>

      <div className={name ? "nav-menu shadow-lg  active" : "nav-menu "}>
        {NavMenu.map((item, index) => {
        const isActive = location.pathname === item.url;
          return (
            <li className="nav-list" key={index}>
              <Link
                className={`flex w-full  `}
                to={item.url}
                
                
              >
                <span  className={`${isActive? 'text-private text-small font-bold':""}`}>{item.title}</span>
              </Link>
            </li>
          );
        })}
<div className="ml-auto flex text-white  items-center bg-private hover:bg-private   transition ease-in-out delay-150 hover:bg-opacity-60 duration-900 rounded-lg">
        <button className="  ml-4 text-xs rounded-lg "><span className="p-2">REQUEST A QUOTE</span><i className="bg-public bg-opacity-50 ml-2 p-3  rounded-tr-lg rounded-br-lg fa fa-chevron-right"></i></button>
     </div>
      </div>
     
      <div className="menu-icon ml-auto items-center" onClick={handleClick}>
        <i className={name ? "fa fa-times items-center" : "fa fa-bars-staggered items-center"}></i>
      </div>
    </nav>
  );
};

export default Navbar;