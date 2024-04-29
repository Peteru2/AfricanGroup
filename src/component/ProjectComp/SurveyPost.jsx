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
           
            <div className="flex w-full my-5">
              <div>
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Source Type</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.serviceType}</span></h2>
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Total Area</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.totalArea}</span></h2>
              </div>
              <div className="ml-auto">
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Status</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.status}</span></h2>
                <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Project Duration</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.duration}</span></h2>
              </div>
              
            </div>
            <div>
                <img src={post.img}  alt={post.title}/>
              </div>

              <div className="flex mt-4"> 
              <h2 className="flex items-center mb-2 text-[14px]"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Client</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.client}</span></h2>
                <h2 className="flex items-center mb-2 text-[14px] ml-4"><span className="flex bg-private justify-center text-white text-xs items-center w-5 h-5 mt-[2px] rounded-full"><i className="fa fa-check"></i></span> <span className="ml-6">Location</span> <span className="w-4 mx-2 mt-[2px] h-[1px] flex items-center bg-black"></span> <span>{post.totalArea}</span></h2>
              </div>

              <p className="text-[15px] my-4">
                {post.description}
              </p>

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