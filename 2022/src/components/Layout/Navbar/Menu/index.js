import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Socials from '../../../../data/socials';

//animation variants
const MobileVariants = {
  open: { height: '100vh' },
  closed: { height: 0 },
};

const Menu = ({ sections, open, closeMenu }) => {
  return (
    <motion.div
      className="navbar-mobile-div"
      variants={MobileVariants}
      initial={'closed'}
      animate={open ? 'open' : 'closed'}
      transition={{ ease: 'easeOut', duration: 0.25 }}
    >
      <div className="test-navbar">
        <div className="navbar-mobile-links-div">
          {sections.map((link, i) =>
            link.enabled ? (
              <div key={i} className="navbar-mobile-link-container">
                <Link
                  className="navbar-mobile-link-item"
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById(link.id).offsetTop - 80,
                      left: 0,
                      behavior: 'smooth',
                    });
                    closeMenu();
                  }}
                >
                  {link.label}
                </Link>
              </div>
            ) : (
              ' '
            ),
          )}
        </div>
        <div
          className="footer-icons-div"
          style={{
            marginTop: '30px',
            marginLeft: '70px',
            justifyContent: 'space-between',
          }}
        >
          <a
            href={Socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin "
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href={Socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram "
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Socials.twitter}
            className="social-icon twitter "
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Socials.facebook}
            className="social-icon facebook "
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href={Socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook "
          >
            <FontAwesomeIcon icon={faMediumM} />
          </a>
          <a
            href={Socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook "
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </motion.div>
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

export default Menu;
