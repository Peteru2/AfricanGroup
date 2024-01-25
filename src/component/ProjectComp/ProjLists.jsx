import img from "../../assets/images/FirstSectionImage1.jpg"
import { Link } from "react-router-dom";
import projData from "./data";
const ProjList = () => {
    return ( 
            <>
                <section className="mx-6 md:mx-5 xl:mx-[90px] mt-10">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-[30px] font-roboto">
                        {
                            projData.map((data, index) =>{
                                return(
<div key={index} className="relative group" style={{ 'maxWidth': '100%', 'height': 'auto', position: 'relative' }}>
    <img
        className="w-full h-full object-cover"
        src={data.img}
        alt="kasdka"
    />
    
    <div className="absolute inset-0 bg-public bg-opacity-60 group-hover:bg-public transition ease-in-out  duration-500" style={{  zIndex: 1}}>
    <div className="absolute inset-1 px-10 flex justify-center items-center]">
        
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
            <h2 className="text-sm">{data.type}</h2>
        </div>
    </div>
</div>
                   
                                )
                            })
                        }
                         </div>
                    
                </section>
            </>
     );
}
 
export default ProjList;