import React from "react";
import burger from "../../images/burger.png";
import dev from "../../images/dev.png";
import note from "../../images/note.png";
import travel from "../../images/travel.png";
import quiz from "../../images/quiz.png";
import "./style.css";


import { PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    const openPopupboxBurger = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {burger} alt="Burger App" width="200px" />
        <p>It is a burger logger application that uses MySQL, Node, Express and Handlebars to generate the HTML. It follows the MVC design pattern as well.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/burger", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://dry-thicket-48234.herokuapp.com/", "_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Burger App"  }
          },
    });
        
    };
    
    const popupboxConfigBurger = {
        titleBar: {
            enable: true,
            text: "Burger App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    
    };
    const openPopupboxDev = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {dev} alt="Dev App" width="200px" />
        <p>It is a burger logger application that uses MySQL, Node, Express and Handlebars to generate the HTML. It follows the MVC design pattern as well.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/groupproject1", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://nataliasozontova.github.io/group_project/", "_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Dev App"  }
          },
    });
        
    };
    
    const popupboxConfigDev = {
        titleBar: {
            enable: true,
            text: "Dev App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    
    };

    const openPopupboxNote = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {note} alt="Note App" width="200px" />
        <p>It is a burger logger application that uses MySQL, Node, Express and Handlebars to generate the HTML. It follows the MVC design pattern as well.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/burger", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://dry-thicket-48234.herokuapp.com/", "_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Note App"  }
          },
    });
        
    };
    
    const popupboxConfigNote = {
        titleBar: {
            enable: true,
            text: "Note App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    
    };

    const openPopupboxTravel = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {travel} alt="Travel App" width="200px" />
        <p>It is a burger logger application that uses MySQL, Node, Express and Handlebars to generate the HTML. It follows the MVC design pattern as well.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/burger", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://dry-thicket-48234.herokuapp.com/", "_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Travel App"  }
          },
    });
        
    };
    
    const popupboxConfigTravel = {
        titleBar: {
            enable: true,
            text: "Travel  App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    
    };

    const openPopupboxQuiz = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {quiz} alt="Quiz App" width="200px" />
        <p>It is a burger logger application that uses MySQL, Node, Express and Handlebars to generate the HTML. It follows the MVC design pattern as well.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/burger", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://dry-thicket-48234.herokuapp.com/", "_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Quiz App"  }
          },
    });
        
    };
    
    const popupboxConfigQuiz = {
        titleBar: {
            enable: true,
            text: "Quiz App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    
    };
 
    return(
        <div className="wrapper">
            <div className="container">
                <h1 className= "text"></h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="image-box" onClick={openPopupboxBurger}>
                    <img className="image" src={burger} alt="Burger App" />
                    <div className="overflow"></div>
                    
                </div>
                <div className="image-box" onClick={openPopupboxDev}>
                    <img className="image" src={dev} alt="Dev App" />
                    <div className="overflow"></div>
              
                    
                </div>

                <div className="image-box" onClick={openPopupboxNote}>
                    <img className="image" src={note} alt="Dev App" />
                    <div className="overflow"></div>
              
                    
                </div>
                <div className="image-box" onClick={openPopupboxTravel}>
                    <img className="image" src={travel} alt="Dev App" />
                    <div className="overflow"></div>
              
                    
                </div>
                <div className="image-box" onClick={openPopupboxQuiz}>
                    <img className="image" src={quiz} alt="Dev App" />
                    <div className="overflow"></div>
              
                    
                </div>

                </div>

        </div>
        <PopupboxContainer {...popupboxConfigBurger}/>
        <PopupboxContainer {...popupboxConfigDev}/>
        <PopupboxContainer {...popupboxConfigNote}/>
        <PopupboxContainer {...popupboxConfigTravel}/>
        <PopupboxContainer {...popupboxConfigQuiz}/>
       
        </div>
    )
}

export default Portfolio;