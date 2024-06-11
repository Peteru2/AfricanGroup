// BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import ServiceData from "./ServiceData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import image from "../../assets/images/about.jpg";
import ImageWithOverlay from "../ImageWithOverlay";
import Layout from "../Layout";
import Helmett from "../Helmet";

const ServicePost = () => {
  const { titleParam } = useParams();
  const post = ServiceData.find((post) => post.titleParam === titleParam);
  const sentences = post.content.split(";");
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Helmett title={`Services - ${post.title}`} />
      <Layout>
        <ImageWithOverlay
          imageUrl={image}
          span1="Services"
          span2={post.title}
          spanClass="text-private"
          title2=""
          decrip={post.title}
          height="350px"
        />
        <section className="xl:mx-6 md:mx-0 mx-6 mt-10 font-roboto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[65px] md:mx-20">
            <div>
              <img src={post.img} alt={post.title} />
            </div>
            <div className="my-3 mx-6">
              <h2 className="font-bold">{post.header}</h2>
              <ol className="list">
                {sentences.map((sentence, index) => (
                  <li className="my-2" key={index}>
                    {sentence}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServicePost;
