import Layout from "../Layout";
import ImageWithOverlay from "../ImageWithOverlay";
import { useParams } from "react-router-dom";
import projData from "./data";
import image from "../../assets/images/about.jpg"


const RealEstatePost = () => {
    const { titleParam } = useParams();
    const post = projData.find((post) => post.titleParam === titleParam);
    const amenities = post.amenities.split(';') 
    const landmarks = post.landmarks.split(';') 

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
        <div className="my-3">
            <div className="flex w-full">
                <div>
                    <h2 className="text-black font-bold text-[18px] mb-4 text-opacity-80">{post.location}</h2>
                    <h2 className="text-black font-normal text-opacity-60 flex items-center"><span className="rounded font-thin text-sm py-1 bg-gray bg-opacity-20 test-gray px-3 mr-3">Land</span><span className={`${ post.status=="Available"? "bg-private bg-opacity-20  text-private": post.status =="Sold Out"?"bg-red bg-opacity-20 font-thin text-red":""} text-sm   px-3 py-1 rounded  `}>{post.status}</span></h2>

                </div>
                <div className="ml-auto">
                        <h2 className="font-bold text-black text-opacity-80 text-[18px] mb-2"><i>{post.price}</i></h2>
                        <h2 className="text-black font-normal text-opacity-60"><i> per {post.sqm} sqm</i></h2>

                </div>
            </div>
        </div>
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
        <div className="mt-8">
            <h2 className="font-bold text-[18px] my-2 ">
                Amenities
            </h2>
            <div className="md:ml-10">
            <ol className='list'>
              {amenities.map((amenities, index) => (
                <li className='my-2' key={index}>{amenities}</li>
              ))}
            </ol>
            </div>
            
        </div>

        <div className=" mt-8">
            <h2 className="font-bold text-[18px] my-2">
                Landmarks
            </h2>
            <div className="md:ml-10">
            <ol className='list'>
              {landmarks.map((landmarks, index) => (
                <li className='my-2' key={index}>{landmarks}</li>
              ))}
            </ol>
            </div>
            
        </div>
      </div>
        </Layout>
        </>
     );
}
 
export default RealEstatePost;