import projData from "./data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchFilter from "./SearchFilter";

const Construction = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    shuffleData();
  }, []);
  const constructionProjects = projData.filter(
    (data) => data.type === "Construction"
  );
  const shuffleData = () => {
    const shuffledArray = [...constructionProjects].sort(
      () => Math.random() - 0.5
    );
    setShuffledData(shuffledArray);
  };
  const handleFilteredData = (filteredData) => {
    setFilteredData(filteredData);
  };
  return (
    <>
      <section>
        <SearchFilter data={shuffledData} onDataFiltered={handleFilteredData} />

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  mb-[30px] font-roboto">
          {filteredData.map((data, index) => {
            return (
              <>
                {data.type === "Construction" && (
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
                      className="w-full h-full object-cover"
                      src={data.img}kl
                      alt="kasdka"
                    />
                    <Link
                      to={`/project/construction/${data.titleParam}`}
                      className=""
                    >
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

                        <div className="text-white px-4 absolute bottom-4 left-4">
                          <h2 className="text-2xl font-bold">{data.title}</h2>
                          <h2 className="text-sm capitalize">
                            {data.category}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Construction;
