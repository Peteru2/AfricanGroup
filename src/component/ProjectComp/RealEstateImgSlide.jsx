import { useRef } from "react";
import img from "../../assets/images/FirstSectionImage1.jpg"

const RealEstateImgSlide = () => {
    const sliderRef = useRef(null);
     const scrollAmount = 1200; 
    return ( 
        <>
        <div className="slide">
   
     
  
      <div className="images-container" ref={sliderRef}>
        {/* {images.map((image) => {
          return (
            <img
              className="image"
              alt="sliderImage"
              key={image?.id}
              src={image?.url}
            />
          );
        })} */}
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
            />
             <img
            className="image"
            alt="sliderImage"
            key={img}
            src={img}
          />
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