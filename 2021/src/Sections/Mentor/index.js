import React, { Component } from "react";
import { Button } from "antd";
import "./Mentor.css";

import { ReactComponent as MentorImage } from "../../Assets/Brainstorming.svg";
import { ReactComponent as VolunteerImage } from "../../Assets/Volunteer.svg";

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.mentor === "close" && this.props.volunteer === "close") {
      return "";
    } else {
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
                Not interested in hacking but still want to participate?
                Hackers, mentors, and volunteers are all crucial for JAMHacks to
                run! Join as a mentor or volunteer to help us create the most
                memorable experience for our young innovators.
              </div>
            </div>
          </div>
          <div className="mentor-div">
            <div className="sponsor-content-div">
              <div className="sponsor-content-half" data-aos="fade-up">
                <div className="sponsor-title-div">Mentor Upcoming Talent</div>
                <div className="sponsor-content-text">
                  We invite anyone willing to share their knowledge to mentor at
                  JAMHacks! That could mean you’re in university or have
                  experience in the tech industry. We’re counting on you to
                  answer our hackers’ questions and bring their ideas into
                  reality! Learn more about mentor expectations:
                </div>
                <a href="" target="_blank">
                  <Button
                    type="primary"
                    style={{ height: "40px" }}
                    disabled={this.props.mentor === "finished"}
                  >
                    {this.props.mentor === "finished"
                      ? "Applications Closed"
                      : "Apply to be a Mentor"}
                  </Button>
                </a>
              </div>
              <div
                className="sponsor-content-half"
                style={{ alignItems: "center" }}
                data-aos="fade-up"
              >
                <div className="mentor-section-image-container">
                  <MentorImage />
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
                <div className="mentor-section-image-container">
                  <VolunteerImage />
                </div>
              </div>
              <div className="sponsor-content-half" data-aos="fade-up">
                <div className="sponsor-title-div">Become a Volunteer</div>
                <div className="sponsor-content-text">
                  JAMHacks wouldn’t be a reality without our amazing volunteers!
                  Join as a volunteer and help the event run smoothly from
                  registration to post-event, all while gaining volunteer
                  experience, an inside look on how a hackathon runs, and swag!
                </div>
                <a href="" target="_blank">
                  <Button
                    type="primary"
                    style={{ height: "40px" }}
                    disabled={this.props.volunteer === "finished"}
                  >
                    {this.props.mentor === "finished"
                      ? "Applications Closed"
                      : "Volunteer at JAMHacks"}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Mentor;
