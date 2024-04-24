import img from "../../assets/images/FirstSectionImage1.jpg"
import { Link } from "react-router-dom";
import projData from "./data";
import { motion } from "framer-motion";
import { useState } from "react";
import Construction from "./Construction";
import RealEstate from "./RealEstate";
import Survey from "./Survey";
const ProjList = () => {

    const [all, setAll] = useState(true)
    const [construction, setConstruction] = useState(false)
    const [realEstate, setRealEstate] = useState(false)
    const [survey, setSurvey] = useState(false)
    
    const handleAll =() =>{
        setAll(true)
        setConstruction(false)
        setRealEstate(false)
        setSurvey(false)
    }

    const handleConstruction =() =>{
        setAll(false)
        setConstruction(true)
        setRealEstate(false)
        setSurvey(false)
    }
    const handleRealEstate =() =>{
        setAll(false)
        setConstruction(false)
        setRealEstate(true)
        setSurvey(false)
    }
    const handleSurvey =() =>{
        setAll(false)
        setConstruction(false)
        setRealEstate(false)
        setSurvey(true)
    }
    return ( 
            <>

                <section className="mx-6 md:mx-5 xl:mx-[90px] mt-10">
                   
                <div
                     
                     className={"flex justify-center"}>
                        <motion.div
                        variants ={{
                            hidden:{opacity: 0, y: 75},
                            visible:{opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{delay:  0.5, 
                        duration: 0.5}}
                        className="mb-6">
                            <h5 className="md:w-[620px] text-center flex font-medium justify-center mb-4">We understand how hard it is to get the best, that's why we provide the best in class property deals, innovative designs and outstanding constructions to our clients. </h5>
                           
                            </motion.div>

                    </div>
                    <div className="flex justify-center mb-14">
                        <h2 onClick={handleAll} className={`${all?" border-b-2 transition-all duration-300 ease-in-out text-center":" text-black text-opacity-60"} py-3 px-4  mx-2 cursor-pointer  `}>All</h2>
                        <h2 onClick={handleConstruction} className={`${construction?" border-b-2 transition-all duration-300 ease-in-out text-center":" text-black text-opacity-60"} py-3 px-4  mx-2 cursor-pointer    `}>Construction</h2>
                        <h2  onClick={handleRealEstate} className={`${realEstate?" border-b-2 transition-all duration-300 ease-in-out text-center":" text-black text-opacity-60"} py-3 px-4  mx-2 cursor-pointer   `}>Real Estate</h2>
                        <h2  onClick={handleSurvey} className={`${survey?" border-b-2 transition-all duration-300 ease-in-out text-center":" text-black text-opacity-60"} py-3 px-4  mx-2 cursor-pointer   `}>Surveying</h2>


                    </div>
                    
                    <div className={ `${all ? "block" : " hidden"} grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mb-[30px] font-roboto`}>
                         {
                            projData.map((data, index) => {
                                return(
                                    <>
<motion.div
 variants ={{
    hidden:{opacity: 0, y: 75},
    visible:{opacity: 1, y: 0},
}}
initial="hidden"
whileInView="visible"
transition={{delay: index*  0.2, 
duration: 0.5}}
key={index} 
className="relative group"
style={{ 'maxWidth': '100%', 'height': 'auto', position: 'relative' }}>
    <img
        className="w-full h-full object-cover"
        src={data.img}
        alt="kasdka"
    />
   
    <div className="absolute inset-0 bg-public bg-opacity-60 group-hover:bg-public transition ease-in-out  duration-500" style={{  zIndex: 1}}>

    <div className={`${ data.status=="Available"? "bg-private text-white": data.status=="Ongoing"?"bg-yellow bg-opacity-80 text-black":data.status =="Sold Out"?"bg-red text-white":data.status=="Completed"?"bg-public text-white":""} text-sm absolute right-[17px] py-[6px] px-4  rounded-[2px]  `}>
    <h2>{data.status}</h2>
    </div>
    <div className="absolute inset-1 px-10 flex justify-center items-center]">

         <div className="flex absolute bottom-[-4px] left-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                    <h1 className="h-3 w-3 bg-private"></h1>
        </div>
        <div className="flex absolute top-[-4px] left-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                    <h1 className="h-3 w-3 bg-private"></h1>
        </div>
        <div className="flex absolute bottom-[-4px] right-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                    <h1 className="h-3 w-3 bg-private"></h1>
        </div>
        <div className="flex absolute top-[-4px] right-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                    <h1 className="h-3 w-3 bg-private"></h1>
        </div>
        <div className="flex justify-center items-center  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
        <Link to={`/project/${data.titleParam}`} className=''>
        <div className=" w-8 mx-4 flex text-white h-8 cursor-pointer  bg-private hover:bg-white hover:text-public  justify-center items-center">
            <i className="fa fa-link"></i>
        </div>
        </Link> 
        </div>
    </div>  
    <div className="text-white px-4 absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <h2 className="text-sm capitalize">{data.category}</h2>
        </div>
    </div>
</motion.div>
</>
                   
                                )
                            })
                        } 
                         </div>

            <div className={`${construction ? "block" : " hidden"}`}>

                <Construction />
            </div>
            <div className={`${realEstate ? "block" : " hidden"}`}>

                <RealEstate />
            </div>
            <div className={`${survey ? "block" : " hidden"}`}>

                <Survey />
            </div>
                </section>
            </>
     );
}
 
export default ProjList;