import React, { Component } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import './Footer.css';

import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  MediumIcon,
  YoutubeIcon,
} from '../../Icons/Socials';
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
            >
              <LinkedinIcon primary="#ffffff" />
            </a>
            <a
              href={Socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon primary="#ffffff" />
            </a>
            <a href={Socials.twitter} target="_blank" rel="noopener noreferrer">
              <TwitterIcon primary="#ffffff" />
            </a>
            <a
              href={Socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon primary="#ffffff" />
            </a>
            <a href={Socials.medium} target="_blank" rel="noopener noreferrer">
              <MediumIcon primary="#ffffff" />
            </a>
            <a href={Socials.youtube} target="_blank" rel="noopener noreferrer">
              <YoutubeIcon primary="#ffffff" />
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
