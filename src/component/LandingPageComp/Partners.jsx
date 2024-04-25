import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import  { useEffect, useRef } from 'react';
const Partners = () => {
    const carRef = useRef(null);

  useEffect(() => {
    const car = carRef.current;
    const handleAnimationEnd = () => {
      car.style.transition = 'none';
      car.style.transform = 'translateX(0)';
      requestAnimationFrame(() => {
        car.style.transition = 'transform 0s';
      });
    };

    car.addEventListener('animationiteration', handleAnimationEnd);

    return () => {
      car.removeEventListener('animationiteration', handleAnimationEnd);
    };
  }, []);


    return ( 
        <>
           <div className="car-container bg-white">
                <div className="car bg-white" ref={carRef}>
                {/* <div className="flex py-2 bg-white"> */}

                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                <img src={Image1} alt="image!" className="w-[150px] h-[150px] mr-5"/>
                
                </div>

           </div>
        </>
     );
}
 
export default Partners;