import Layout from "../Layout";
import ImageWithOverlay from "../ImageWithOverlay";
import { useParams } from "react-router-dom";
import projData from "./data";
import image from "../../assets/images/about.jpg"


const RealEstatePost = () => {
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

      <div className="my-4 xl:mx-[90px] md:mx-5 mx-6 font-roboto">
        <div className="flex w-full">
                <div className="ml-auto">
                    <button className="p-2 border-[1px] rounded-md ">Book and appointment</button>
                    <button className="bg-public rounded-md text-white p-2 ml-4">Contact Us</button>
                </div>
        </div>
        <div className="mt-2">
            <h2 className="my-1 font-bold text-[18px]">Description</h2>
        <p className="my-2">{post.description1}</p>
        <p className="my-2">{post.description2}</p>
        <p className="my-2">{post.description3}</p>

        </div>
      </div>
        </Layout>
        </>
     );
}
 
export default RealEstatePost;