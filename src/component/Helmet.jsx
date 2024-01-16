import { Helmet } from "react-helmet";
const Helmett = ({title, content}) => {
    return ( 
    <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={content} />
                {/* Other meta tags go here */}
            </Helmet>
     );
}
 
export default Helmett;