import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';

import {
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from '../../../Icons/Socials';
import Socials from '../../../../data/socials';

//animation variants
const MobileVariants = {
  open: { height: '100vh' },
  closed: { height: 0 },
};

const Menu = ({ sections, open }) => {
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
          {sections.map((link) =>
            link.enabled ? (
              <div className="navbar-mobile-link-container">
                <a
                  className="navbar-mobile-link-item"
                  onClick={() =>
                    window.scrollTo({
                      top: document.getElementById(link.id).offsetTop - 80,
                      left: 0,
                      behavior: 'smooth',
                    })
                  }
                >
                  {link.label}
                </a>
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
            <LinkedinIcon />
          </a>
          <a
            href={Socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram "
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Socials.twitter}
            className="social-icon twitter "
          >
            <TwitterIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Socials.facebook}
            className="social-icon facebook "
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
