import React, { Component } from 'react';
import { Collapse } from 'antd';
import './SponsorDisplay.css';

import CloudFlare from '../../../assets/Logos/Cloudflare.png';
import WolframAlpha from '../../../assets/Logos/WolframAlpha.png';
import TutorBright from '../../../assets/Logos/TutorBright.png';
import Linode from '../../../assets/Logos/Linode.png';
import CtrlV from '../../../assets/Logos/CtrlV.png';
import Password from '../../../assets/Logos/1Password.png';
import MSU from '../../../assets/Logos/MSU.png';
import Museum from '../../../assets/Logos/Museum.png';
import Balsamiq from '../../../assets/Logos/Balsamiq.png';
import SweaterPlanet from '../../../assets/Logos/SweaterPlanet.png';
import Devfolio from '../../../assets/Logos/Devfolio.png';
import Matic from '../../../assets/Logos/Matic.png';
import Portis from '../../../assets/Logos/Portis.png';
import Tezos from '../../../assets/Logos/Tezos.png';
import Framer from '../../../assets/Logos/Framer.svg';
import DigitalOcean from '../../../assets/Logos/DigitalOcean.svg';
import UW from '../../../assets/Logos/UW.png';
import Axure from '../../../assets/Logos/Axure.png';
import Magoosh from '../../../assets/Logos/Magoosh.png';
import KuzoClass from '../../../assets/Logos/KuzoClass.png';
import Repl from '../../../assets/Logos/Replit.svg';
import HackTheNorth from '../../../assets/Logos/HackTheNorth.png';
import Bestbuy from '../../../assets/Logos/Bestbuy.png';

var strawberry = [
  {
    link: 'https://www.uwaterloo.ca/',
    logo: UW,
  },
];

var grape = [
  {
    link: 'https://www.sweaterplanet.com/',
    logo: SweaterPlanet,
  },
  {
    link: 'https://www.themuseum.ca/',
    logo: Museum,
  },
  {
    link: 'https://www.digitalocean.com/',
    logo: DigitalOcean,
  },
];

var peach = [
  {
    link: 'https://www.framer.com/',
    logo: Framer,
  },
  {
    link: 'https://repl.it/',
    logo: Repl,
  },
  {
    link: 'https://www.wolfram.com/',
    logo: WolframAlpha,
  },
  {
    link: 'https://www.linode.com/',
    logo: Linode,
  },
  {
    link: 'https://www.ctrlv.ca/',
    logo: CtrlV,
  },
  {
    link: 'https://www.1password.com/',
    logo: Password,
  },
  {
    link: 'https://www.msumcmaster.ca/',
    logo: MSU,
  },
  {
    link: 'https://www.balsamiq.com/',
    logo: Balsamiq,
  },
  {
    link: 'https://www.axure.com/',
    logo: Axure,
  },
  {
    link: 'https://www.magoosh.com/',
    logo: Magoosh,
  },
  {
    link: 'https://www.bestbuy.ca/',
    logo: Bestbuy,
  },
];

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
        <div
          className="sponsor-display-content-div"
          data-aos="fade-up"
          style={{ marginBottom: '60px' }}
        >
          {strawberry.map((val) => {
            return (
              <a
                href={val.link}
                target="_blank"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '0px',
                }}
                className="strawberry-container"
              >
                <img
                  src={val.logo}
                  className="sponsor-display-item strawberry"
                  style={{ marginBottom: '0px' }}
                ></img>
              </a>
            );
          })}
        </div>
        <div className="sponsor-display-content-div" data-aos="fade-up">
          {grape.map((val) => {
            return (
              <a
                href={val.link}
                target="_blank"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                className="grape-container"
              >
                <img
                  src={val.logo}
                  className="sponsor-display-item grape"
                ></img>
              </a>
            );
          })}
        </div>
        <div className="sponsor-display-content-div" data-aos="fade-up">
          {peach.map((val) => {
            return (
              <a href={val.link} target="_blank" className="peach-container">
                <img
                  src={val.logo}
                  className="sponsor-display-item peach"
                ></img>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SponsorDisplay;
