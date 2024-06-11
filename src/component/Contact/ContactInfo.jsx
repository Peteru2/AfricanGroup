import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const ContactInfo = () => {
  return (
    <>
      <section className="font-roboto mt-[40px] xl:mx-[90px] md:mx-5 mx-6 text-[15px]">
        <div className="grid md:grid-cols-2 grid-cols-1  ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 2 }}
            className=""
          >
            <h3 className="mb-2 text-private font-bold  tracking-[4px]">
              OUR HEADQUARTER
            </h3>
            <h2 className="text-[30px]">
              House 3, 1st Close, Behind Union Bank, Owode, Oyo, Oyo State.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gird-cols-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 2 }}
            >
              <div className="md:my-0 my-6">
                <div className="flex mb-2 items-center">
                  <h2 className="h-2 w-2 bg-private rounded-full mr-2 FONT-BOLD"></h2>{" "}
                  <h3 className="tracking-[4px] font-bold">ABUJA</h3>
                </div>
                <h2>188, Awolowo Road, Ikoyi, Lagos, Nigeria.</h2>
              </div>

              <div className=" md:mt-10 my-4 mb-2">
                <div className="flex  items-center ">
                  <h2 className="h-2 w-2 bg-private rounded-full mr-2 "></h2>
                  <h3 className="tracking-[4px] font-bold">LAGOS</h3>
                </div>
                188, Awolowo Road, Ikoyi, Lagos, Nigeria.
                <h2></h2>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, staggerChildren: 2 }}
              className="md:my-0 my-6"
            >
              <div className="flex mb-2 items-center">
                <h2 className="h-2 w-2 bg-private rounded-full mr-2 "></h2>{" "}
                <h3 className="tracking-[4px] font-bold">OYO</h3>
              </div>
              <h2>
                House 3, 1st Close, Behind Union Bank, Owode, Oyo, Oyo State.
              </h2>

              <div className="md:mt-10 my-6">
                <div className="flex mb-2 items-center ">
                  <h2 className="h-2 w-2 bg-private rounded-full mr-2 "></h2>{" "}
                  <h3 className="tracking-[4px] font-bold">CONTACT</h3>
                </div>
                <h2 className="text-opacity-70 text-black">
                  +234 706 4255 373
                </h2>
                <h2 className="text-opacity-70 text-black">
                  <Link to={"tel://07064255373"}>+234 901 7730 877</Link>
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
