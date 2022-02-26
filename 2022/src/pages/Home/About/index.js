import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import './About.css';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';

import Header from '../../../components/Typography/Header';
import Text from '../../../components/Typography/Text';

import { ReactComponent as SponsorImage } from '../../../assets/undraw/Everyone.svg';
// import past1 from '../../../assets/pastphotos/1 1.jpg';
// import past2 from '../../../assets/pastphotos/2 1.jpg';
// import past3 from '../../../assets/pastphotos/3 1.jpg';
// import past4 from '../../../assets/pastphotos/4 1.jpg';
// import past5 from '../../../assets/pastphotos/5 1.jpg';
// import past6 from '../../../assets/pastphotos/6 1.jpg';
// import past7 from '../../../assets/pastphotos/7.jpg';
// import past8 from '../../../assets/pastphotos/8.jpg';
// import past9 from '../../../assets/pastphotos/9.jpg';

// function shuffle(array) {
//   let currentIndex = array.length,
//     randomIndex;

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }
//   return array;
// }

// const Photos = [past1, past2, past3, past4, past5, past6, past8];
// shuffle(Photos);

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
              Waterloo’s largest high school hackathon is back! JAMHacks 6 will
              take place virtually on May 20th - 22nd, where 300+ high school
              students all over North America will gather for a weekend of
              learning and creating.
            </Text>
            <br></br>
            <Text dark>
              During this upcoming 36-hour innovation marathon, you’ll be able
              to work in teams of up to 4 to create an app, game, website,
              robot, gadget, or whatever else your heart desires. At the end of
              the event, you will have the opportunity to pitch your project to
              a panel of judges and compete for prizes!
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
                    to={{ prizes: isVisible ? 15000 : 0 }}
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
          {/* <Carousel
            autoplaySpeed={2000}
            ref={carousel}
            autoplay
            effect={'fade'}
            dots={false}
          >
            {Photos.map((photo, i) => (
              <div key={i} className="carousel-item-container">
                <img
                  className="carousel-item"
                  src={photo}
                  alt="past photo of jamhacks"
                />
              </div>
            ))}
          </Carousel> */}
          <SvgContainer>
            <SponsorImage />
          </SvgContainer>
        </div>
        <div className="about-content" data-aos="fade-up">
          <Header dark>All Hackers Welcome</Header>
          <div
            className="about-content-subheading"
            style={{ textAlign: 'left', width: '100%' }}
          >
            <Text dark>
              Hackers of all skill levels are welcome to participate in JAMHacks
              (even if you’ve never coded before)! JAMHacks is also a
              learnathon—there will be beginner-friendly workshops and mentors
              to guide you through brainstorming, coding, troubleshooting, and
              constructing a pitch for your project. We even have a “Best
              Beginner Hack” prize stream!
            </Text>
            <br></br>
            <Text dark>
              If you’re an experienced hacker, consider JAMHacks an opportunity
              to learn about advanced computer science topics and start your
              next passion project, all the while competing for a chance to win
              cool prizes!
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const SvgContainer = styled.div`
  justify-content: center;
  display: flex;
  & svg {
    width: 80%;
    height: 50%;
    margin-right: 0%;
  }
`;

export default About;
