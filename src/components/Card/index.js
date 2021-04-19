import React from "react";
import { render } from "react-dom";
import Project from "../Project";
import image1 from "../../images/image1-169x192.png";
import luna from "../../images/luna.png";

import "./style.css";


function Card(props) {
 
    return (
    
      <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Projects</h3>
                  <p className="subtitle-a">
                  Check My Porjects Here!
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
              </div>
  
              <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a href={image1} data-lightbox="gallery-vmarine">
                    <div className="work-img">
                      <img src={image1} alt=""/>
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">TRAVEL GUIDE </h2>
                          <div className="w-more">
                          <span className="w-ctegory">
                            Is an application that provides tourists a UAE map and help in guidance finding location of restaurants, current weather, and 5 days weather forecast in the UAE.
                            </span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  
                  
                  </div>
                  </div>
                  </div>
                
              
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div>
  </section>
    );
  }

  





export default Card;
