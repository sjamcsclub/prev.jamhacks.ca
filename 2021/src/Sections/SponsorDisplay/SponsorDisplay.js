import React, { Component } from "react";
import { Collapse } from "antd";
import "./SponsorDisplay.css";

import CloudFlare from "../../Assets/Logos/Cloudflare.png";
import WolframAlpha from "../../Assets/Logos/WolframAlpha.png";
import TutorBright from "../../Assets/Logos/TutorBright.png";
import Linode from "../../Assets/Logos/Linode.png";
import CtrlV from "../../Assets/Logos/CtrlV.png";
import Password from "../../Assets/Logos/1Password.png";
import MSU from "../../Assets/Logos/MSU.png";
import Museum from "../../Assets/Logos/Museum.png";
import Balsamiq from "../../Assets/Logos/Balsamiq.png";
import SweaterPlanet from "../../Assets/Logos/SweaterPlanet.png";
import Devfolio from "../../Assets/Logos/Devfolio.png";
import Matic from "../../Assets/Logos/Matic.png";
import Portis from "../../Assets/Logos/Portis.png";
import Tezos from "../../Assets/Logos/Tezos.png";
import Framer from "../../Assets/Logos/Framer.svg";
import UW from "../../Assets/Logos/UW.png";
import Axure from "../../Assets/Logos/Axure.png";

var strawberry = [
  {
    link: "https://uwaterloo.ca/",
    logo: UW
  }
]

var grape = [
  {
    link: "https://thesweaterguys.com/",
    logo: SweaterPlanet
  },
  {
    link: "https://themuseum.ca/",
    logo: Museum
  },
  {
    link: "https://devfolio.co",
    logo: Devfolio
  },
  {
    link: "https://www.framer.com/",
    logo: Framer
  }
]

var peach = [
  // {
  //   link: "https://www.cloudflare.com/",
  //   logo: CloudFlare 
  // },
  {
    link: "https://www.wolfram.com/",
    logo: WolframAlpha
  },
  {
    link: "https://www.linode.com/",
    logo: Linode
  },
  {
    link: "https://ctrlv.ca/",
    logo: CtrlV
  },
  {
    link: "https://1password.com/",
    logo: Password
  },
  {
    link: "https://msumcmaster.ca/",
    logo: MSU
  },
  {
    link: "https://balsamiq.com/",
    logo: Balsamiq
  },
  {
    link: "https://matic.network",
    logo: Matic
  },
  {
    link: "https://www.portis.io/",
    logo: Portis
  },
  {
    link: "https://tezos.com",
    logo: Tezos
  },
  {
    link: "https://www.axure.com/",
    logo: Axure
  }
  
  // {
  //   link: "",
  //   logo: 
  // },
  // {
  //   link: "",
  //   logo: 
  // },
  // {
  //   link: "",
  //   logo: 
  // }
]

class SponsorDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sponsor-display-div" id="sponsors-section">
        <div
          className="sponsor-display-title-div large-title"
          data-aos="fade-up"
        >
          Sponsors
        </div>
        <div className="sponsor-display-content-div" data-aos="fade-up" style={{marginBottom: "0px"}}>
          {
            strawberry.map(val => {
              return (
                <a href={val.link} target="_blank" style={{display: "flex", justifyContent: "center", alignItems: "center"}} style={{marginBottom: "0px"}}>
                  <img src={val.logo} className="sponsor-display-item strawberry" style={{marginBottom: "0px"}}></img>
                </a>
              )
            })
          }
        </div>
        <div className="sponsor-display-content-div" data-aos="fade-up">
          {
            grape.map(val => {
              return (
                <a href={val.link} target="_blank" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <img src={val.logo} className="sponsor-display-item grape"></img>
                </a>
              )
            })
          }
        </div>
        <div className="sponsor-display-content-div" data-aos="fade-up">
          {
            peach.map(val => {
              return (
                <a href={val.link} target="_blank" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <img src={val.logo} className="sponsor-display-item peach"></img>
                </a>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default SponsorDisplay;
