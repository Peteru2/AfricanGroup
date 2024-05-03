import Image1 from "../../assets/images/FirstSectionImage1.jpg"
import  { useEffect, useRef } from 'react';
const Partners = () => {
  const imgRow = [
    Image1,
    Image1,
    Image1,
    Image1,
    Image1,

    Image1,
    Image1,
    Image1,
    Image1,
    Image1,

  ]
   

    return ( 
        <>
          <div className="imgContainer overflow-hidden">
  <div className="wrapper">
    <div className="text"></div>
    <div className="marque">
      <div className="marqueGroup">
        {imgRow.map((img) => (
          <div className="imageGroup" key={img}>
            <img src={img} className="image" alt="image" />
          </div>
        ))}
      </div>
      <div className="marqueGroup">
        {imgRow.map((img) => (
          <div className="imageGroup" key={img}>
            <img src={img} className="image" alt="image" />
          </div>
        ))}
      </div>
      
    </div>
  </div>
</div>

        </>
     );
}
 
export default Partners;