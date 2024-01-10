import { motion } from "framer-motion";
const ImageWithOverlay = ({ imageUrl, title1, span1, span2, title2, decrip}) => {
    const overlayStyle = {
      background: 'rgba(45, 64, 0, .8)', 
      position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    };
  
    const containerStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      height: '450px', // Adjust the height as needed
      color: 'white', // Text color
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    return (
      <div style={containerStyle}>
        <div style={overlayStyle}>
            <div className="my-[120px]">
            <div >
        <h2
                    
                    className="items-center font-bold flex justify-center text-[16px]">{title1} <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> {span1}  {span2 != ""? ( <><span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> {span2}</>):""}
                    </h2>
                    <div 
                    
                    className="mt-20 ">
                        <h4 className="text-white text-2xl font-lora flex justify-center ">{title2}</h4>
                    <h1 className="text-white md:text-6xl text-3xl   flex justify-center  font-roboto">{decrip}</h1>
                    </div>
                </div>
                </div>
        </div>
      </div>
    );
  };
  
  export default ImageWithOverlay;