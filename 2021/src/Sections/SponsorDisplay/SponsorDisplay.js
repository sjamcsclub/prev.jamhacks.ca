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
import DigitalOcean from "../../Assets/Logos/DigitalOcean.svg";
import UW from "../../Assets/Logos/UW.png";
import Axure from "../../Assets/Logos/Axure.png";
import Magoosh from "../../Assets/Logos/Magoosh.png";
import KuzoClass from "../../Assets/Logos/KuzoClass.png";

var strawberry = [
  {
    link: "https://www.uwaterloo.ca/",
    logo: UW
  },
  {
    link: "https://www.digitalocean.com/",
    logo: DigitalOcean
  }
]

var grape = [
  {
    link: "https://www.sweaterplanet.com/",
    logo: SweaterPlanet
  },
  {
    link: "https://www.themuseum.ca/",
    logo: Museum
  },
  {
    link: "https://www.devfolio.co",
    logo: Devfolio
  },
  {
    link: "https://www.framer.com/",
    logo: Framer
  }
]

var peach = [
  {
    link: "https://kuzoclass.com/",
    logo: KuzoClass 
  },
  {
    link: "https://www.wolfram.com/",
    logo: WolframAlpha
  },
  {
    link: "https://www.linode.com/",
    logo: Linode
  },
  {
    link: "https://www.ctrlv.ca/",
    logo: CtrlV
  },
  {
    link: "https://www.1password.com/",
    logo: Password
  },
  {
    link: "https://www.msumcmaster.ca/",
    logo: MSU
  },
  {
    link: "https://www.balsamiq.com/",
    logo: Balsamiq
  },
  {
    link: "https://www.matic.network",
    logo: Matic
  },
  {
    link: "https://www.portis.io/",
    logo: Portis
  },
  {
    link: "https://www.tezos.com",
    logo: Tezos
  },
  {
    link: "https://www.axure.com/",
    logo: Axure
  },
  {
    link: "https://www.magoosh.com/",
    logo: Magoosh
  }

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
                <a href={val.link} target="_blank" style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px"}} >
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
