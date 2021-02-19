import React, { Component } from "react";


import HackTheNorth from "../../Assets/Logos/HackTheNorth.png";

var strawberry = [
  {
    link: "https://hackthenorth.ca/",
    logo: HackTheNorth
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
          Partners
        </div>
        <div className="sponsor-display-content-div" data-aos="fade-up" style={{marginBottom: "60px"}}>
          {
            strawberry.map(val => {
              return (
                <a href={val.link} target="_blank" style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "0px"}} className="strawberry-container">
                  <img src={val.logo} className="sponsor-display-item strawberry" style={{marginBottom: "0px"}}></img>
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
