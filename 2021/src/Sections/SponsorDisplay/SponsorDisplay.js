import React, { Component } from "react";
import { Collapse } from "antd";
import "./SponsorDisplay.css";

import CloudFlare from "../../Assets/Logos/Cloudflare.png";
import WolframAlpha from "../../Assets/Logos/WolframAlpha.png";
import TutorBright from "../../Assets/Logos/TutorBright.png";
import Linode from "../../Assets/Logos/Linode.png";
import CtrlV from "../../Assets/Logos/CtrlV.png";
import Password from "../../Assets/Logos/1Password.png";

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
        <div className="sponsor-display-content-div" data-aos="fade-up">
          <a href="https://www.cloudflare.com/" target="_blank">
            <img src={CloudFlare} className="sponsor-display-item"></img>
          </a>
          <a href="https://www.wolfram.com/" target="_blank">
            <img src={WolframAlpha} className="sponsor-display-item"></img>
          </a>
          <a href="https://www.linode.com/" target="_blank">
            <img src={Linode} className="sponsor-display-item"></img>
          </a>
          <a href="https://ctrlv.ca/" target="_blank">
            <img src={CtrlV} className="sponsor-display-item"></img>
          </a>
          <a href="https://1password.com/" target="_blank">
            <img src={Password} className="sponsor-display-item"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default SponsorDisplay;
