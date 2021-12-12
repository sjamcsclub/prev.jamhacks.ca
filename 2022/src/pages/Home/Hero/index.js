import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Newsletter from '../../../components/Newsletter';
import styled from 'styled-components';
import { media } from '../../../utils/media';
import { ReactComponent as Logo } from '../../../assets/logo/JAMHacks6Adjusted2.svg';

import './Hero.css';

const registerLinks = [
  /*'https://wvmzd7k3wc0.typeform.com/to/hTLmCfSw',*/
  /*'https://wvmzd7k3wc0.typeform.com/to/ZomNkpto',*/
  /*'https://uhsftk4mjsw.typeform.com/to/nBOIo2cb',*/
  /*'https://uhsftk4mjsw.typeform.com/to/Ef4CMC4A',*/
  /*'https://uhsftk4mjsw.typeform.com/to/skRsl7ss',*/
  'https://47m73ezscb9.typeform.com/to/NKRVtHhi',
];

const devpostGalleryLink = 'https://jamhacks-v.devpost.com/project-gallery';

const Hero = ({ register }) => {
  return (
    <div style={{ height: 'fit-content' }}>
      <div className="hero-div parallax">
        <div className="hero-content-div">
          <StyledLogo />
          <Subtitle>Learn, Connect, Innovate</Subtitle>
          {/* <LocationText>Virtual Event</LocationText>
        <DateText>2022 - TBD</DateText> */}
          <div style={{ width: '80%', maxWidth: '800px' }}>
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
                      type="primary"
                      disabled={register === 'complete'}
                      style={{ width: '180px', height: '40px', zIndex: '50' }}
                    >
                      {register === 'complete'
                        ? 'Applications Closed'
                        : 'Register'}
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
  margin: 1rem 0rem;
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
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  z-index: 5;
  color: white;
  font-size: 1.5rem;
  text-align: left;
  letter-spacing: 0.025em;

  text-shadow: -1px 2px 0 rgba(0, 0, 0, 0.3);

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
  color: white;
  font-size: 1rem;
  opacity: 90%;
  ${media('md')`
    justify-content: center;
  `}
`;
//  text-shadow: -1px 2px 0 rgba(0, 0, 0, 0.3);

export default Hero;
