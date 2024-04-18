import image from "../../assets/images/about.jpg"
import ImageWithOverlay from '../ImageWithOverlay'
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import PostContent from "./postContent";
import projData from "./data";
import ongoingData from "./ongoingData";
import Footer from "../Footer";

const ProjPost = () => {
    const { titleParam } = useParams();
    const post = ongoingData.find((post) => post.titleParam === titleParam) || projData.find((post) => post.titleParam === titleParam);
    if (!post) {
      return <div>Post not found</div>;
    }
  
    return ( 
            <>
        <Navbar />
                 <ImageWithOverlay
                imageUrl={image}
                span1="Project"
                span2={post.title}
                spanClass ="text-private"
                title2=""
                decrip={post.title}
                height="380px"
      />
      <PostContent />
      <Footer />

            </>
     );
}
 
export default ProjPost;