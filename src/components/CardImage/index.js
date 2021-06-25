import React from "react";
import luna from "../../images/luna.png";
import github from "../../images/github.png";
import linkedin2 from "../../images/linkedin2.png";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
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
            <p>Connect with me on <a href="https://github.com/LShuqair"><img id="social"src={github}></img></a> and  <a href="https://www.linkedin.com/in/luna-shuqair-7739b41ba/"><img id="social"src={linkedin2}></img></a></p>
        <br></br>
        </div>
        <div>
        {/* <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter> */}
        </div>
    </div>
    </div>
)
}

export default CardImage;