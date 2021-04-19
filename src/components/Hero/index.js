import React from "react";
import "./style.css";
import Typical from "react-typical";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}

      <p id="p">
         I'm a {''} 
          <Typical
          loop={50}
          wrapper="b"
          steps={['Full Stack Developer',2000, 'Front-end Developer',2000, 'Back-end Developer',2000,
          ]}
          
          
          />
        </p>
    </div>
  );
}

export default Hero;
