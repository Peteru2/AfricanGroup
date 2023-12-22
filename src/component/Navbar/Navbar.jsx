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
  const navSignRef = useRef(null);
  const navLoginRef = useRef(null);
  const  navContactRef = useRef(null)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        navbarRef.current.classList.add("nav-active");
        navbarRef.current.classList.add("shadow-xl");
        navSignRef.current.classList.add("signUpDown");
        navSignRef.current.classList.remove("signUpTop");
        navLoginRef.current.classList.add("loginDown");
        navLoginRef.current.classList.remove("loginTop");
        navContactRef.current.classList.add("text-black");
        navContactRef.current.classList.remove("text-white");

        


        // navSignRef.current.classList.add("text-white");
        // navSignRef.current.classList.remove("text-blue-500");
      } else {
        navbarRef.current.classList.remove("nav-active");
        navbarRef.current.classList.remove("shadow-xl");
        navSignRef.current.classList.add("signUpTop");
        navSignRef.current.classList.remove("signUpDown");
        navLoginRef.current.classList.add("loginTop");
        navLoginRef.current.classList.remove("loginDown");
        navContactRef.current.classList.add("text-white");
         navContactRef.current.classList.remove("text-black");
       




        // navSignRef.current.classList.remove("bg-blue-500");
        // navSignRef.current.classList.add("text-blue-500");
        // navSignRef.current.classList.remove("text-white");

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav flex" ref={navbarRef}>
      <Link to={"/"} className="w-44">
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
                className={`flex w-full ${item.cName} `}
                to={item.url}
              >
                <span className={`${isActive? 'text-private text-small font-bold':""}`}>{item.title}</span>
              </Link>
            </li>
          );
        })}
<div className="ml-auto flex items-center">
        <button className="bg-private p-2 ml-4 text-xs rounded-lg">REQUEST A QUOTE</button>
     </div>
      </div>
     
      <div className="menu-icon ml-auto items-center" onClick={handleClick}>
        <i className={name ? "fa fa-times items-center" : "fa fa-bars-staggered items-center"}></i>
      </div>
    </nav>
  );
};

export default Navbar;