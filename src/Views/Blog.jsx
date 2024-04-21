import Navbar from "../component/Navbar/Navbar";
import ImageWithOverlay from "../component/ImageWithOverlay";
import Footer from "../component/Footer";
import BlogPost from "../component/BlogComp/BlogPost";
import { useParams } from 'react-router-dom';
import blogData from "../component/BlogComp/data";
const Blog = () => {
    const { titleParam } = useParams();
    const post = blogData.find((post) => post.titleParam === titleParam);
  
    if (!post) {
      return <div>Post not found</div>;
    }
    return ( 
            <>
            <Navbar />
            <ImageWithOverlay
                imageUrl={post.img}
                span1="Blog"
                span2={post.title}
                title2=""
                decrip={post.title}
                height="400px"

            />
            <BlogPost post={post} />
            <Footer />
            </>
     );
}
 
export default Blog;