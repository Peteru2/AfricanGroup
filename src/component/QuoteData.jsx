import axios from "axios";
import { useEffect, useState } from "react";

const QuoteData = () => {
const [quotes, setQuotes] = useState(null)
    useEffect(() =>{
        getQuotes();
    },[])
    
    function getQuotes() {
        axios.get("http://localhost:8000/getquotes").then((response) => {
                setQuotes(response.data.quotes)
        })
    }
    console.log(quotes)
      return ( 
            <>

        
                <section>
                    <h2 className="text-[30px] text-center my-6 font-playfair font-bold">
                        QUOTES
                    </h2>
                    <div style={{ overflowX: 'auto' }} className=" justify-center">
                    <table className="rounded-md  font-roboto border ">
                    <tr className="text-white bg-private h-10 px-2 text-xs rounded-t-md items-center">
                                    <th>Id</th>
                                    <th>FullName</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>Project</th>
                                    <th>Phone Number</th>
                                    <th>Message</th>
                                </tr>    

                                {quotes && (
                                        quotes.map((quote, index) =>{
                                            return(
                                                <tr key={index} className="  text-center w-[10-0px]  text-black gap-2 bg-white shadow-lg h-10 px-2 text-[15px] rounded-b-md items-center">
                                                    
                                                    <td>{quote.id}</td>
                                                    <td>{quote.fullname}</td>
                                                    <td>{quote.email}</td>
                                                    <td>{quote.business}</td>
                                                    <td>{quote.project}</td>
                                                    <td>{quote.phoneNumber}</td>
                                                    <td>{quote.message}</td>    
                                                </tr>
                                            )
                                        }
                                        )
                                )
                            }
                                
                                
                                            
                   
                   </table>
                   {!quotes && (
                        <div className="flex bg-white justify-center w-full">
                            <h2 className="flex text-center justify-center w-full">Loading...</h2>
                         </div>
                    )}
                   </div>

                </section>
            </>
     );
}
 
export default QuoteData;