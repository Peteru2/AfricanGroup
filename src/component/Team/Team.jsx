import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import TeamImg from "../../assets/images/Team1.jpg"
import image from "../../assets/images/about.jpg"
import ImageWithOverlay from '../ImageWithOverlay';
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
            
            <ImageWithOverlay
                imageUrl={image}
                span1="About Us"
                span2="Team"
                title2="Our Team"
                decrip="Meet With The Expert Team"
      />
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
                <div className="grid md:grid-cols-2 xl:grid-cols-4 mt-10 gap-4 grid-cols-1">
                        <div>
                           
                            
                            <div className="relative" style={{ 'maxWidth': '100%', 'height': 'auto' }}>
                                    <img
                                    className="w-full h-full object-cover"
                                    src={TeamImg}
                                    alt={'ldff'}
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
                            <div className="bg-white p-4">
                            <h2 className="font-bold text-[25px] mb-1">James Brown</h2>
                            <h4 className="text-gray">Data</h4>

                            
                            <h2 className="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet ut, explicabo nesciunt, dolore libero, omnis quisquam aperiam vel dolorem quo amet accusamus quae quasi. Dignissimos molestiae earum ipsum repudiandae!</h2>
                            </div>
                        </div>
                        
                    </div>          
            </section>
            
        </>
     );
}
 
export default Team;