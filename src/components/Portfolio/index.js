import React from "react";
import burger from "../../images/burger.png";
import budget from "../../images/budget.png";
import note from "../../images/note.png";
import travel from "../../images/travel.png";
import weather from "../../images/weather.png";
import fitness from "../../images/fitness.png"
import "./style.css";


import { PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    const openPopupboxBurger = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {burger} alt="Burger App"  />
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
    const openPopupboxBudget = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {budget} alt="Budget App"  />
        <p>An application that allows users to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online, using(PWA).</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/budget-trackers", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://obscure-basin-36143.herokuapp.com/", "_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Budget App"  }
          },
    });
        
    };
    
    const popupboxConfigBudget = {
        titleBar: {
            enable: true,
            text: "Budget App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    
    };
    const openPopupboxFitness = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {fitness} alt="Fitness App"  />
        <p>An application that allows users to view, create and track daily workouts. Also, it allows them to log multiple exercises in a workout on a given day and be able to track the name, type, weight, sets, reps, and duration of the exercise. They will be able to visualize their progress through graphs as well.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/workout-tracker1", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://shielded-stream-87737.herokuapp.com/?id=6055fa93b1043500158d8cf5", "_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Fitness App"  }
          },
    });
        
    };
    
    const popupboxConfigFitness = {
        titleBar: {
            enable: true,
            text: "Fitness App"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    
    };

    const openPopupboxNote = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {note} alt="Note App"  />
        <p>This application will help you create, save a Note and update it later.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/note-taker", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://radiant-wave-81508.herokuapp.com/", "_blank")}
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
        <img className="image-popupbox" src = {travel} alt="Travel App"  />
        <p>This Application can be used in any browser available. The purpose of this application is to provide tourists help in guidance finding deliciouse foods, location of restourants,current weather and 5 days weather foreacst.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/groupproject1", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://nataliasozontova.github.io/group_project//", "_blank")}
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

    const openPopupboxWeather = () => {
        const content = (
        <>
        <img className="image-popupbox" src = {weather} alt="Weather App"  />
        <p>Building a weather dashboard applcation that retrieve weather data for cities and retrieve 5 day's forcast data as well.</p>
        <a className="hyper-link" onClick={() => window.open("https://github.com/LShuqair/Weather-Dashboard-API", "_blank")} >GitHub</a>
                <br></br>
                <a a className="hyper-link" onClick={() => window.open("https://lshuqair.github.io/Weather-Dashboard-API/","_blank")}
               >Deployed</a>
        </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({  content, config: {
                          titleBar: {  text: "Weather App"  }
          },
    });
        
    };
    
    const popupboxConfigWeather = {
        titleBar: {
            enable: true,
            text: "Weather App"
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
                <div className="image-box" onClick={openPopupboxBudget}>
                    <img className="image" src={budget} alt="Budget App" />
                    <div className="overflow"></div>
              
                    
                </div>

                <div className="image-box" onClick={openPopupboxFitness}>
                    <img className="image" src={fitness} alt="Fitness App" />
                    <div className="overflow"></div>
              
                    
                </div>

                <div className="image-box" onClick={openPopupboxNote}>
                    <img className="image" src={note} alt="Note App" />
                    <div className="overflow"></div>
              
                    
                </div>
                <div className="image-box" onClick={openPopupboxTravel}>
                    <img className="image" src={travel} alt="Travel App" />
                    <div className="overflow"></div>
              
                    
                </div>

        

                <div className="image-box" onClick={openPopupboxWeather}>
                    <img className="image" src={weather} alt="Weather App" />
                    <div className="overflow"></div>
              
                    
                </div>

                </div>

        </div>
        <PopupboxContainer {...popupboxConfigBurger}/>
        <PopupboxContainer {...popupboxConfigFitness}/>
        <PopupboxContainer {...popupboxConfigBudget}/>
        <PopupboxContainer {...popupboxConfigNote}/>
        <PopupboxContainer {...popupboxConfigTravel}/>
        <PopupboxContainer {...popupboxConfigWeather}/>
       
        </div>
    )
}

export default Portfolio;