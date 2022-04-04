import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faInstagramSquare,
  faLinkedin,
  faLinkedinIn,
  faMedium,
  faMediumM,
  faTwitter,
  faTwitterSquare,
  faYoutube,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

import Menu from './Menu';
import Socials from '../../../data/socials';

const Navbar = ({ sections, color, location }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function (e) {
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      if (scrollTop > window.innerHeight - 80 || location != 'home') {
        document
          .getElementsByClassName('navbar-div')[0]
          .classList.add('scrolled-navbar');
        for (
          var i = 0;
          i < document.getElementsByClassName('navbar-link-item').length;
          i++
        ) {
          document
            .getElementsByClassName('navbar-link-item')
            [i].classList.add('navbar-scrolled-link');
        }
        for (
          var i = 0;
          i < document.getElementsByClassName('navbar-social-icon').length;
          i++
        ) {
          document
            .getElementsByClassName('navbar-social-icon')
            [i].classList.add('navbar-social-icon-scrolled');
          if (
            document.getElementsByClassName('navbar-scrolled-social-icon')[i]
          ) {
            document.getElementsByClassName('navbar-scrolled-social-icon')[
              i
            ].style.display = 'flex';
          }
        }
      } else {
        document
          .getElementsByClassName('navbar-div')[0]
          .classList.remove('scrolled-navbar');
        for (
          var i = 0;
          i < document.getElementsByClassName('navbar-link-item').length;
          i++
        ) {
          document
            .getElementsByClassName('navbar-link-item')
            [i].classList.remove('navbar-scrolled-link');
        }
        for (
          var i = 0;
          i < document.getElementsByClassName('navbar-social-icon').length;
          i++
        ) {
          document
            .getElementsByClassName('navbar-social-icon')
            [i].classList.remove('navbar-social-icon-scrolled');
          if (
            document.getElementsByClassName('navbar-scrolled-social-icon')[i]
          ) {
            document.getElementsByClassName('navbar-scrolled-social-icon')[
              i
            ].style.display = 'none';
          }
        }
      }
    });
  });

  const handleClick = () => {
    if (menuOpen) {
      document.getElementById('hamburger-1').classList.remove('is-active');
      setMenuOpen(false);
    } else {
      document.getElementById('hamburger-1').classList.add('is-active');
      setMenuOpen(true);
    }
  };

  return (
    <div className="navbar-div">
      <a
        id="mlh-trust-badge"
        href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
          alt="Major League Hacking 2022 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a>
      <Menu
        open={menuOpen}
        sections={sections}
        closeMenu={() => {
          setMenuOpen(false);
          document.getElementById('hamburger-1').classList.remove('is-active');
        }}
      />
      <div className="navbar-logo-div">
        <div
          className="navbar-logo"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
        ></div>
      </div>
      <div className="navbar-links-div">
        {sections.map((link) =>
          link.enabled ? (
            <Link
              key={link.label}
              className="navbar-link-item"
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById(link.id).offsetTop - (80 - 1),
                  left: 0,
                  behavior: 'smooth',
                });
              }}
            >
              {link.label}
            </Link>
          ) : (
            ''
          ),
        )}
      </div>
      <div className="navbar-filler-div"></div>
      <div className="navbar-icons-div">
        <a href={Socials.linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://www.instagram.com/jamhacks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href={Socials.twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={Socials.facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href={Socials.medium} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
        <a href={Socials.youtube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className="hamburger" id="hamburger-1" onClick={handleClick}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

const Link = styled.div`
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.secondary ? props.secondary : props.theme.colors.secondary.default};
  }
`;

export default Navbar;
