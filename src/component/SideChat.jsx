import { Link } from "react-router-dom";

const Chat = () => {
    return ( 
        <>
            <section>
                <button>      
                    <Link to={'https://wa.me/2349017730877'}>                 
                    <div className="sideChat grid grid-cols-3 gap-2 items-center">
                            <div className="text-xs bg-white col-span-2  p-2 rounded-md">Need help? <b>Chat with us</b> </div>

                            <div className="bg-private w-12 h-12 p-4 flex items-center justify-center h-10 rounded-full"><i className="fa fa-whatsapp text-4xl text-white "></i></div>
                        </div>
                </Link>
                </button>
            </section>
        </>
     );
}
 
export default Chat;