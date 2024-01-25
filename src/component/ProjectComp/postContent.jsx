import projData from "./data";
import { useParams } from 'react-router-dom';

const PostContent = () => {
    const { titleParam } = useParams();
    const post = projData.find((post) => post.titleParam === titleParam);
    if (!post) {
      return <div>Post not found</div>;
    }
    return ( 
        <div className="xl:mx-[90px] md:mx-5 mx-6 mt-20">
            <div className="grid md:grid-cols-5 grid-cols-1 md:gap-6">
                <div className="col-span-3">
                    <img src={post.img} alt={post.title}/>
                </div>
                <div className="bg-gray bg-opacity-20 col-span-2">
                <h2>{post.title}</h2>
                </div>
            </div>
              
        </div>
     );
}
 
export default PostContent;