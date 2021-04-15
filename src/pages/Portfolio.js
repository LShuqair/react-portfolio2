import React, {useState} from "react";
import Popup from "../components/Popup";
import travel from "../images/travel.png";





function Portforlio() {
  
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    return (
      <div>
        <p>Projects</p>
        
        <input
        type="button" 
        value="Click to Open Popup"
        onClick={togglePopup}
      />
     
      {isOpen && 
      
      <Popup
        content={<>
          <b></b>
          <p>Porjects</p>
          <hr></hr>
            <img className="portfolio-image" src= {travel} alt="Travel Guide App"/>
            <p>is an application that can be used in any browser available. Travel Guide can provide tourists a UAE map and help in guidance finding the location of restaurants, current weather, and 5 days weather forecast in the UAE.</p>
             <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/groupproject1", "_blank")} >GitHub</a>
            <br></br>
            <a a className="hyper-link" onClick={() => window.open("https://nataliasozontova.github.io/group_project/", "_blank")}
           >Deployed</a>
    
          
        </>}
        handleClose={togglePopup}
      />}
        
        
       
        
      </div>
    )
}

export default Portforlio;