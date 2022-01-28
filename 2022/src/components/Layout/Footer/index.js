import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import FooterWave from '../../../pages/Home/FooterWave';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Socials from '../../../data/socials';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.register = props.register;
  }
  render() {
    return (
      <div className="footer-div">
        {!this.props.disableWave && <FooterWave />}
        <div className="footer-content-div">
          <div className="footer-title-content">Follow us on social media</div>
          <div className="footer-icons-div" style={{ marginBottom: '20px' }}>
            <a
              href={Socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href={Socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Socials.twitter}
              style={{ color: 'white' }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Socials.facebook}
              style={{ color: 'white' }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href={Socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <FontAwesomeIcon icon={faMediumM} />
            </a>
            <a
              href={Socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white' }}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div className="footer-bottom-div">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              flexWrap: 'wrap',
              height: 'fit-content',
              marginBottom: '20px',
            }}
          >
            <a href="/">
              <div className="footer-logo"></div>
            </a>
            <div className="footer-copyright">
              Copyright © 2022 JAMHacks.{' '}
              <br className="footer-copyright-linebreak"></br> All rights
              reserved.
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jamhacks.ca/"
              className="footer-link"
            >
              Code of Conduct
            </a>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jamhacks.ca/2021/"
              className="footer-link"
            >
              2021 Site
            </a> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="\privacy-policy"
              className="footer-privacy"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
