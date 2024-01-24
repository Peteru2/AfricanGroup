import img from "../../assets/images/FirstSectionImage1.jpg"
const ProjList = () => {
    return ( 
            <>
                <section>
                    <div className="grid grid-cols-3 gap-3 my-[30px]">
                    <div className="relative" style={{ 'maxWidth': '100%', 'height': 'auto', position: 'relative' }}>
    <img
        className="w-full h-full object-cover"
        src={img}
        alt="kasdka"
    />
    <div className="absolute inset-1 px-10 flex pt-[250px]">
        <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
            <i className="fa fa-facebook"></i>
        </div>
        <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
            <i className="fa fa-facebook"></i>
        </div>
        <div className="w-10 mx-4 text-white h-10 rounded-full bg-private flex justify-center items-center">
            <i className="fa fa-facebook"></i>
        </div>
    </div>
    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', zIndex: 1}}></div>
</div>
                    </div>
                </section>
            </>
     );
}
 
export default ProjList;