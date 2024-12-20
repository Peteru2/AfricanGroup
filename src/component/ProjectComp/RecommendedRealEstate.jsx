import projData from "./data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import shuffleProj from "../Shuffle";

const RecommendedRealEstate = () => {
  const realEstateProjects = projData.filter(
    (data) => data.type === "Real Estate"
  );
  const randomThreeProjects = shuffleProj(realEstateProjects).slice(0, 3);

  return (
    <>
      <div className="bg-white">
        <h2 className="font-bold text-[25px] text-center text-black text-opacity-70 py-4">
          Also recommended
        </h2>
        <div className=" xl:mx-[90px] md:mx-5 mx-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mb-[30px] font-roboto">
          {randomThreeProjects.map((data, index) => {
            return (
              <>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.1, duration: 0.1 }}
                  key={index}
                  className="relative group"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    position: "relative",
                  }}
                >
                  <img
                    className="w-full h-[300px] object-cover"
                    src={data.img}
                    alt="kasdka"
                  />

                  <div
                    className="absolute inset-0 bg-public bg-opacity-60 group-hover:bg-public transition ease-in-out  duration-500"
                    style={{ zIndex: 1 }}
                  >
                    <div
                      className={`${
                        data.status == "Available"
                          ? "bg-private text-white"
                          : data.status == "Ongoing"
                          ? "bg-yellow bg-opacity-80 text-black"
                          : data.status == "Sold Out"
                          ? "bg-red text-white"
                          : data.status == "Completed"
                          ? "bg-public text-white"
                          : ""
                      } text-sm absolute right-[17px] py-[6px] px-4  rounded-[2px]  `}
                    >
                      <h2>{data.status}</h2>
                    </div>
                    <Link
                      to={`/project/real-estate/${data.titleParam}`}
                      className=""
                    >
                      <div className="absolute inset-1 px-10 flex justify-center items-center]">
                        <div className="flex absolute bottom-[-4px] left-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                          <h1 className="h-3 w-3 bg-private"></h1>
                        </div>
                        <div className="flex absolute top-[-4px] left-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                          <h1 className="h-3 w-3 bg-private"></h1>
                        </div>
                        <div className="flex absolute bottom-[-4px] right-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                          <h1 className="h-3 w-3 bg-private"></h1>
                        </div>
                        <div className="flex absolute top-[-4px] right-[-4px]  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                          <h1 className="h-3 w-3 bg-private"></h1>
                        </div>
                        <div className="flex justify-center items-center  opacity-0  group-hover:opacity-100 transition ease-in-out  duration-500">
                          <div className=" w-8 mx-4 flex text-white h-8 cursor-pointer  bg-private hover:bg-white hover:text-public  justify-center items-center">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <div className="text-white px-4 absolute bottom-4 left-4">
                      <h2 className="text-2xl font-bold">{data.title}</h2>
                      <h2 className="text-sm capitalize">{data.location}</h2>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecommendedRealEstate;
