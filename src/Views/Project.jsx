import Navbar from "../component/Navbar/Navbar";
import image from "../assets/images/about.jpg"
import ImageWithOverlay from "../component/ImageWithOverlay";
const Project = () => {
    return ( 
        <>
            <section>
                    <Navbar />
                    <ImageWithOverlay
                imageUrl={image}
                title1="AfricanGroup"
                span1="Project"
                span2=""
                title2="This is AfricanGroup"
                decrip="Our Projects"
      />
            </section>
        </>
     );
}
 
export default Project;