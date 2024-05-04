import Layout from "../Layout";
import ImageWithOverlay from "../ImageWithOverlay";
import { useParams } from "react-router-dom";
import projData from "./data";
import image from "../../assets/images/about.jpg"
import { Link } from "react-router-dom";


const SurveyPost = () => {
    const { titleParam } = useParams();
    const post = projData.find((post) => post.titleParam === titleParam);
    if (!post) {
      return <div>Post not found</div>;
    }
    return ( 
        <>
        <Layout>
        <ImageWithOverlay
                imageUrl={image}
                span1="Project"
                span2={post.title}
                spanClass ="text-private"
                title2=""
                decrip={post.title}
                height="380px"
      />


          <div className="xl:mx-[90px] md:mx-5 mx-6">
          <div className="my-3">
            <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                <div>
                    <h2 className="text-black font-bold text-[18px] mb-4 text-opacity-80">{post.location}</h2>
                    <h2 className="text-black font-normal text-opacity-60 flex items-center"><span className="rounded font-thin text-sm py-1 bg-gray bg-opacity-20 test-gray px-3 mr-3">Survey</span><span className={`${ post.status=="Completed"? "bg-public bg-opacity-60  text-white": post.status =="Ongoing"?"bg-yellow bg-opacity-80 text-black":""} text-sm   px-3 py-1 rounded  `}>{post.status}</span></h2>

                </div>
                <div className="md:ml-auto md:mt-0 mt-5">
                        <h2 className="font-bold text-black text-opacity-80 text-[18px] mb-2"><i>{post.client}</i></h2>
                        <h2 className="text-black font-normal text-opacity-60"><i> {post.totalArea} </i></h2>

                </div>
            </div>
        </div>
           
            {/* <div className="grid md:grid-cols-2 grid-cols-1 w-full my-5">
              <div>
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Source Type</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.serviceType}</span></h2>
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Total Area</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.totalArea}</span></h2>
              </div>
              <div className="">
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Status</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.status}</span></h2>
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Project Duration</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.duration}</span></h2>
              </div>
              
            </div> */}
            <div className="grid md:grid-cols-2 my-8  grid-cols-1 gap-4">
              <div>
                <img src={post.img}  alt={post.title}/>
              </div>
              <div>
                <img src={post.img}  alt={post.title}/>
              </div>
              </div>

              {/* <div className="md:flex mt-4"> 
              <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Client</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.client}</span></h2>
                <h2 className="flex items-center mb-2 text-[14px] md:ml-4"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Location</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.location}</span></h2>
              </div> */}

            <div className="grid md:grid-cols-8 grid-cols-1 mt-4 bg-white shadow py-4 px-2">
              <h2 className="font-semibold text-[22px] md:mb-0 mb-3 col-span-3">Project Summary</h2>
              <p className="text-[15px]  col-span-5">

                {post.description}
              </p>
              </div>
                <div className="flex w-full justify-center mt-4">
                  <Link to={"/request-quote"}>
              <button className=" border-[1px] p-3 border-private text-private">
                  Start A Project
              </button>
              </Link>
              </div>
          </div>
        </Layout>
        </>
     );
}
 
export default SurveyPost;