import { Bounce, Fade } from "react-awesome-reveal"
import { useEffect, useRef } from "react"
const Services = () => {
    const str = "African Group African Group"
    const textRef = useRef(null);

    useEffect(() => {
        const textContainer = textRef.current;
    
        if (textContainer) {
          for (let i = 0; i < str.length; i++) {
            let span = document.createElement('mark');
            span.innerHTML = str[i];
            textContainer.appendChild(span);
            span.style.transform = `rotate(${11 * i}deg)`;
          }
        }
      }, [str]);
       
    
    return ( 
        <>
         {/* <Fade triggerOnce direction="left"  >
            <section className="bg-public bg-opacity-50 h-44  w-full  mb-[200px]">
                <div></div>
                <div className=" flex justify-center">
                    <h2 className="font-playfair text-4xl text-white py-4">Our Services</h2>
                </div>
                <div className="flex justify-center">
                        <div className="grid grid-cols-3 gap-4 ">
                        <Bounce cascade direction=""> */}
                                {/* <div className="bg-white h-[200px] ">
                                    lo
                                </div>
                                <div className="bg-white h-[200px] ">
                                    lo
                                </div>
                                <div className="bg-white h-[200px] ">
                                  
                                    
                                </div> */}
                                {/* </Bounce>
                                
                        </div> */}
                        <div classNam="circle-container">
                                    <p className="text" ref={textRef}></p>
                                     </div>
                        {/* </div>
            </section> 
        </Fade> */}
        </>
     );
}
 
export default Services;