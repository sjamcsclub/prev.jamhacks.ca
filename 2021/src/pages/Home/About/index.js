import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import './About.css';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';

import past1 from '../../../assets/pastphotos/1 1.jpg';
import past2 from '../../../assets/pastphotos/2 1.jpg';
import past3 from '../../../assets/pastphotos/3 1.jpg';
import past4 from '../../../assets/pastphotos/4 1.jpg';
import past5 from '../../../assets/pastphotos/5 1.jpg';
import past6 from '../../../assets/pastphotos/6 1.jpg';

const Photos = [past1, past2, past3, past4, past5, past6];

import Header from '../../../components/Typography/Header';
import Text from '../../../components/Typography/Text';

const About = () => {
  const [statsShown, setStatsShown] = useState(false);
  const carousel = useRef();

  const animateStats = (isVisible) => {
    setStatsShown(isVisible);
  };

  return (
    <div className="about-div" id="about-section">
      <div className="about-content-row-div">
        <div className="about-content jam-text" data-aos="fade-up">
          <Header dark>Waterloo’s biggest high school hackathon</Header>
          <div
            className="about-content-subheading"
            style={{ textAlign: 'left', width: '100%' }}
          >
            <Text dark>
              Waterloo’s largest high school hackathon is back! JAMHacks V will
              take place from May 22nd to 23rd. This year, we’re bringing
              together 200+ students from high schools all over North America
              for a full 24 hours of learning and creating!
            </Text>
            <br></br>
            <Text dark>
              During this 24 hour long innovation marathon, you’ll be able to
              work in teams of up to 4 to create an app, game, website, robot,
              gadget, or whatever your heart desires.
            </Text>
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
                      <h2 className="about-stat">{people.toFixed(0) + '+'}</h2>
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
                      <h2 className="about-stat">{'$' + prizes.toFixed(0)}</h2>
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
        style={{ flexWrap: 'wrap-reverse', marginBottom: '100px' }}
      >
        <div
          className="about-carousel-image"
          data-aos="fade-up"
          onClick={() => carousel.current.next()}
        >
          <Carousel
            autoplaySpeed={2000}
            ref={carousel}
            autoplay
            effect={'fade'}
            dots={false}
          >
            {Photos.map((photo) => (
              <div className="carousel-item-container">
                <img className="carousel-item" src={photo} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="about-content" data-aos="fade-up">
          <Header dark>All Hackers Welcome</Header>
          <div
            className="about-content-subheading"
            style={{ textAlign: 'left', width: '100%' }}
          >
            <Text dark>
              Hackers of all skill levels and backgrounds are welcome to
              participate in JAMHacks! JAMHacks is also a learnathon—there will
              be workshops and mentors to guide you through making a software or
              hardware project, even if you’ve never coded before! If you’re an
              experienced hacker, consider JAMHacks an opportunity to start your
              next passion project and compete for prizes at the same time!
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
