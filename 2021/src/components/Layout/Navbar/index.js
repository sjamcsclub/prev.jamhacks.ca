import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from '../../Icons/Socials';
import './Navbar.css';

import Menu from './Menu';
import Socials from '../../../data/socials';

const Navbar = ({ sections, color }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', function (e) {
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      if (scrollTop > 10) {
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
      <Menu open={menuOpen} sections={sections} />
      <div className="navbar-logo-div">
        <div
          className="navbar-logo"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        ></div>
      </div>
      <div className="navbar-links-div">
        {sections.map((link) =>
          link.enabled ? (
            <Link
              key={link.label}
              className="navbar-link-item"
              onClick={() =>
                window.scrollTo({
                  top: document.getElementById(link.id).offsetTop - 80,
                  left: 0,
                  behavior: 'smooth',
                })
              }
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
          <LinkedinIcon />
        </a>
        <a
          href="https://www.instagram.com/jamhacks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a href={Socials.twitter} target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href={Socials.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
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
