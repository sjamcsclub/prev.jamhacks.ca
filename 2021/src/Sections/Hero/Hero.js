import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Newsletter from "../../Components/Newsletter";

import "./Hero.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  render() {
    return (
      <div className="hero-div">
        <div className="hero-content-div">
          <div className="hero-title-div">
            <div>JAMHacks V</div>
          </div>
          <div className="hero-subtitle-div">
            <div>Learn, Connect, Innovate</div>
          </div>
          <div className="hero-subtitle-div">
            <div
              style={{ color: "#222130", fontSize: "20px", textAlign: "left" }}
            >
              Sir John A. Macdonald Secondary School
            </div>
          </div>
          <div className="hero-subtitle-div" style={{ marginTop: "10px" }}>
            <div style={{ color: "#222130", fontSize: "16px", opacity: "90%" }}>
              May 2 to 3, 2021
            </div>
          </div>
          {this.props.register === "close" ? (
            <div style={{ marginTop: "30px" }}>
              <Newsletter />
            </div>
          ) : (
            <div className="hero-button-div">
              <a href="https://bit.ly/visionaryapplication" target="_blank">
                <Button
                  type="primary"
                  disabled={this.props.register === "finished"}
                  style={{ width: "180px", height: "40px", zIndex: "50" }}
                >
                  {this.props.register === "finished"
                    ? "Applications Closed"
                    : "Register"}
                </Button>
              </a>
            </div>
          )}

          <div className="hero-subtitle-div">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top:
                    document.getElementsByClassName("sponsor-div")[0]
                      .offsetTop - 80,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="sponsor-action"
              style={{ color: "#222130", fontSize: "16px" }}
            >
              <div>Interested in sponsoring?</div>
            </Link>
          </div>
        </div>
        <div className="wave-div wave-animation">
          <div className="wave-wrapper">
            <div className="wave wave-top" />
          </div>
          <div className="wave-wrapper">
            <div className="wave wave-middle" />
          </div>
          <div className="wave-wrapper">
            <div className="wave wave-bottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
