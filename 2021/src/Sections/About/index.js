import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import "./About.css";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import styled from "styled-components"
import { media } from "../../utils/media";

import past1 from "../../Assets/PastPhotos/1.png";
import past2 from "../../Assets/PastPhotos/2.png";
import past3 from "../../Assets/PastPhotos/3.png";
import past4 from "../../Assets/PastPhotos/4.png";
import past5 from "../../Assets/PastPhotos/5.png";
import past6 from "../../Assets/PastPhotos/6.png";

const About = () => {
  const [statsShown, setStatsShown] = useState(false);
  const carousel = useRef();

  const animateStats = (isVisible) => {
    setStatsShown(isVisible);
  };

  return (
    <div className="about-div" id="about-section">
      <div className="about-content-row-div">
        <div className="about-content jam-text">
          <div className="about-title-div" data-aos="fade-up">
            Waterloo’s biggest high school hackathon
          </div>
          <div
            className="about-content-subheading"
            data-aos="fade-up"
            style={{ textAlign: "left", width: "100%" }}
          >
            Waterloo’s largest high school hackathon is back! JAMHacks V will
            take place from May 22nd to 23rd. This year, we’re bringing together
            over 200+ students from high schools all over North America for a
            full 24 hours of learning and creating!
            <br></br>
            <br></br>
            During this 24 hour long innovation marathon, you’ll be able to work
            in teams of up to 4 to create an app, game, website, robot, gadget,
            or whatever your heart desires.
          </div>
        </div>

        <VisibilitySensor
          partialVisibility={true}
          offset={{ top: 120 }}
          onChange={animateStats}
          active={!statsShown}
        >
          {({ isVisible }) => (
            <div className="jam-image-div" data-aos="fade-up">
              <div className="about-stats">
                <div className="about-stat-container">
                  <Spring
                    from={{ people: 0 }}
                    to={{ people: isVisible ? 200 : 0 }}
                  >
                    {({ people }) => (
                      <h2 className="about-stat">{people.toFixed(0) + "+"}</h2>
                    )}
                  </Spring>
                  <h3 className="about-stat-title">students annually</h3>
                </div>
                <div className="about-stat-container">
                  <Spring
                    from={{ prizes: 0 }}
                    to={{ prizes: isVisible ? 4000 : 0 }}
                  >
                    {({ prizes }) => (
                      <h2 className="about-stat">{"$" + prizes.toFixed(0)}</h2>
                    )}
                  </Spring>
                  <h3 className="about-stat-title">in prizes</h3>
                </div>
              </div>
            </div>
          )}
        </VisibilitySensor>
      </div>
      <div
        className="about-content-row-div"
        style={{ flexWrap: "wrap-reverse", marginBottom: "100px" }}
      >
        <div
          className="about-carousel-image"
          onClick={() => carousel.current.slick.slickNext()}
          data-aos="fade-up"
        >
          <Carousel
            autoplaySpeed={2000}
            ref={carousel}
            autoplay
            effect={"fade"}
            dots={false}
          >
            <div className="carousel-item-container">
              <img className="carousel-item" src={past1} />
            </div>
            <div className="carousel-item-container">
              <img className="carousel-item" src={past2} />
            </div>
            <div className="carousel-item-container">
              <img className="carousel-item" src={past3} />
            </div>
            <div className="carousel-item-container">
              <img className="carousel-item" src={past4} />
            </div>
            <div className="carousel-item-container">
              <img className="carousel-item" src={past5} />
            </div>
            <div className="carousel-item-container">
              <img className="carousel-item" src={past6} />
            </div>
          </Carousel>
        </div>
        <div className="about-content">
          <div className="about-title-div" data-aos="fade-up">
            All Hackers Welcome
          </div>
          <div
            className="about-content-subheading"
            data-aos="fade-up"
            style={{ textAlign: "left", width: "100%" }}
          >
            Hackers of all skill levels and backgrounds are welcome to
            participate in JAMHacks! JAMHacks is also a learnathon—there will
            workshops and mentors to guide you through making a software or
            hardware project, even if you’ve never coded before! If you’re an
            experienced hacker, consider JAMHacks an opportunity to start your
            next passion project and compete for prizes at the same time!
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
