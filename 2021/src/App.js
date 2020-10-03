import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";

import Navbar from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About";
import Mentor from "./Sections/Mentor/Mentor";
import Schedule from "./Sections/Schedule";
import Sponsor from "./Sections/Sponsor/Sponsor";
import SponsorDisplay from "./Sections/SponsorDisplay/SponsorDisplay";
import Faq from "./Sections/Faq/Faq";
import Team from "./Sections/Team/Team";
import Contact from "./Sections/Contact/Contact";

import Footer from "./Sections/Footer/Footer";
import Privacy from "./Sections/Privacy/Privacy";
import PrivNav from "./Sections/PrivNav/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    AOS.init();
    console.log(AOS);
  }

  componentDidMount() {
    var art = `     
Designed by: Kevin Gao
Developed by: Daniel Yu, Kevin Gao

Copyright (c) 2020 JAMHacks. 
`;
    console.log(art);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/privacy-policy">
              <PrivNav></PrivNav>
              <Privacy></Privacy>
              <Footer></Footer>
            </Route>
            <Route path="/">
              <Navbar />
              <Hero />
              <About />
              <Mentor />
              <Schedule />
              <Sponsor />
              <SponsorDisplay />
              <Faq />
              <Team />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
