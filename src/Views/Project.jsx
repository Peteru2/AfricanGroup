import image from "../assets/images/about.jpg"
import ImageWithOverlay from "../component/ImageWithOverlay";
import Helmett from "../component/Helmet";
import ProjList from "../component/ProjectComp/ProjLists";
import Layout from "../component/Layout";

const Project = () => {
    return ( 
        <>
        <Layout>
            <section>
            <Helmett 
                title="Projects"
                content="Explore our portfolio of successful land surveying projects in Oyo, Nigeria. From residential subdivisions to commercial developments, our projects showcase our expertise in accurate property assessments, boundary surveys, and topographic mapping. View our past work and see how we can bring precision to your next project." 

                />
                    <ImageWithOverlay
                imageUrl={image}
                title1="AfricanGroup"
                span1="Project"
                span2=""
                title2=""
                decrip="Explore the excellence in every project"
                height="400px"

      />
      <ProjList />
            </section>
            </Layout>
        </>
     );
}
 
export default Project;