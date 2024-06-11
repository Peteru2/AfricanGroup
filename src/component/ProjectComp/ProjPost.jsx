import image from "../../assets/images/about.jpg";
import ImageWithOverlay from "../ImageWithOverlay";
import { useParams } from "react-router-dom";
import PostContent from "./postContent";
import projData from "./data";
import Layout from "../Layout";

const ProjPost = () => {
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
          spanClass="text-private"
          title2=""
          decrip={post.title}
          height="380px"
        />
        <PostContent />
      </Layout>
    </>
  );
};

export default ProjPost;
