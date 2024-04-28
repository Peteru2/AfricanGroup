import { useRef, useEffect, useState } from "react";
import img from "../../assets/images/FirstSectionImage1.jpg"

const RealEstateImgSlide = () => {
    const sliderRef = useRef(null);
    const [showButtons, setShowButtons] = useState(true);
    const scrollAmountDesktop = 840; 
    const scrollAmountMobile = 400; 
    console.log(window.innerWidth)

    const scrollAmount = window.innerWidth <= 768 ? scrollAmountMobile : scrollAmountDesktop;
    useEffect(() => {
        const container = sliderRef.current;
        let startX = 0;
        let isScrolling = false;

        const handleTouchStart = (e) => {
            isScrolling = true;
            startX = e.touches[0].clientX;
        };

        const handleTouchMove = (e) => {
            if (!isScrolling) return;
            const distance = startX - e.touches[0].clientX;
            container.scrollLeft += distance;
            startX = e.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            isScrolling = false;
        };

        container.addEventListener("touchstart", handleTouchStart);
        container.addEventListener("touchmove", handleTouchMove);
        container.addEventListener("touchend", handleTouchEnd);

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    // Toggle visibility of navigation buttons based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowButtons(false);
            } else {
                setShowButtons(true);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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