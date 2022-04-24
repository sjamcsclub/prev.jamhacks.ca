import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Newsletter from '../../../components/Newsletter';
import styled from 'styled-components';
import { media } from '../../../utils/media';
import { ReactComponent as Logo } from '../../../assets/logo/JAMHacks6Adjusted.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/ApplicationArrow.svg';
import { ReactComponent as TopRight } from '../../../assets/shapes/TopRight.svg';
import { ReactComponent as TopLeft } from '../../../assets/shapes/TopLeft.svg';
import { ReactComponent as BottomRight } from '../../../assets/shapes/BottomRight.svg';
import { ReactComponent as BottomLeft } from '../../../assets/shapes/BottomLeft.svg';

import './Hero.css';

const registerLinks = [
  /*'https://wvmzd7k3wc0.typeform.com/to/hTLmCfSw',*/
  /*'https://wvmzd7k3wc0.typeform.com/to/ZomNkpto',*/
  /*'https://uhsftk4mjsw.typeform.com/to/nBOIo2cb',*/
  /*'https://uhsftk4mjsw.typeform.com/to/Ef4CMC4A',*/
  /*'https://uhsftk4mjsw.typeform.com/to/skRsl7ss',*/
  'https://www.bouncelife.com/events/622ed14a37aaadee4b92886f',
];

const devpostGalleryLink = 'https://jamhacks-v.devpost.com/project-gallery';

const Hero = ({ register }) => {
  return (
    <div style={{ height: 'fit-content' }}>
      <div className="hero-div parallax">
        <div className="hero-content-div">
          <StyledLogo />
          <Subtitle>Learn, Connect, Innovate</Subtitle>
          <LocationText>Hybrid Event</LocationText>
          <DateText>University of Waterloo, May 20th - 22nd</DateText>
          <div
            style={{
              width: '80%',
              maxWidth: '800px',
            }}
          >
            {register ? (
              <div className="hero-button-div">
                {register === 'post-event' ? (
                  <a
                    href={devpostGalleryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      type="primary"
                      style={{
                        width: '180px',
                        height: '40px',
                        zIndex: '50',
                        // backgroundColor: '#003e54',
                      }}
                    >
                      View Projects
                    </Button>
                  </a>
                ) : (
                  <a
                    href={
                      registerLinks[
                        Math.floor(Math.random() * registerLinks.length)
                      ]
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="large"
                      type="primary"
                      disabled={register === 'complete'}
                      style={{ width: '230px', height: '50px', zIndex: '50' }}
                    >
                      {register === 'complete' ? (
                        'Applications Closed'
                      ) : (
                        <span
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {'Register Now '}
                          <Arrow style={{ marginLeft: '10px' }}></Arrow>
                        </span>
                      )}
                    </Button>
                  </a>
                )}
              </div>
            ) : (
              <>
                <Newsletter />
                <DateText className="hero-subtitle-div">
                  <Link
                    to="/"
                    onClick={() => {
                      window.scrollTo({
                        top:
                          document.getElementById('sponsor-section').offsetTop -
                          80,
                        left: 0,
                        behavior: 'smooth',
                      });
                    }}
                    className="sponsor-action"
                    style={{
                      color: '#7B0FF7',
                      fontSize: '16px',
                    }}
                  >
                    <div>Interested in sponsoring?</div>
                  </Link>
                </DateText>
              </>
            )}
          </div>
        </div>
        <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
          <TopLeft className="hero-background-asset1" />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '0px',
            right: '0px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <TopRight className="hero-background-asset2" />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <BottomLeft className="hero-background-asset1" />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <BottomRight className="hero-background-asset2" />
        </div>
      </div>
      <div style={{ height: '100vh', zIndex: -10 }}></div>
    </div>
  );
};

const StyledLogo = styled(Logo)`
  height: 10rem;
  width: auto;
  margin: 0;
  z-index: 5;
  text-alight: center;
  display: block;
  ${media('md')`
    height: 5rem;
    margin: auto;
  `}
  ${media('sm')`
    height: 3rem;
    margin: auto;
  `}
`;

const Subtitle = styled.h3`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  color: #7b0ff7;
  display: flex;
  justify-content: flex-start;
  z-index: 5;
  letter-spacing: 0.04em;
  margin: 1rem 0rem 0rem 0rem;
  ${media('md')`
    font-size: 1.5rem;
    justify-content: center;
  `}
  ${media('sm')`
    font-size: 1rem;
  `}
`;

const LocationText = styled.h4`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  z-index: 5;
  color: #7b0ff7;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.025em;
  ${media('md')`
    justify-content: center;
  `}
  ${media('sm')`
    font-size: 1rem;
  `}
`;

const DateText = styled.h4`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  z-index: 5;
  color: #7b0ff7;
  font-size: 1.25rem;
  opacity: 90%;
  ${media('md')`
    justify-content: center;
    font-size: 0.8rem;
  `}
`;
//  text-shadow: -1px 2px 0 rgba(0, 0, 0, 0.3);

export default Hero;
