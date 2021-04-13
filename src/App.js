import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Portfolio";
import Me from "./pages/Me";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Typical from "react-typical";
import Portforlio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
       
      
          <Route exact path="/" component={Me} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portforlio" component={Portforlio} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
        
      </div>
    </Router>
  );
}

export default App;
