import React, { Component } from "react";
import { Collapse } from "antd";
import "./SponsorDisplay.css";

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
        {/* <div className="sponsor-display-content-div" data-aos="fade-up">
                   
                </div> */}
      </div>
    );
  }
}

export default SponsorDisplay;
