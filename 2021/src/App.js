import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.less";

import Navbar from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About";
import Mentor from "./Sections/Mentor";
import Schedule from "./Sections/Schedule";
import Sponsor from "./Sections/Sponsor/Sponsor";
import SponsorDisplay from "./Sections/SponsorDisplay/SponsorDisplay";
import Partners from "./Sections/Partners/Partners";

import Faq from "./Sections/Faq/Faq";
import Team from "./Sections/Team/Team";
import Contact from "./Sections/Contact/Contact";

import Footer from "./Sections/Footer/Footer";
import Privacy from "./Sections/Privacy/Privacy";
import PrivNav from "./Sections/PrivNav/Navbar";

import NotFoundPage from "./Sections/NotFoundPage";

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
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      });
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
              <PrivNav register={Env.register} />
              <Privacy></Privacy>
              <Footer register={Env.register}></Footer>
            </Route>
            <Route exact path="/">
              <Navbar register={Env.register} />
              <Hero register={Env.register} />
              <About />
              <Mentor
                mentor={Env.mentor_register}
                volunteer={Env.volunteer_register}
              />
              {Env.schedule === "close" && <Schedule />}
              <Sponsor />
              <SponsorDisplay />
              <Partners />
              <Faq />
              <Team />
              <Contact />
              <Footer register={Env.register} />
            </Route>
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
