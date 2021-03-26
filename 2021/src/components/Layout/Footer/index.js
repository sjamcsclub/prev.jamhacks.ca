import React, { Component } from 'react';
import { Button } from 'antd';

import { ReactComponent as Linkedin } from '../../../assets/icons/social/linkedin.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/social/instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/icons/social/twitter.svg';
import { ReactComponent as Facebook } from '../../../assets/icons/social/facebook.svg';

import './Footer.css';

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
        <div className="footer-content-div">
          <div className="footer-title-content">Follow us on social media</div>
          <div className="footer-icons-div" style={{ marginBottom: '20px' }}>
            <a
              href={Socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon white linkedin"
            >
              <Linkedin fill="white"></Linkedin>
            </a>
            <a
              href={Socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon white instagram"
            >
              <Instagram></Instagram>
            </a>
            <a
              href={Socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon white twitter"
            >
              <Twitter></Twitter>
            </a>
            <a
              href={Socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon white facebook"
            >
              <Facebook></Facebook>
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
            }}
          >
            <a href="/">
              <div className="footer-logo"></div>
            </a>
            <div className="footer-copyright">
              Copyright © 2021 JAMHacks.{' '}
              <br className="footer-copyright-linebreak"></br> All rights
              reserved.
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://jamhacks.ca/2020/"
              className="footer-link"
            >
              2020 Site
            </a>
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
