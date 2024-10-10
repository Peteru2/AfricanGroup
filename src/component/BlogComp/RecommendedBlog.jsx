import { Link } from "react-router-dom";
import blogData from "../BlogComp/data";
import { motion } from "framer-motion";
import shuffleProj from "../Shuffle";

const RecommendedBlog = () => {
  const MAX_CONTENT_LENGTH = 100; // You can set your desired maximum length

  // Function to truncate text and add "..."
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const randomThreeBlogs = shuffleProj(blogData).slice(0, 3);
  return (
    <>
      <section className="xl:mx-[90px] md:m-5 mx-6 font-roboto">
        <div className="mt-10 text-center">
          <h2 className="tracker-[2px] md:text-[35px] text-[28px] text-vintage font-semibold">
            Recommended Blogs
          </h2>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8 mb-[0px] mt-[50px]   font-roboto">
          {randomThreeBlogs.map((post, index) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2, duration: 0.2 }}
              key={post.id}
              className="`"
            >
              <div className="">
                <img src={post.img} alt={post.name} className="m-0 w-full md:h-[300px]" />
              </div>
              <div className=" py-6 rounded-br-[15px] rounded-bl-[15px]">
                <h2 className="text-[25px] text-vintage font-bold mb-2">
                  {post.title}
                </h2>
                <h4 className="text-[12px] text-private"> {post.date} </h4>

                <h4 className="text-black text-opacity-70 my-3">
                  {truncateText(post.p1, MAX_CONTENT_LENGTH)}
                </h4>
                <Link to={`/blog/${post.titleParam}`} className="">
                  <motion.button
                    whileHover={{ scale: 1.0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-vintage text-white p-3 hover:bg-opacity-70"
                  >
                    Read More{" "}
                    <i className="fa fa-long-arrow-right text-[11px]"></i>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecommendedBlog;
