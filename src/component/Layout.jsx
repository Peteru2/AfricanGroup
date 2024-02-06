import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Chat from "./SideChat";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <motion.main
        variants ={{
            hidden:{opacity: 0, y: 75},
            visible:{opacity: 1, y: 0},
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.25, 
        duration: 0.5}}
        >{children}
        </motion.main>
        <Chat />

        <Footer />
      </div>
    );
  };
  
  export default Layout;