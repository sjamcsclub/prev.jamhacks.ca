import React, { Component } from "react";

import "./Mentor.css";

import { Button } from "antd";

import { ReactComponent as mentor1 } from "../../Assets/Mentor1.svg";
import { ReactComponent as mentor2 } from "../../Assets/Mentor2.svg";
import { ReactComponent as mentor3 } from "../../Assets/Mentor3.svg";

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div
          className="mentor-div"
          style={{ height: "fit-content", minHeight: "0px" }}
        >
          <div
            className="sponsor-content-div"
            style={{
              margin: "0px",
              padding: "0px",
              height: "fit-content",
              minHeight: "0px",
              flexWrap: "wrap",
            }}
            data-aos="fade-up"
          >
            <div
              className="sponsor-title-div large-title"
              style={{
                width: "100%",
                textAlign: "left",
                height: "fit-content",
              }}
            >
              We Need You!
            </div>
            <div className="sponsor-content-text larger-sponsor-text">
              Some stuff about we need whether you are a<br></br>
              hacker or a sponsor or as a volunteer we need you.
            </div>
          </div>
        </div>

        <div className="mentor-div">
          <div className="sponsor-content-div">
            <div className="sponsor-content-half" data-aos="fade-up">
              <div className="sponsor-title-div">sponsoring At JAMHacks</div>
              <div className="sponsor-content-text">
                We are open to connecting with both sponsors and partner
                companies. As a partner company, you will provide a real or
                practice project for our talented fellows to work on. We ensure
                a smooth and easy process for you - our team takes care of all
                the administration work, so you get to focus on collaborating
                with our participants.
              </div>
              <a href="https://bit.ly/visionarysponsoring" target="_blank">
                <Button type="primary" ghost={true} style={{ height: "40px" }}>
                  Apply To Be a sponsor
                </Button>
              </a>
            </div>
            <div
              className="sponsor-content-half"
              style={{ alignItems: "center" }}
              data-aos="fade-up"
            >
              <div style={{ height: "75px" }}>
                {/* <sponsor1></sponsor1> */}
                <div className="sponsor1"></div>
              </div>
              <div style={{ marginLeft: "30px" }}>
                {/* <sponsor2></sponsor2> */}
                <div className="sponsor2"></div>
              </div>
              <div style={{ marginRight: "30px", marginTop: "5px" }}>
                {/* <sponsor3></sponsor3> */}
                <div className="sponsor3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mentor-div" style={{ paddingBottom: "40px" }}>
          <div className="sponsor-content-div" style={{ flexWrap: "wrap" }}>
            <div
              className="sponsor-content-half"
              data-aos="fade-up"
              style={{ alignItems: "center" }}
            >
              <div style={{ height: "80px", marginRight: "30px" }}>
                {/* <sponsor1></sponsor1> */}
                <div className="sponsor1"></div>
              </div>
              <div style={{ marginLeft: "30px" }}>
                {/* <sponsor2></sponsor2> */}
                <div className="sponsor2"></div>
              </div>
              <div style={{ marginTop: "10px", marginRight: "30px" }}>
                {/* <sponsor3></sponsor3> */}
                <div className="sponsor3"></div>
              </div>
            </div>
            <div className="sponsor-content-half" data-aos="fade-up">
              <div className="sponsor-title-div">Become a Volunteer</div>
              <div className="sponsor-content-text">
                Our pool of experienced sponsors is a critical aspect of our
                program. As a sponsor, you’ll be essential to the success of all
                parties involved in the fellowship. You’ll have the opportunity
                to share your software, design, and project expertise with our
                participants, through consulting, workshops, technical
                assistance, and lectures.
              </div>
              <a href="https://bit.ly/visionarysponsor" target="_blank">
                <Button type="primary" ghost={true} style={{ height: "40px" }}>
                  Volunteer at JAMHacks
                </Button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Mentor;
