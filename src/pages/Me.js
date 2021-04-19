import React from "react";
import Hero from "../components/Hero";
import image from "../images/image.gif";


function Me() {
  return (
    <div>
      <Hero backgroundImage={image}>
        <h1>WELCOME TO MY Portforlio</h1>
        
      </Hero>

    </div>
  );
}

export default Me;