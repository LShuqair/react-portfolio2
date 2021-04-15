import React from "react";
import luna from "../../images/luna.png";
import "./style.css";

function CardImage(props) { 

    return (
        <div id="about" className="container py-5">
        <div className="row">
        <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-4">
            <img src={luna} alt="Luna Image" className="image-responsive Pic float-left padding" />
            </div>
        </div>
        <div className="col-lg-6 col-xm-12" id="paragraph">
        <h1 className="about-heading">Hey! I'm Luna</h1>
            <p>
            I got my Associate Degree in Information Technology last June. 
              I got accepted at George Washington University to finish my Bachelor’s Degree, but I decided to join the GW Bootcamp instead. I am currently a GW Bootcamp student. 
              However, attending this course will help me learn the fundamentals of becoming a full-stack developer.  So I can apply my knowledge to solve real problems in my future job. 
                I bring passion and enthusiasm to everything I do and have an insatiable thirst for knowledge in this area. 
                I persist to achieve and seek my goals.
            </p>
            <p>Connect with me on <a href="https://github.com/LShuqair">GitHub</a> and <a href="https://www.linkedin.com/in/luna-shuqair-7739b41ba/">LinkedIn</a></p>
        </div>
        </div>
    </div>
)
}

export default CardImage;