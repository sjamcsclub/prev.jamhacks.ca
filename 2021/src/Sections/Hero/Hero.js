import React, { Component } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Newsletter from "../../Components/Newsletter";
import styled from "styled-components";
import { media } from "../../utils/media";

import "./Hero.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="hero-div">
        <div className="hero-content-div">
          <Title>JAMHacks V</Title>
          <Subtitle>Learn, Connect, Innovate</Subtitle>
          <LocationText>Virtual Event</LocationText>
          <DateText>May 22 to 23, 2021</DateText>
          <div style={{ margin: "1.5rem 0" }}>
            {this.props.register === "close" ? (
              <Newsletter />
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
          </div>

          <DateText className="hero-subtitle-div">
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
          </DateText>
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

const Title = styled.h1`
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 4rem;
  color: #7b0ff7;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  z-index: 5;
  ${media("md")`
    font-size: 3.5rem;
    justify-content: center;
  `}
  ${media("sm")`
    font-size: 2.5rem;
  `}
`;

const Subtitle = styled.h3`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  color: #3b00c3;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  z-index: 5;
  ${media("md")`
    font-size: 1.5rem;
    justify-content: center;
  `}
  ${media("sm")`
    font-size: 1rem;
  `}
`;

const LocationText = styled.h4`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  z-index: 5;
  color: #222130;
  font-size: 1.5rem;
  text-align: left;
  ${media("md")`
    justify-content: center;
  `}
  ${media("sm")`
    font-size: 1rem;
  `}
`;

const DateText = styled.h4`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  z-index: 5;
  color: #222130;
  font-size: 1rem;
  opacity: 90%;
  ${media("md")`
    justify-content: center;
  `}
`;

export default Hero;
