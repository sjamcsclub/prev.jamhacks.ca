import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";

import Navbar from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About";
import Mentor from "./Sections/Mentor";
import Schedule from "./Sections/Schedule";
import Sponsor from "./Sections/Sponsor/Sponsor";
import SponsorDisplay from "./Sections/SponsorDisplay/SponsorDisplay";
import Faq from "./Sections/Faq/Faq";
import Team from "./Sections/Team/Team";
import Contact from "./Sections/Contact/Contact";

import Footer from "./Sections/Footer/Footer";
import Privacy from "./Sections/Privacy/Privacy";
import PrivNav from "./Sections/PrivNav/Navbar";

import Env from "./env.js";

import AOS from "aos";
import "aos/dist/aos.css";

import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCDdAEQqSy8Pni1iKOyOB8xUDAR4I0f9Q0",
  authDomain: "jamhacks-4d6a6.firebaseapp.com",
  databaseURL: "https://jamhacks-4d6a6.firebaseio.com",
  projectId: "jamhacks-4d6a6",
  storageBucket: "jamhacks-4d6a6.appspot.com",
  messagingSenderId: "224359886930",
  appId: "1:224359886930:web:793771bdb963fd1831ef8b",
  measurementId: "G-YBCXKJL5HW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    AOS.init();
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
              <PrivNav />
              <Privacy></Privacy>
              <Footer register={Env.register}></Footer>
            </Route>
            <Route exact path="/code-of-conduct">
              <PrivNav />
              <Privacy></Privacy>
              <Footer register={Env.register}></Footer>
            </Route>
            <Route path="/">
              <Navbar register={Env.register} />
              <Hero register={Env.register} />
              <About />
              <Mentor
                mentor={Env.mentor_register}
                volunteer={Env.volunteer_register}
              />
              {Env.schedule === "open" && <Schedule />}
              <Sponsor />
              {/* <SponsorDisplay /> */}
              <Faq />
              <Team />
              <Contact />
              <Footer register={process.env.REACT_APP_REGISTER} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
