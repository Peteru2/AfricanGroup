import axios from "axios";
import { useEffect, useState } from "react";

const QuoteData = () => {
const [quotes, setQuotes] = useState({})
    useEffect(() =>{
        getQuotes();
    },[])
    
    function getQuotes() {
        axios.get("http://127.0.0.1/api/quoteform/").then((response) => {
                setQuotes(response.data)

                console.log(response.data)
        })
    }
    console.log(quotes)
      return ( 
            <>
                <section>
                   {/* {
                    quotes.map((data, index) =>{
                        return(
                            <div>
                                <h2>{}</h2>
                            </div>
                        )
                    }
                    )
                   } */}
                </section>
            </>
     );
}
 
export default QuoteData;