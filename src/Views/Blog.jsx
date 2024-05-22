import ImageWithOverlay from "../component/ImageWithOverlay";
import BlogPost from "../component/BlogComp/BlogPost";
import { useParams } from 'react-router-dom';
import blogData from "../component/BlogComp/data";
import Layout from "../component/Layout";
const Blog = () => {
    const { titleParam } = useParams();
    const post = blogData.find((post) => post.titleParam === titleParam);
  
    if (!post) {
      return <div>Post not found</div>;
    }
    return ( 
            <>
            <Layout>
            <ImageWithOverlay
                imageUrl={post.img}
                span1="Blog"
                span2={post.title}
                title2=""
                decrip={post.title}
                height="400px"

            />
            <BlogPost post={post} />
            </Layout>
            </>
     );
}
 
export default Blog;