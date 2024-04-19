import { motion } from "framer-motion";
const ImageWithOverlay = ({ imageUrl, span1, span2, title2, decrip,height, spanClass}) => {
    const overlayStyle = {
      background: 'rgba(45, 64, 0, .9)', 
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
      height: `${height}`, // Adjust the height as needed
      color: 'white', // Text color
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
  
    return (
      <div style={containerStyle} >
        <div style={overlayStyle} className="flex items-center justify-center">
            <div className="flex justify-center items-center">
            <div>
            <motion.div 
                    initial={{y:'-100vw'}}
                    animate={{y:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className=" ">
                        <h4 className="text-gray text-sm font-lora mt-10  flex justify-center ">{title2}</h4>
                    <h1 className="text-white md:text-[35px] mb-4 mt-2 text-3xl font-bold  flex justify-center  font-roboto">{decrip}</h1>
                    </motion.div>
        <motion.h2
                    initial={{y:'100vw'}}
                    animate={{y:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="items-center  flex justify-center  flex-wrap text-[16px]">African Group <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> {span1}  {span2 != ""? ( <><span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> <span className={spanClass}>{span2}</span></>):""}
                    </motion.h2>
                   
                </div>
                </div>
        </div>
      </div>
    );
  };
  
  export default ImageWithOverlay;