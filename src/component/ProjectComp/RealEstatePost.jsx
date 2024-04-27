import Layout from "../Layout";
import ImageWithOverlay from "../ImageWithOverlay";
import { useParams } from "react-router-dom";
import projData from "./data";
import image from "../../assets/images/about.jpg"
import RecommendedRealEstate from "./RecommendedRealEstate";


const RealEstatePost = () => {
    const { titleParam } = useParams();
    const post = projData.find((post) => post.titleParam === titleParam);
    const amenities = post.amenities.split(';') 
    const landmarks = post.landmarks.split(';') 
    const documents = post.documents.split(';') 


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
            <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                <div>
                    <h2 className="text-black font-bold text-[18px] mb-4 text-opacity-80">{post.location}</h2>
                    <h2 className="text-black font-normal text-opacity-60 flex items-center"><span className="rounded font-thin text-sm py-1 bg-gray bg-opacity-20 test-gray px-3 mr-3">Land</span><span className={`${ post.status=="Available"? "bg-private bg-opacity-20  text-private": post.status =="Sold Out"?"bg-red bg-opacity-20 font-thin text-red":""} text-sm   px-3 py-1 rounded  `}>{post.status}</span></h2>

                </div>
                <div className="md:ml-auto md:mt-0 mt-5">
                        <h2 className="font-bold text-black text-opacity-80 text-[18px] mb-2"><i>{post.price}</i></h2>
                        <h2 className="text-black font-normal text-opacity-60"><i> per {post.sqm} sqm</i></h2>

                </div>
            </div>
        </div>
        <div className="flex w-full">
                <div className="md:ml-auto md:my-0 my-4">
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
            <div className="md:ml-10 ml-6">
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
            <div className="md:ml-10 ml-6">
            <ol className='list'>
              {landmarks.map((landmarks, index) => (
                <li className='my-2' key={index}>{landmarks}</li>
              ))}
            </ol>
            </div>
            
        </div>
        <div className=" mt-8">
            <h2 className="font-bold text-[18px] my-2">
                Documents
            </h2>
            <div className="md:ml-10 ml-6">
            <ol className='list'>
              {documents.map((document, index) => (
                <li className='my-2' key={index}>{document}</li>
              ))}
            </ol>
            </div>
            
        </div>
        <div className=" mt-8">
            <h2 className="font-bold text-[18px] my-2">
                Available Payment plan
            </h2>
            <div className="md:ml-10 ">
            <div className='my-2'>

              {post.paymentPlan.map((plan, index) => (
                <div key={index} className="my-3">
                <h2 className='my-2 font-bold text-black text-opacity-80' >{plan.sqr}</h2>
                <h2 className='my-2  text-black text-opacity-80 italic ' >{plan.paymentMethod}</h2>
                <h2 className='my-2 text-black text-opacity-80' >{plan.price}</h2>
                {plan.currentValue != "" &&(
                <h2 className='my-2  text-black text-opacity-80' > Current Value: {plan.currentValue}</h2>
                    )}
                </div>
              ))}

            </div>
            </div>
            

            <div className="border-y-[1px] border-gray py-8 mt-6">
                <h2 className="font-bold text-[18px] mb-1">Payment Details</h2>
                <h2><span  className="font-bold text-[17px] text-black text-opacity-70">Bank name:</span> <span className="text-opacity-80 text-black text-[17px]">Gt Bank</span></h2>

                <div className="md:flex w-full mt-5">
                  <div>
                <h2><span  className="font-bold text-[17px] text-black text-opacity-70">Account name:</span> <span className="text-opacity-80 text-black text-[17px]">Gt Ban k</span></h2>
                <h2><span  className="font-bold text-[17px] text-black text-opacity-70">Account number:</span> <span className="text-opacity-80 text-black text-[17px]">Gt Bank</span></h2>

                  </div>
                  <button className="md:ml-auto md:mt-0 mt-3 bg-private text-white p-4 rounded">
                    Pay now
                  </button>
                </div>
            </div>

            
        </div>
        
      </div>
      <RecommendedRealEstate />
        </Layout>
        </>
     );
}
 
export default RealEstatePost;