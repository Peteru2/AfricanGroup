import Navbar from "../component/Navbar/Navbar";
import image from "../assets/images/about.jpg"
import ImageWithOverlay from "../component/ImageWithOverlay";
import Helmett from "../component/Helmet";
const Project = () => {
    return ( 
        <>
            <section>
            <Helmett 
                title="Projects"
                content="Explore our portfolio of successful land surveying projects in Oyo, Nigeria. From residential subdivisions to commercial developments, our projects showcase our expertise in accurate property assessments, boundary surveys, and topographic mapping. View our past work and see how we can bring precision to your next project." 

                />
                    <Navbar />
                   
                    <ImageWithOverlay
                imageUrl={image}
                title1="AfricanGroup"
                span1="Project"
                span2=""
                title2="This is AfricanGroup"
                decrip="Our Projects"
                height="400px"

      />
            </section>
        </>
     );
}
 
export default Project;