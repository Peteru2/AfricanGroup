import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Chat from "./SideChat";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <motion.main
       
        >{children}
        </motion.main>
        <Chat />

        <Footer />
      </div>
    );
  };
  
  export default Layout;