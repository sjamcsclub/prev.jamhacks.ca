import React, { Component } from "react";
import { Button } from "antd";
import SponsorPackage from "../../Assets/Sponsorship Package.pdf";

import "./Sponsor.css";

import { ReactComponent as SponsorImage } from "../../Assets/Sponsor.svg";

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sponsor-div">
        <div className="sponsor-content-div">
          <div className="sponsor-content-half" data-aos="fade-up">
            <div className="sponsor-title-div">Sponsor the Next Generation</div>
            <div className="sponsor-content-text">
              Want to make a lasting impression on our future innovators,
              coders, and entrepreneurs? Consider sponsoring JAMHacks! By doing
              so, you can connect with our hackers, gain exposure among those
              interested in tech, and even seek out potential recruits!
              <br></br>
              <br></br>
              Interested in sponsoring? Check out our{" "}
              <a href={SponsorPackage} target="_blank">
                prospectus
              </a>{" "}
              and contact us at{" "}
              <a href="mailto:sponsor@jamhacks.com">sponsor@jamhacks.com</a>
            </div>
            <a href="mailto:sponsor@jamhacks.com" target="_blank">
              <Button type="primary" style={{ width: "260px", height: "40px" }}>
                Become a Sponsor
              </Button>
            </a>
          </div>
          <div
            className="sponsor-content-half"
            style={{ alignItems: "center" }}
            data-aos="fade-up"
          >
            <div className="sponsor-image-container">
              <SponsorImage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsor;
