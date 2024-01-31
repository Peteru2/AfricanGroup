import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Chat from "./SideChat";

const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        <main>{children}
        <Chat />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;