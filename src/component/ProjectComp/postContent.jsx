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
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <img src={post.img} alt={post.title}/>
                </div>
                <div className="bg-gray bg-opacity-20">
                <h2>{post.title}</h2>
                </div>
            </div>
              
        </div>
     );
}
 
export default PostContent;