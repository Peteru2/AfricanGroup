import { useRef, useEffect, useState } from "react";
import img from "../../assets/images/FirstSectionImage1.jpg"

const RealEstateImgSlide = ({post}) => {
    const sliderRef = useRef(null);
    const [showButtons, setShowButtons] = useState(true);
    const scrollAmountDesktop = 500; 
    const scrollAmountTablet = 200; 
    const scrollAmountMobile = 150; 

    console.log(window.innerWidth)
    const scrollAmount = window.innerWidth <= 768 ? scrollAmountMobile : window.innerWidth <= 480 ? scrollAmountTablet : scrollAmountDesktop;


    return ( 
        <>
        <div className="slide">
   
     
  
      <div className="images-container" ref={sliderRef}>
      
        {/* {post.images.map((image) => {
          return (
            <img
              className="image"
              alt="sliderImage"
              key={image?.id}
              src={image}
            />
          );
        })} */}
          <img
              className="image"
              alt="sliderImage"
              key={img}
              src={img}
            />
            {/*
             <img
              className="image"
              alt="sliderImage"
              key={img}
              src={img}
            />
            <img
              className="image"
              alt="sliderImage"
              key={img}
              src={img}
            />
             <img
            className="image"
            alt="sliderImage"
            key={img}
            src={img}
          /> */}
           <button
        className="nav-btn1"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
        }}
      >
        <i className="fa fa-chevron-left"></i>
      </button>
        
           <button
        className="nav-btn2"
        onClick={() => {
          const container = sliderRef.current;
          container.scrollLeft += scrollAmount; 
        }}
      >
                <i className="fa fa-chevron-right"></i>

      </button>
      </div>
   
     
   </div>
        </>
     );
}
 
export default RealEstateImgSlide;