import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import TeamImg from "../../assets/images/Team1.jpg"
const Team = () => {
    const TeamFirstData = [
        {
            name:"Olatunji Peter",
            office: "Founder & CEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum ipsum unde dolores, quaerat fugiat vel ducimus ullam modi doloremque quae aut labore rerum commodi illo deserunt, voluptates sequi cumque.",
            img: TeamImg 
        },
        {
            name:"Olatunji Peter",
            office: "Founder & CEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum ipsum unde dolores, quaerat fugiat vel ducimus ullam modi doloremque quae aut labore rerum commodi illo deserunt, voluptates sequi cumque.",
            img: TeamImg 
        },
        {
            name:"Olatunji Peter",
            office: "Founder & CEO",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum ipsum unde dolores, quaerat fugiat vel ducimus ullam modi doloremque quae aut labore rerum commodi illo deserunt, voluptates sequi cumque.",
            img: TeamImg 
        },
]
    return ( 
        <>
        <Navbar />
            <div className="TeamBackGroundImg">
            
                <div className="h-[500px] md:pt-52 pt-32   pb-72 text-white  bg-public bg-opacity-70 ">
                    <motion.h2
                    initial={{x:'100vw'}}
                    animate={{x:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="items-center font-bold flex justify-center text-[16px]">AfricanGroup <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> About Us <span className="h-2 w-2 mx-4 bg-white bg-opacity-60 rounded-full"></span> Team
                    </motion.h2>

                    <motion.div 
                    initial={{x:'-100vw'}}
                    animate={{x:0}}
                    transition={{delay: 0.5, type: "spring"}}
                    className="mt-20 ">
                        <h4 className="text-white text-2xl font-lora flex justify-center "> Our Team</h4>
                    <h1 className="text-white md:text-6xl text-3xl   flex justify-center  font-roboto">Meet With Expert Team</h1>
                    </motion.div>
                </div>
                
            </div>
            <section className="font-roboto mt-8 xl:mx-6 md:mx-0 mx-6 my-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                    {TeamFirstData.map((data, index)=>{
                            return(
                                <>
               <div className="grid md:grid-cols-1 xl:grid-cols-2 grid-cols-1">
  <div className="relative" style={{ 'maxWidth': '100%', 'height': 'auto' }}>
    <img
      className="w-full h-full object-cover"
      src={data.img}
      alt={data.name}
    />
    <div className="absolute inset-0 px-10 flex pt-[250px]">
      <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
        <i className="fa fa-facebook"></i>
      </div>
      <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
        <i className="fa fa-facebook"></i>
      </div>
      <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
        <i className="fa fa-facebook"></i>
      </div>
    </div>
  </div>
  <div className="bg-white p-6">
    <h2 className="font-bold text-[25px] mb-1">{data.name}</h2>
    <h4 className="text-gray">{data.office}</h4>
    <h4 className="my-6">{data.description}</h4>
  </div>
</div>

                       </>     )
                    })}
                
                </div>                
            </section>
            
        </>
     );
}
 
export default Team;