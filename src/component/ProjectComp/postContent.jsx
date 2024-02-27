 import projData from "./data";
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
const PostContent = () => {
    const { titleParam } = useParams();
    const post = projData.find((post) => post.titleParam === titleParam);
    if (!post) {
      return <div>Post not found</div>;
    }
    return ( 
        <>
        <div className="xl:mx-[90px] md:mx-5 mx-6 mt-20 font-lora ">
            <div className="grid md:grid-cols-5 grid-cols-1 md:gap-6">
                <motion.div 
                variants ={{
                    hidden:{opacity: 0, y: 75},
                    visible:{opacity: 1, y: 0},
                }}
                initial="hidden"
                whileInView="visible"
                transition={{delay:  0.5, 
                duration: 0.5}}
                className="col-span-3">
                    <img src={post.img} alt={post.title}/>
                </motion.div>
                <motion.div
                variants ={{
                    hidden:{opacity: 0, y: 75},
                    visible:{opacity: 1, y: 0},
                }}
                initial="hidden"
                whileInView="visible"
                transition={{delay:  0.5, 
                duration: 0.5}}
                className="bg-gray bg-opacity-20 col-span-2 p-[30px] font-lora">
                <h2 className="text-[25px] font-bold font-lora text-vintage">Project Details</h2>
                <h4 className="text-black text-opacity-60">This is the decription of the project</h4>

                <div className="my-5">
                <div className="flex items-center">
                    <span className="w-2 h-2 bg-private mr-4 "></span> <span className="font-bold text-vintage">Project Name</span>
                </div>
                <h2 className="ml-6 text-black text-opacity-60">{post.title}</h2>

                </div>

                <div className="my-5">
                    <div className="flex items-center">
                        <span className="w-2 h-2 bg-private mr-4"></span> <span className="font-bold text-vintage">Client</span>
                    </div>
                    <h2 className="ml-6 text-black text-opacity-60">{post.client}</h2>
                </div>
                <div className="my-5">
                    <div className="flex items-center">
                        <span className="w-2 h-2 bg-private mr-4"></span> <span className="font-bold text-vintage">Category</span>
                    </div>
                    <h2 className="ml-6 text-black text-opacity-60">{post.category}</h2>
                </div>
                <div className="my-5">
                    <div className="flex items-center">
                        <span className="w-2 h-2 bg-private mr-4 "></span> <span className="font-bold text-vintage">Location</span>
                    </div>
                    <h2 className="ml-6 text-black text-opacity-60">{post.location}</h2>
                </div>
                <div className="mt-5">
                    <div className="flex items-center">
                        <span className="w-2 h-2 bg-private mr-4 "></span> <span className="font-bold text-vintage">Year</span>
                    </div>
                    <h2 className="ml-6 text-black text-opacity-60">{post.year}</h2>
                </div>

                </motion.div>

            </div>

              <div className="grid md:grid-cols-6 grid-cols-1 gap-4 my-12">
                <motion.div
                variants ={{
                    hidden:{opacity: 0, y: 75},
                    visible:{opacity: 1, y: 0},
                }}
                initial="hidden"
                whileInView="visible"
                transition={{delay:  0.5, 
                duration: 0.5}}
                className="col-span-2">
                    <h2 className="font-bold text-vintage  text-[25px]">Project Summary</h2>
                </motion.div>
                <motion.div
                variants ={{
                    hidden:{opacity: 0, y: 75},
                    visible:{opacity: 1, y: 0},
                }}
                initial="hidden"
                whileInView="visible"
                transition={{delay:  0.5, 
                duration: 0.5}}
                className="col-span-4">
                    <p>
                        {post.summary}
                    </p>
                </motion.div>
              </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="relative">
                <h2 className="text-gray text-opacity-50  font-bold text-[80px] m-0 absolute">01</h2>
                <div className="mt-8">
                <span className="flex items-center ">
                    <span className="bg-private text-white px-1 font-bold">01</span>
                    <span className="bg-private w-8 h-[.5px] mx-3"></span>
                    <span className="font-bold text-[20px] text-vintage">Project Planning</span>
                </span>
                <div className="ml-20 mt-4">Joy to the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid, deleniti aspernatur veniam error dolorem recusandae </div>
            </div>
            </div>
            <div className="relative">
                <h2 className="text-gray text-opacity-50  font-bold text-[80px] m-0 absolute">02</h2>
                <div className="mt-8">
                <span className="flex items-center ">
                    <span className="bg-private text-white px-1 font-bold">02</span>
                    <span className="bg-private w-8 h-[.5px] mx-3"></span>
                    <span className="font-bold text-[20px] text-vintage">Project Scheduling</span>
                </span>
                <div className="ml-20 mt-4">Joy to the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid, deleniti aspernatur veniam error dolorem recusandae </div>
            </div>
            </div>
            <div className="relative">
                <h2 className="text-gray text-opacity-50  font-bold text-[80px] m-0 index-0 absolute">03</h2>
                <div className="mt-8">
                <span className="flex items-center ">
                    <span className="bg-private text-white px-1 font-bold">03</span>
                    <span className="bg-private w-8 h-[.5px] mx-3"></span>
                    <span className="font-bold text-[20px] text-vintage">Project Management</span>
                </span>
                <div className="ml-20 mt-4">Joy to the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid, deleniti aspernatur veniam error dolorem recusandae </div>
            </div>
            </div>
        </div>

    <div className="grid md:grid-cols-3 gap-5  grid-cols-1 my-10">
        <div>
                <img src={post.img} alt={post.name} />
        </div>
        <div>
                <img src={post.img} alt={post.name} />
        </div>
        <div>
                <img src={post.img} alt={post.name} />
        </div>
        <div>
                <img src={post.img} alt={post.name} />
        </div>
        <div>
                <img src={post.img} alt={post.name} />
        </div>
        <div>
                <img src={post.img} alt={post.name} />
        </div>
    </div>

    {/* overview and Challenge */}
    <div className="grid md:grid-cols-6  grid-cols-1 gap-4">
                <div className="col-span-2">
                    <h2 className="text-vintage text-[25px] font-bold">Overview & Challenge</h2>
                </div>
                <div className="col-span-4 text-[15px]">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At consequuntur necessitatibus commodi repellendus aliquam pariatur, nesciunt, obcaecati culpa, dolores corporis autem? Optio nulla similique consequuntur, facere nihil voluptas est laboriosam commodi, uam officia voluptas placeat rem, provident modi, dicta quisquam cupiditate inventore libero vero odit voluptate?
                    </p>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint tempora alias eveniet error, nam ea, impedit voluptatem quaerat commodi consequatur repellendus fugiat quis accusamus? Minima quo inventore vitae aperiam!</p>
                </div>
    </div>
        </div>
        
        {/* Image  */}
        <div className="my-2">
            <img className="w-full h-[300px]" src={post.img} alt={post.name} />
        </div>

        <div className="xl:mx-[90px] md:mx-5 mx-6 mt-10 font-lora ">
                <div className="grid md:grid-cols-6 gap-4">
                    <div className="col-span-2">
                        <h3 className="text-[25px] font-bold text-vintage">Solution & Results</h3>
                    </div>
                    <div className="col-span-4 text-[15px]">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At consequuntur necessitatibus commodi repellendus aliquam pariatur, nesciunt, obcaecati culpa, dolores corporis autem? Optio nulla similique consequuntur, facere nihil voluptas est laboriosam commodi, uam officia voluptas placeat rem, provident modi, dicta quisquam cupiditate inventore libero vero odit voluptate?
                    </p>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint tempora alias eveniet error, nam ea, impedit voluptatem quaerat commodi consequatur repellendus fugiat quis accusamus? Minima quo inventore vitae aperiam!</p>
                </div>
                </div>
        </div>
        </>
     );
}
 
export default PostContent;