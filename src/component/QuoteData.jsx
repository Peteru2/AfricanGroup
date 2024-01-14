import axios from "axios";
import { useEffect, useState } from "react";

const QuoteData = () => {
const [quotes, setQuotes] = useState(null)
    useEffect(() =>{
        getQuotes();
    },[])
    
    function getQuotes() {
        axios.get("http://127.0.0.1/api/quoteform/").then((response) => {
                setQuotes(response.data)
        })
    }
    console.log(quotes)
      return ( 
            <>
                <section>
                   {
                   quotes&& quotes.map((quote, index) =>{
                        return(
                            <div key={index}>
                                <h2>{quote.name}</h2>
                                
                                <h2>{quote.email}</h2>

                            </div>
                        )
                    }
                    )
                   }
                </section>
            </>
     );
}
 
export default QuoteData;