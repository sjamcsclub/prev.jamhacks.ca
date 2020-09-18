import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.less';

import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import ValueProp from "./Components/ValueProp/ValueProp"
import Projects from "./Components/Projects/Projects"
import SponsorDisplay from "./Components/SponsorDisplay/SponsorDisplay"
import Team from "./Components/Team/Team"
import Sponsor from "./Components/Sponsor/Sponsor"
import Mentor from "./Components/Mentor/Mentor"
import Footer from "./Components/Footer/Footer"
import Privacy from "./Components/Privacy/Privacy"
import PrivNav from "./Components/PrivNav/Navbar"
import Faq from "./Components/Faq/Faq"

import AOS from 'aos'
import "aos/dist/aos.css";

class App extends React.Component{
  constructor(){
    super()
    this.state = {}
    AOS.init(); 
    console.log(AOS)
  }

  componentDidMount(){
    var art=`     
                     ▒▒█████▓▌▒
                    ▓▓▓▓▀▀▀▓▀▓▓▄▒                  ▄▄▓▓▓▓▓▓▓▄
                   ▒▓▓▌      ▒▓▓▌▒                ▓▓▓▓▓▀▀▐▓▓█▓
                  ░▒▓█▒      ░▐▓█▒              ▐▒██▓▒    ▒▓▓▓
                   ▒▓▓▒        ▓▓▓▒             ▐▓▓▀░      ▒▓▓▒
                   ▐▓▓▓▒       ▐▓▓▓            ▒▓▓▌       ▒▓▓▓
                   ▒▓█▓        ▒▓█▓            ▒▓▓▌       ▒▓█▓
                    ▒▓▓▌        ▒▓▓▄          ▒▓▓▓▒       ▒▓▓▀
                    ▒▓█▌▒        ▓▓▌▒         ▐▓▓▌▒      ▐▓▓▓▒
                     ▐▓█▒▒       ▓▓█▒▒        ▐▓█▌▒      ▐▓▓▒
                     ▐▓▓▓▒       ▐▓▓▓▒       ▒▓▓▓▒      ▐▓▓▓▒
                     ▒▌▓▓▌       ▒▓▓▓▒       ▓▓▓▓       ▐▓▓▒
                      ▒▓██▒        ▓█▌▒      ▓▓▓▒      ▒▓█▓▒
                       ▓▓▓▌        ▓▓▓▌     ▒▓▓▀▒     ▒▄▓▓▒
                       ▐▓▓▌        ▓▓▓▌    ▒▓▓▓       ▐▓▓▓▒
                       ▒▓▓▓▒       ▒▓▓▓▒  ▒▒██▓       ▓▓▓▒░
                ▄▄▄▓▓▓▓▓▓██▒        ▐▓▓▓▒ ▐▓▓▓▒      ░▓█▌▒
              ▒▓▓▓▓▓▀▀▀▀▐▓▓▓▒        ▓▓▓▓██▓▓▒░     ▒▓▓▓▌
         ▄▄▒▒▓▓▓▓▌░      ▒▓█▌        ▒▓▓█▓█▓▌       ▒██▓
      ▐▄▄██████▓▓▒       ▒▓▓▓▒         ▀▀▓▀▀        ▒▓▓▀
    ▓█▓██▓▓▓▓▓▓▓▓██▌▒    ▒▓▓▓▓█▓▌▒▒                 ▒▓▓▌
    ▓▓██▓█▓▓███▓▓▓█▓██▒  ▒▓███████▓██▓▒             ▒▓█▒
    ████▓▓▓▓▓▒▒▓▓█▓▀▀░  ▐▓▓▓▀▀   ▀▀▓▀▓▓▓▓▓▓▄▄▄      ▒▓▓▒
    ████▓▓▓▓█▒▒▓▓▓▓▒    ▓▓▓▒           ▀▀▓▓▓▓████▄▄ ▓▓▓▌
    ▓▓████▓▓█▓▒▓▓▓█▒   ▒▓▓▓▒               ▒▐█▓▓█▓██▓█▓▓
    ▀▓▓██▓▓▓▓▀▀▀▀▓▓▌    ▐▓▓▓▄                  ▓▀▀▀▀████▄
      ▓██▓▀▀▀    ▓█▓▌▒   ▒▓▓██▄▒                 ▒▒█▓▓██▓▄▒
      ▓██▓▒       ▓▓▓▓     ▐▓▓█▓▓▓▓▄░          ▒▐▓██▓▓█▓▓█▌░
      ▓███▓▄       ▀▓▓▓▄      ▀▓█▓▓▓▓▓▓▓▓▓▓▓▒   ▒▀▀▀▀▀▀▀▓▓▓▌
      ▐▓▓████       ▒▓███▓▄  ▐█▓▓▓░░░▀░░▓▓▓░▒          ░▓▓▓█▒
      ▒▓▓█████░░▒▓▓▓▓▓██████▓▓▓█▌░              ▐▓█▓▒   ▒▓▓▓▒
       ▒▓▓▓▒▀▓██████████▓▀▓▀▀▒                ▒▓▓▓▓▓▓▓▓▓▓▓██▒
        ▒▓▓▌░ ▀▀▀▓▓▓▓▓▓▓▓███▓▌▒              ▓▓▓▓▓▓▓▓▓▓▓▓███▒
        ▓▓▓▓      ▐▓▓█▓▓█▓▓█▓▌▒              ▓▓▓█▓▓█▓▓█▓▓███▒
         ▐▓█▓       ▀▀▓▓▓▓▓▓▀▒               ▓▓▓▓▓▓▓▓▓▓▓▓██▓▒
         ▐▓▓█▓▒      ▐▓▓▓▓▒                   ░▓▓░░░▓▓▓▓▓█▓▓▒
           ▓█▓█▒        ▒                           ▐▓█████▒
            ▐▓▓▓▄▄                                  ▒▓▓██▓▀▒
             ▒▒▓██▄                                 ▒▓███▓▒
               ▐▓▓▓▌░                               ▒▓██▓▒
                 ▓▓▓▓░                              ▒▓▓█▀
                  ▓▓▓▓▒                            ▐▓▓▓▀


Designed by: Christina Chen
Developed by: Daniel Yu

Copyright (c) 2020 Visionary Development Studios. 
`
   console.log(art)

  }

  render(){
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
              <Navbar></Navbar>
              <Hero></Hero>
              {/* <About></About> */}
              <ValueProp></ValueProp>

              <Mentor></Mentor>
              {/* <Projects></Projects> */}
              <Sponsor></Sponsor>

              <SponsorDisplay></SponsorDisplay>
              <Faq></Faq>
              <Team></Team>
              <Footer></Footer>
            </Route>
          </Switch>
         
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
