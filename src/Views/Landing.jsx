import Footer from "../component/Footer";
import FirstSection from "../component/LandingPageComp/FirstSection";
import Services from "../component/LandingPageComp/Services";
import Testimonials from "../component/LandingPageComp/Testimonials";
import Values from "../component/LandingPageComp/values";
import Navbar from "../component/Navbar/Navbar";
import Chat from "../component/SideChat";
// import "../style.css"

const Landing = () => {
    return ( 
        <>
            <section>
                <Navbar />
                <FirstSection />
                <Services />
                <Testimonials />
                <Values />
                <div className="text-3xl  mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni enim vitae esse! Aliquid exercitationem reprehenderit asperiores doloremque eveniet iste! Qui temporibus, nam accusantium veniam ad dolorem animi tenetur nisi debitis dignissimos ab consectetur officiis molestiae mollitia fugit, magnam dicta suscipit, aperiam corrupti quidem quae omnis libero eos a! Nulla in debitis ullam! Corporis, facere nemo quos iure nostrum officia rem natus unde delectus? Ut ducimus optio voluptatum, tempora laboriosam illo, odit animi impedit, accusamus dolore commodi dignissimos necessitatibus culpa.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, vitae deleniti. Exercitationem, beatae neque deserunt adipisci voluptatibus ratione doloremque ex corrupti quo consectetur expedita, voluptatem reprehenderit nobis voluptatum nemo aperiam architecto, officia earum aliquam! Veritatis porro quidem unde doloremque repellendus eaque ullam harum asperiores minima facilis eos distinctio incidunt temporibus eveniet itaque qui ut pariatur sunt deserunt blanditiis, ipsam quas recusandae aut? Repellat commodi quod nulla ratione repudiandae. Consequatur beatae delectus labore modi cupiditate nulla, ad praesentium obcaecati? Sit, fugit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas omnis reprehenderit explicabo odio quam voluptates, modi officiis minus, 
                </div>
            </section>
            <Chat />
            <Footer />
        </>
     );
}
 
export default Landing;