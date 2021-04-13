import React from "react";
import "./style.css";
import Typical from "react-typical";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}

      <p>
          I'm a {''} 
          <Typical
          loop={50}
          wrapper="b"
          steps={['developer',2000,'designer',2000,'programmer',2000]}
          
          
          />
        </p>
    </div>
  );
}

export default Hero;
